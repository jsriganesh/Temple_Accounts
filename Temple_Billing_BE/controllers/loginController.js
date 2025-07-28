
const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
    try {
        const {emailID,password}= req.body
        console.log({emailID,password})
        if(!emailID || !password) return res.status(400).json('All fields are required')

        let userDetails = await User.findOne({emailID}).populate('templeDetails')
        if(!userDetails) return res.status(400).json('user not exist!')

        if(userDetails.emailID === emailID && userDetails.password === password){
            // const jwtWebToken = jwt.sign({userID:userDetails._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            // console.log('userDetails:', userDetails)

            // const data = {
            //     userName:userDetails.userName,
            //     emailID:userDetails.emailID,
            //     mobileNo:userDetails.mobileNo,
            //     userID:userDetails.userID,
            //     type:userDetails.type,
            //     _id:userDetails._id,
            //     token:jwtWebToken
            // }
            return res.status(200).json(userDetails)
        }else{
            return res.status(400).json('Password Not matching')
        }

    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;
