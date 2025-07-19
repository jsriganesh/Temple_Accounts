
export const categoriedData = [
    {
        id: 1,
        labelParentKey: 'Common',
        labelChildKey: 'income',
        name: 'income',
        image: require('../assets/images/categoryImage/income.png'),
        options: [
            {
                id: 1,
                labelParentKey: 'Category',
                labelChildKey: 'undi',
                name: 'undi',
                image: ''
            },
            { id: 2, labelParentKey: 'Category', labelChildKey: 'general', name: 'general', image: '' },
            { id: 3, labelParentKey: 'Category', labelChildKey: 'others', name: 'others', image: '' }
        ]
    },
    {
        id: 2, labelParentKey: 'Common', labelChildKey: 'expenses', name: 'expenses', image: require('../assets/images/categoryImage/expence.png'),
        options: [
            { id: 1, labelParentKey: 'Category', labelChildKey: 'poosari', name: 'poosari', image: '' },
            { id: 2, labelParentKey: 'Category', labelChildKey: 'goverTax', name: 'goverTax', image: '' },
            { id: 3, labelParentKey: 'Category', labelChildKey: 'dailyExpanses', name: 'dailyExpanses', image: '' },
            { id: 4, labelParentKey: 'Category', labelChildKey: 'others', name: 'others', image: '' }
        ]
    },
    {
        id: 3, labelParentKey: 'Common', labelChildKey: 'receipts', name: 'receipts', image: require('../assets/images/categoryImage/report.png'),
        options: [
            { id: 1, labelParentKey: 'Category', labelChildKey: 'donation', name: 'donation', image: '' },
            { id: 2, labelParentKey: 'Category', labelChildKey: 'annadhaanam', name: 'annadhaanam', image: '' },
            { id: 3, labelParentKey: 'Category', labelChildKey: 'pooja', name: 'pooja', image: '' },
            { id: 3, labelParentKey: 'Category', labelChildKey: 'thirupani', name: 'thirupani', image: '' },
            { id: 3, labelParentKey: 'Category', labelChildKey: 'others', name: 'others', image: '' }
        ]
    },

]


export const inComeReportData = [
    { id: 1, date: '2023-10-01', amount: 1000, paymentType: 'Cash', comments: 'Donation for temple maintenance' },
    { id: 2, date: '2023-10-02', amount: 500, paymentType: 'Online', comments: 'General donation' },
    { id: 3, date: '2023-10-03', amount: 2000, paymentType: 'Cheque', comments: 'Special event donation' },
    { id: 4, date: '2023-10-04', amount: 1500, paymentType: 'Cash', comments: 'Donation for festival' },
    { id: 5, date: '2023-10-05', amount: 800, paymentType: 'Online', comments: 'Monthly contribution' },
    { id: 6, date: '2023-10-06', amount: 1200, paymentType: 'Cheque', comments: 'Donation for temple renovation' },
    { id: 7, date: '2023-10-07', amount: 600, paymentType: 'Cash', comments: 'Donation for special pooja' },
    { id: 8, date: '2023-10-08', amount: 900, paymentType: 'Online', comments: 'Donation for community service' },
    { id: 9, date: '2023-10-09', amount: 1100, paymentType: 'Cheque', comments: 'Donation for temple construction' },
    { id: 10, date: '2023-10-10', amount: 700, paymentType: 'Cash', comments: 'Donation for temple maintenance' },
    { id: 11, date: '2023-10-11', amount: 1300, paymentType: 'Online', comments: 'Donation for festival celebration' },
    { id: 12, date: '2023-10-12', amount: 400, paymentType: 'Cheque', comments: 'Donation for temple renovation' },
]

export const receiptsReportData = [
    { id: 1, date: '2023-10-01', name: "sri", amount: 1000, paymentType: 'Cash', comments: 'Donation for temple maintenance' },
    { id: 2, date: '2023-10-02', name: "Ganesh", amount: 500, paymentType: 'Online', comments: 'General donation' },
    { id: 3, date: '2023-10-03', name: "arun", amount: 2000, paymentType: 'Cheque', comments: 'Special event donation' },
    { id: 4, date: '2023-10-04', name: "raja", amount: 1500, paymentType: 'Cash', comments: 'Donation for festival' },
    { id: 5, date: '2023-10-05', name: "ram", amount: 800, paymentType: 'Online', comments: 'Monthly contribution' },
    { id: 6, date: '2023-10-06', name: "aravindhan", amount: 1200, paymentType: 'Cheque', comments: 'Donation for temple renovation' },
    { id: 7, date: '2023-10-07', name: "vaasu", amount: 600, paymentType: 'Cash', comments: 'Donation for special pooja' },
    { id: 8, date: '2023-10-08', name: "jothi", amount: 900, paymentType: 'Online', comments: 'Donation for community service' },
    { id: 9, date: '2023-10-09', name: "dhina", amount: 1100, paymentType: 'Cheque', comments: 'Donation for temple construction' },
    { id: 10, date: '2023-10-10', name: "vijay", amount: 700, paymentType: 'Cash', comments: 'Donation for temple maintenance' },
    { id: 11, date: '2023-10-11', name: "ajith", amount: 1300, paymentType: 'Online', comments: 'Donation for festival celebration' },
    { id: 12, date: '2023-10-12', name: "arun", amount: 400, paymentType: 'Cheque', comments: 'Donation for temple renovation' },
]


// export const receiptsReportDatas = { "list": [{ "__v": 0, "_id": "687b19bad3f6eef95eae4224", "amount": 1000, "billID": 1752897978025, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T04:06:18.025Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 2, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b19c6d3f6eef95eae4226", "amount": 1000, "billID": 1752897990995, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T04:06:30.995Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 2, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b72855756d9350d7e19a3", "amount": 1000, "billID": 1752920709535, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:25:09.535Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 2, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776449c9c4e89e84bacc", "amount": 1000, "billID": 1752921956418, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:45:56.417Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 1, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776849c9c4e89e84bace", "amount": 1000, "billID": 1752921960474, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:46:00.474Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 3, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776949c9c4e89e84bad0", "amount": 1000, "billID": 1752921961235, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:46:01.235Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 3, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776a49c9c4e89e84bad2", "amount": 1000, "billID": 1752921962012, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:46:02.012Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 3, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776d49c9c4e89e84bad4", "amount": 1000, "billID": 1752921965354, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:46:05.354Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 2, "typeName": "general", "userID": 1 }, { "__v": 0, "_id": "687b776f49c9c4e89e84bad6", "amount": 1000, "billID": 1752921967913, "categoryID": 1, "categoryName": "income", "comments": "fghjk", "createdDate": "2025-07-19T10:46:07.913Z", "paymentType": "cash", "templeID": 1752840910771, "typeID": 1, "typeName": "general", "userID": 1 }], "totalAmount": 9000, "totalCount": 9 }