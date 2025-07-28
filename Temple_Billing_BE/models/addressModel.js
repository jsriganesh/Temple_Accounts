const mongoose = require('mongoose')
const addressSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please Enter the userName']
        },
        emailID:{
            type:String,
            required:[false,'']
        },
        mobileNo:{
            type:Number,
            required:[true,'Please Enter mobileNo']
        },
        userAddress:{
            type:String,
            required:[true,'Please Enter Address']
        },
        addressID:{
            type:String,
            required:[true,'Please Enter String']
        },
        latitude:{
            type:Number,
            required:[true,'Please Enter latitude']
        },
        longitude:{
            type:Number,
            required:[true,'Please Enter longitude']
        },
        createdDate:{
            type:String,
            required:[true,'Please Enter the created date']
        },
        pincode:{
            type:Number,
            required:[false,'']
        },
        state:{
            type:String,
            required:[false,'']
        },
        city:{
            type:String,
            required:[false,'']
        },
        country:{
            type:String,
            required:[false,'']
        },
        formattedAddress:{
            type:String,
            required:[false,'']
        },
        userID:{
            type:Number,
            required:[true,'Please Enter the user ID']
        },
    }
)

const Address = mongoose.model('Address',addressSchema)

module.exports = Address