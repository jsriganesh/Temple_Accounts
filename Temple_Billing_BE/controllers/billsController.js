
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Temple = require('../models/templeModel');
const { default: axios } = require('axios');
const Users = require('../models/usersModel');
const Bills = require('../models/billsModel');
const { convertToISO } = require('../commonMethods');
var moment = require('moment');


router.post('/', async (req, res) => {
    try {

       let details = {...req.body};

       console.log('req.body =',details)

       if(!details.userID) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        if(!details.templeID) {
            return res.status(400).json({ message: 'temple ID is required' });
        }

        if(!details.categoryID) {
            return res.status(400).json({ message: 'category ID is required' });
        }

        if(!details.typeID) {
            return res.status(400).json({ message: 'type ID is required' });
        }


        const createdDate = convertToISO(new Date())

        const id = new Date().getTime()
        details={...details,billID:id,createdDate:createdDate}

        console.log('req =',details,createdDate)

        const bill = await Bills.create(details)
        console.log('bill =',bill)

        res.status(200).json(bill);

        // res.status(200).json(temple)

 
    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})

router.post('/history', async (req, res) => {
    try{

        let data = {...req.body}
    
        const fromDate = data.fromDate;
        const toDate = data.toDate;
        const userID = data.userID;
        const templeID = data.templeID;
        const categoryID = data.categoryID || null; // Use null if categoryID is not provided
        const typeID = data.typeID || null; // Use null if typeID is not provided

        let query =Bills.where('createdDate').gt(fromDate).where('createdDate').lt(toDate)
        .where('userID').equals(userID)
        .where('templeID').equals(templeID)
        // .where('typeID').equals(typeID);

        if (categoryID && typeID) {
            query = query.where('categoryID').equals(categoryID).where('typeID').equals(typeID);
        }else if (categoryID) {
            query = query.where('categoryID').equals(categoryID);
        }

        const history = await query;
       
        const preparData = {
            list:history,
            totalAmount: history.reduce((sum, item) => sum + item.amount, 0),
            totalCount: history.length
        }

        // const history = await Bills.where('cretedDate').gt(fromDate).where('cretedDate').lt(toDate)
        //                         .where('userID').equals(userID).where('templeID').equals(templeID)
        //                         .where('categoryID').equals(categoryID).where('typeID').equals(typeID)
  
        //                         console.log('history =', history)

        // const monthlyRecordCounts = Array(12).fill(0);

        //     // Process the data
        //     history.forEach((record) => {
        //     const date = new Date(record.dateOfJoin);
        //     const monthIndex = date.getMonth(); // Get month index (0 = January, 1 = February, ..., 11 = December)
        //     monthlyRecordCounts[monthIndex]++;
        //     });

        //     // Prepare the final output
        //     const result = {
        //     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        //     datasets: [
        //         {
        //         data: monthlyRecordCounts
        //         }
        //     ]
        //     };

        //     console.log(result);


        res.status(200).json(preparData)
 
    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})




module.exports = router;
