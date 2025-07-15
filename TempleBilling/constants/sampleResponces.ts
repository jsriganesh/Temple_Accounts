
export const categoriedData = [
    {
        id: 1,
        labelParentKey: 'Common',
        labelChildKey: 'income', 
        name: 'income', 
        image: require('../assets/images/categoryImage/income.png'),
        options: [
            { id: 1, 
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
    {id:1, date: '2023-10-01', amount: 1000, paymentType: 'Cash', comments: 'Donation for temple maintenance'},
    {id:2, date: '2023-10-02', amount: 500, paymentType: 'Online', comments: 'General donation'},
    {id:3, date: '2023-10-03', amount: 2000, paymentType: 'Cheque', comments: 'Special event donation'},
    {id:4, date: '2023-10-04', amount: 1500, paymentType: 'Cash', comments: 'Donation for festival'},
    {id:5, date: '2023-10-05', amount: 800, paymentType: 'Online', comments: 'Monthly contribution'},
    {id:6, date: '2023-10-06', amount: 1200, paymentType: 'Cheque', comments: 'Donation for temple renovation'},
    {id:7, date: '2023-10-07', amount: 600, paymentType: 'Cash', comments: 'Donation for special pooja'},
    {id:8, date: '2023-10-08', amount: 900, paymentType: 'Online', comments: 'Donation for community service'},
    {id:9, date: '2023-10-09', amount: 1100, paymentType: 'Cheque', comments: 'Donation for temple construction'},
    {id:10, date: '2023-10-10', amount: 700, paymentType: 'Cash', comments: 'Donation for temple maintenance'},
    {id:11, date: '2023-10-11', amount: 1300, paymentType: 'Online', comments: 'Donation for festival celebration'},
    {id:12, date: '2023-10-12', amount: 400, paymentType: 'Cheque', comments: 'Donation for temple renovation'},
]

export const receiptsReportData = [
    {id:1, date: '2023-10-01',name:"sri", amount: 1000, paymentType: 'Cash', comments: 'Donation for temple maintenance'},
    {id:2, date: '2023-10-02',name:"Ganesh", amount: 500, paymentType: 'Online', comments: 'General donation'},
    {id:3, date: '2023-10-03',name:"arun", amount: 2000, paymentType: 'Cheque', comments: 'Special event donation'},
    {id:4, date: '2023-10-04',name:"raja", amount: 1500, paymentType: 'Cash', comments: 'Donation for festival'},
    {id:5, date: '2023-10-05',name:"ram", amount: 800, paymentType: 'Online', comments: 'Monthly contribution'},
    {id:6, date: '2023-10-06',name:"aravindhan", amount: 1200, paymentType: 'Cheque', comments: 'Donation for temple renovation'},
    {id:7, date: '2023-10-07',name:"vaasu", amount: 600, paymentType: 'Cash', comments: 'Donation for special pooja'},
    {id:8, date: '2023-10-08',name:"jothi", amount: 900, paymentType: 'Online', comments: 'Donation for community service'},
    {id:9, date: '2023-10-09',name:"dhina", amount: 1100, paymentType: 'Cheque', comments: 'Donation for temple construction'},
    {id:10, date: '2023-10-10',name:"vijay", amount: 700, paymentType: 'Cash', comments: 'Donation for temple maintenance'},
    {id:11, date: '2023-10-11',name:"ajith", amount: 1300, paymentType: 'Online', comments: 'Donation for festival celebration'},
    {id:12, date: '2023-10-12',name:"arun", amount: 400, paymentType: 'Cheque', comments: 'Donation for temple renovation'},
]
