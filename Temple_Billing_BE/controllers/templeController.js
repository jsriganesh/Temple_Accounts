
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


module.exports = router;
