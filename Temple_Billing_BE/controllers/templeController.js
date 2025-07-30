
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Temple = require('../models/templeModel');
const { default: axios } = require('axios');
const Users = require('../models/usersModel');


router.post('/', async (req, res) => {
    try {

        let {templeDetails, userID} = req.body;
        // let templeDetails = {...req.body.templeDetails}
        // const userID = {...req.body.userID}

        console.log('full =', req.body)
        console.log('templeDetails =', templeDetails)
        console.log('userID =', userID)

        const id = new Date().getTime()
        templeDetails={...templeDetails,templeID:id}
        console.log('req =',templeDetails)

        const temple = await Temple.create(templeDetails)

        const url = 'http://localhost:4004/users/'+userID+'/'+temple.templeID
        console.log('url =',url)

        const response = await axios.put(url);

        console.log('response =',response)

        if (response.status === 200) {
            const user = await Users.findOne({ userID: userID }).populate('templeDetails');
            console.log('user =',user)

            res.status(200).json(user);
            
        } else {
            res.status(500).json({ message: 'Error in create temple' });
        }



        // res.status(200).json(temple)

 
    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})



router.put('/:id/:templeID', async (req, res) => {
    try {
      const userID = req.params.id;
      const templeID = req.params.templeID;
      let {templeDetails} = req.body;
    const _id = templeDetails._id
      console.log(userID,templeID,templeDetails)
      const package = await Temple.findByIdAndUpdate(_id, templeDetails)

    //   const temple = await Temple.findOne({ templeID: templeID });
      if (!package) {
        return res.status(404).json({ message: 'User not found' });
      }
        console.log('temple ========>',package)

    // temple = templeDetails;
  
    //   await temple.save();
  
    //   const updatedTemple = await Temple.findById(temple._id).populate('templeDetails');
    //   console.log('updatedUser ========>',updatedTemple)
    //   res.status(200).json(updatedTemple);
    
          const updatedUser = await Users.findOne({ userID: userID }).populate('templeDetails');


    //   const updatedUser = await Users.findById(userID._id).populate('templeDetails');
      console.log('updatedUser ========>',updatedUser)
      res.status(200).json(updatedUser);

    
    } catch (error) {
      console.log('ERROR:', error);
      res.status(500).json({ message: error.message });
    }
  });


// router.put('/:_id', async (req, res) => {
//     try {
//         const { _id } = req.params
//         const temple = await Temple.findByIdAndUpdate(_id, req.body)
//         if (!temple) {
//             return res.status(404).json({ message: `cant find the id ${_id}` })
//         }
//         const updateTemple = await Temple.findById(_id)
//         res.status(200).json(updateTemple)

//     } catch (error) {
//         console.log('ERROR:', error)
//         res.status(500).json({ message: error.message })
//     }
// })



module.exports = router;
