export interface categorieProps {
    id: number;
    name: string;
    image: any;
    labelParentKey:string; labelChildKey:string;
    options: categoriesOptionsProps[];
}

export interface categoriesOptionsProps {
    id: number;
    name: string;
    image: any;
    labelParentKey:string; labelChildKey:string;
}


export interface UserDetails {
    _id: string;
    emailID: string;
    mobileNo: number;
    token: string;
    type: string;
    userID: string;
    userName:string,
    templeDetails: TempleDetailsProps[];
}

export interface TempleDetailsProps {
    _id: string;
    templeName: string;
    mobileNo: number;
    emailID: string;
    address: string;
    templeImage: string;
    templeID: string;
    bannerImages: string[];
    __v: number;    
}

export type FilterDatesProps = { fromDate: Date; toDate: Date }



export interface ReportListProps {
__v: number;
_id: string;
amount: number;
billID: number;
categoryID: number;
categoryName: string;
comments: string;
createdDate: string;
paymentType: string;
templeID: number;
typeID: number;
typeName: string;
userID: number;
personName?: string;
mobileNo?:string;
emailID?:string;
}
export interface ReportDataProps  {
    list:ReportListProps[] ;
    totalAmount: number;
    totalCount: number;
}


export interface pieDataProps{
    value: number;
    name: string;
    color: string;
}

export interface AddressBookProps {
    __v: number
    _id: string
    addressID: string
    city: string
    country: string
    createdDate: string
    emailID: string
    formattedAddress: string
    latitude: number
    longitude: number
    mobileNo: number
    name: string
    userAddress: string
    userID: number
    pincode: number

}
  