export const commonImages = {
loginPageImage: 'https://t4.ftcdn.net/jpg/02/68/06/03/360_F_268060371_nFgoQQSnlBxODiV4pDpfq5vqXeavzisd.jpg',
splashScreenImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa32fa3df33CG17wYJz7mieeDallbYRguBfQ&s'
}
export const AppName = 'Temple Book';
export const defaultLanguage = 'en';  // 'en' for English, 'tn' for Tamil

export const appColors = {
    themeColor: '#FE8631', 
}


export const DateFilterOptions =[
    {value:'Today',key:'today',parentKey:'Common',childKey:'today'},
    {value:'Yesterday',key:'yesterday',parentKey:'Common',childKey:'yesterday'},
    {value:'Last 7 days',key:'last7days',parentKey:'Common',childKey:'last7Days'},
    {value:'This month',key:'this month',parentKey:'Common',childKey:'thisMonth'},
    {value:'Last month',key:'last month',parentKey:'Common',childKey:'lastMonth'},  // includig current month
    {value:'Last 2 month',key:'last 2 months',parentKey:'Common',childKey:'last2Months'},  // includig current month 
    {value:'Last 3 month',key:'last 3 months',parentKey:'Common',childKey:'last3Months'},  // includig current month 
    {value:'Last 6 month',key:'last 6 months',parentKey:'Common',childKey:'last6Months'},  // includig current month 
    {value:'This year',key:'this year',parentKey:'Common',childKey:'thisYear'},  // includig current month 
]


const HEX_LETTERS = "0123456789ABCDEF";

export const getRandomColor = () => {
  const colorArr = Array(6)
    .fill(0)
    .map(_ => HEX_LETTERS[Math.floor(Math.random() * 16)]);
  return ["#", ...colorArr].join("");
};