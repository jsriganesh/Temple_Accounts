

const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const Temple = require('../models/templeModel');
const Bills = require('../models/billsModel');

const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');


// router.put('/:id/:templeID', async (req, res) => {
//     try {
//       const userID = req.params.id;
//       const templeID = req.params.templeID;
  
//       const user = await User.findOne({ userID: userID });
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       const temple = await Temple.findOne({ templeID: templeID });

//       if (!temple) {
//         return res.status(404).json({ message: 'Temple not found' });
//       }
  
//       user.templeDetails = temple._id;
  
//       await user.save();
  
//       const updatedUser = await User.findById(user._id).populate('templeDetails');
//       console.log('updatedUser ========>',updatedUser)
//       res.status(200).json(updatedUser);
//     } catch (error) {
//       console.log('ERROR:', error);
//       res.status(500).json({ message: error.message });
//     }
//   });

router.post('/', async (req, res) => {
  try{

      let data = {...req.body}
  
      const fromDate = data.fromDate;
      const toDate = data.toDate;
      const userID = data.userID;
      const templeID = data.templeID;

      let query =Bills.where('createdDate').gt(fromDate).where('createdDate').lt(toDate)
      .where('userID').equals(userID)
      .where('templeID').equals(templeID)

      const history = await query;


      const categoryTotals = history.reduce((acc, item) => {
        const { categoryName, amount } = item;
      
        if (!acc[categoryName]) {
          acc[categoryName] = 0;
        }
      
        acc[categoryName] += amount;
        return acc;
      }, {});
      console.log('categoryTotals ====>',categoryTotals)
      // Convert to array format for chart libraries (e.g., pie/bar chart)
      const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
        name: category,
        value:amount,
        color:category === 'income' ? '#35B82A' : category === 'expenses' ? '#F74C0B' : category === 'receipts' ? '#B0ED36' :  getRandomColor()
      }));
      console.log('chartData ====>',chartData)

      const expenseCategories = ['expenses']; 
      const holdingAmount = chartData.reduce((total, item) => {
        if (expenseCategories.includes(item.name.toLowerCase())) {
          return total - item.value;
        } else {
          return total + item.value;
        }
      }, 0);

      const preparData = {
          chartData:chartData,
          holdingAmount:holdingAmount || 0
      }

      res.status(200).json(preparData)

  } catch (error) {
      console.log('ERROR:', error)
      res.status(500).json({ message: error.message })
  }
})


module.exports = router;


