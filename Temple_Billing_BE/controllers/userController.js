

const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const Temple = require('../models/templeModel');



// router.put('/:id/:templeID', async (req, res) => {
//     try {
//         const userID = req.params.id;
//         const templeID = req.params.templeID;
//         console.log(userID)
//         let result = await User.findOne({ userID: userID });

//         if (!result) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const temple = await Temple.findOne({ templeID: templeID });
//         console.log("temple====",temple)

//         const newData ={...result,templeDetails:[temple]}
//         console.log("newData====",newData)

//         const user = await User.findByIdAndUpdate(result._id, result)
//         if (!user) {
//             return res.status(404).json({ message: `cant find the id ${result._id}` })
//         }

//         const userDetails = await User.findById(result._id)
//         res.status(200).json(userDetails)
//     } catch (error) {
//         console.log('ERROR:', error)
//         res.status(500).json({ message: error.message })
//     }
// })

router.put('/:id/:templeID', async (req, res) => {
    try {
      const userID = req.params.id;
      const templeID = req.params.templeID;
  
      const user = await User.findOne({ userID: userID });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const temple = await Temple.findOne({ templeID: templeID });

      if (!temple) {
        return res.status(404).json({ message: 'Temple not found' });
      }
  
      user.templeDetails = temple._id;
  
      await user.save();
  
      const updatedUser = await User.findById(user._id).populate('templeDetails');
      console.log('updatedUser ========>',updatedUser)
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log('ERROR:', error);
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;


