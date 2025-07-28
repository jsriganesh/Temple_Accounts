const mongoose = require('mongoose')
const billSchema = mongoose.Schema(
    {

        userID:{
            type:Number,
            required:[true,'Please Enter the user ID']
        },
        templeID:{
            type:Number,
            required:[true,'Please Enter the temple ID']
        },


        categoryName:{
            type:String,
            required:[true,'Please Enter the category name']
        },
        categoryID:{
            type:Number,
            required:[true,'Please Enter the category ID']
        },
        amount:{
            type:Number,
            required:[true,'Please Enter the amount']
        },
        paymentType:{
            type:String,
            required:[true,'Please Enter the payment type']
        },
        typeName:{
            type:String,
            required:[true,'Please Enter the type name']
        },
        typeID:{
            type:Number,
            required:[true,'Please Enter the type ID']
        },
        comments:{
            type:String,
            required:[false,'']
        },

        personName:{
            type:String,
            required:[false,'']
        },
        mobileNo:{
            type:String,
            required:[false,'']
        },
        email:{
            type:String,
            required:[false,'']
        },
        billID:{
            type:Number,
            required:[true,'Please Enter the bill ID']
        },
        createdDate:{
            type:String,
            required:[true,'Please Enter the created date']
        },

        // templeName:{
        //     type:String,
        //     required:[true,'Please Enter the member name']
        // },
        // mobileNo:{
        //     type:Number,
        //     required:[true,'Please Enter mobile no']
        // },
        // emailID:{
        //     type:String,
        //     required:[false,'']
        // },
        // address:{
        //     type:String,
        //     required:[true,'Please Enter the address']
        // },
        // templeImage:{
        //     type:String,
        //     required:[false,'']
        // },
        // templeID:{
        //     type:String,
        //     required:[true,'Please enter the Member is']
        // },

        // bannerImages:[{
        //     type:String,
        //     required:[false,'']
        // }],


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

const Bills = mongoose.model('Bills',billSchema)

module.exports = Bills