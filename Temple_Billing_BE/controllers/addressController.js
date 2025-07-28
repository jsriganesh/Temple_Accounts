
const express = require('express');
const router = express.Router();
const { convertToISO } = require('../commonMethods');
var moment = require('moment');
const Address = require('../models/addressModel');


router.post('/', async (req, res) => {
    try {

       let details = {...req.body};

       console.log('req.body =',details)

        const id = new Date().getTime()
        const createdDate = convertToISO(new Date())
        details={...details,addressID:id,createdDate:createdDate}
        const address = await Address.create(details)
        console.log('bill =',address)
        res.status(200).json(address);


    //    if(!details.userID) {
    //         return res.status(400).json({ message: 'User ID is required' });
    //     }
    //     if(!details.templeID) {
    //         return res.status(400).json({ message: 'temple ID is required' });
    //     }

    //     if(!details.categoryID) {
    //         return res.status(400).json({ message: 'category ID is required' });
    //     }

    //     if(!details.typeID) {
    //         return res.status(400).json({ message: 'type ID is required' });
    //     }


    //     const createdDate = convertToISO(new Date())

    //     const id = new Date().getTime()
    //     details={...details,billID:id,createdDate:createdDate}

    //     console.log('req =',details,createdDate)

    //     const bill = await Bills.create(details)
    //     console.log('bill =',bill)

    //     res.status(200).json(bill);

    //     // res.status(200).json(temple)

 
    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})


router.post('/search', async (req, res) => {
    try{

        let data = {...req.body}
    
        const fromDate = data.fromDate;
        const toDate = data.toDate;
        const userID = data.userID;
        // const templeID = data.templeID;
        // const categoryID = data.categoryID || null; // Use null if categoryID is not provided
        // const typeID = data.typeID || null; // Use null if typeID is not provided

        // let query =Bills.where('createdDate').gt(fromDate).where('createdDate').lt(toDate)
        // .where('userID').equals(userID)
        // .where('templeID').equals(templeID)

        let query =Address.where('userID').equals(userID)
        // .where('templeID').equals(templeID)

        if (fromDate && toDate) {
            query = query.where('createdDate').gt(fromDate).where('createdDate').lt(toDate);
        }

        const addressList = await query;
       
        const preparData = {
            list:addressList,
            totalCount: addressList.length
        }
        res.status(200).json(preparData)
 
    } catch (error) {
        console.log('ERROR:', error)
        res.status(500).json({ message: error.message })
    }
})



module.exports = router;
