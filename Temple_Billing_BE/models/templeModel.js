const mongoose = require('mongoose')
const templeSchema = mongoose.Schema(
    {
        templeName:{
            type:String,
            required:[true,'Please Enter the member name']
        },
        mobileNo:{
            type:Number,
            required:[true,'Please Enter mobile no']
        },
        emailID:{
            type:String,
            required:[false,'']
        },
        address:{
            type:String,
            required:[true,'Please Enter the address']
        },
        templeImage:{
            type:String,
            required:[false,'']
        },
        templeID:{
            type:String,
            required:[true,'Please enter the Member is']
        },

        bannerImages:[{
            type:String,
            required:[false,'']
        }],


        // gender:{
        //     type:String,
        //     required:[true,'Please enter the gender']
        // },
        // planDetails:{
        //     planName:{
        //         type:String,
        //         required:[true,'Please Enter the planName']
        //     },
        //     planValue:{
        //         type:Number,
        //         required:[true,'Please Enter the planValue']
        //     },
        //     duration:{
        //         type:Number,
        //         required:[true,'Please Enter the duration']
        //     },
        //     planID:{
        //         type:Number,
        //         required:[true,'Please Enter the planID']
        //     },
        //     dueAmount:{
        //         type:Number,
        //         required:[true,'Please Enter the dueAmount']
        //     },
        //     paidAmount:{
        //         type:Number,
        //         required:[true,'Please Enter the paidAmount']
        //     },
        // },
        // dietPlanDetails:[{
        //     time:{
        //         type:String,
        //         required:[false,'']
        //     },
        //     description:{
        //         type:String,
        //         required:[false,'']
        //     },
        //     period:{
        //         type:String,
        //         required:[false,'']
        //     }
            
        // }],
 

    }
)

const Temple = mongoose.model('Temple',templeSchema)

module.exports = Temple