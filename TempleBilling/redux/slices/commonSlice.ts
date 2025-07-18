

import { categorieProps, UserDetails } from "@/interface/commonInterface"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// import { DietPlanListDetails, MemberDetails, PackageListDetailsDetailsProps } from "../../interface/common"
// import { ServiceDetails } from "../../interface/commonTypes"

// const  membersList = [
//   {
//       memberName:'sriganesh j',
//       mobileNo:'8765432110',
//       emailId:'sriganesh98789@gmail.com',
//       dateOfJoin:'01/07/2024',
//       dateOfBirth:'01/07/1997',
//       lastpaymentDate:'01/07/2024',
//       nextPaymentDate:'01/08/2024',
//       address:'123, kamaraj nagar mettupalayam, coimbatore 641304',
//       profileImage:'',
//       memberID:'AG001',
//       planDetails:{
//         planName:'one month plan',
//         value:1000,
//         duration :30, // days
//         planID:1,
//         dueAmount:0,
//       },
//       gender:'M'
//   },
// ]


// const  planList = [
//   {
//       planID:1,
//       planName:'one month plan',
//       duration:30, // days
//       planValue:1000
//   },
//   {
//       planID:2,
//       planName:'two month plan',
//       duration:60, // days
//       planValue:1800
//   },
//   {
//       planID:3,
//       planName:'two month plan',
//       duration:90, // days
//       planValue:2500
//   },
// ]


const commonSlice = createSlice({
  name: "commonData",
  initialState: {
    userDetails:{} as UserDetails,
    categorys: [
      { id: 1, labelParentKey:'Common' ,labelChildKey:'income', name: 'income', image: require('../../assets/images/categoryImage/income.png'),
          options: [
              { id: 1,labelParentKey:'Category' ,labelChildKey:'undi', name: 'undi', image: ''},
              { id: 2,labelParentKey:'Category' ,labelChildKey:'general', name: 'general', image: '' },
              { id: 3,labelParentKey:'Category' ,labelChildKey:'others', name: 'others', image: '' }
          ]
       },
      { id: 2,labelParentKey:'Common' ,labelChildKey:'expenses', name: 'expenses', image: require('../../assets/images/categoryImage/expence.png'),
          options: [
              { id: 1,labelParentKey:'Category' ,labelChildKey:'archagar', name: 'archagar', image: '' },
              { id: 2,labelParentKey:'Category' ,labelChildKey:'goverTax', name: 'goverTax', image: '' },
              { id: 3,labelParentKey:'Category' ,labelChildKey:'dailyExpanses', name: 'dailyExpanses', image: '' },
              { id: 4,labelParentKey:'Category' ,labelChildKey:'others', name: 'others', image: '' }
          ]
       },
      { id: 3,labelParentKey:'Common' ,labelChildKey:'receipts', name: 'receipts', image: require('../../assets/images/categoryImage/receipts.png'),
          options: [
              { id: 1,labelParentKey:'Category' ,labelChildKey:'donation', name: 'donation', image: '' },
              { id: 2,labelParentKey:'Category' ,labelChildKey:'annadhaanam', name: 'annadhaanam', image: '' },
              { id: 3,labelParentKey:'Category' ,labelChildKey:'pooja', name: 'pooja', image: '' },
              { id: 3,labelParentKey:'Category' ,labelChildKey:'thirupani', name: 'thirupani', image: '' },
              { id: 3,labelParentKey:'Category' ,labelChildKey:'others', name: 'others', image: '' }
          ]
      },
  
  ] as categorieProps[],
  },
  reducers: {
    updateMemberList(state, action: PayloadAction<categorieProps[]>) {
        state.categorys = action.payload
      },

      updateUserDetails(state, action: PayloadAction<UserDetails>) {
        state.userDetails = action.payload
      },
  
  }
})
export const { 
  updateMemberList,updateUserDetails
} = commonSlice.actions

export default commonSlice.reducer
