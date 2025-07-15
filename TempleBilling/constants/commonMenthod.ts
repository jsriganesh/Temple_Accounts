import { useTranslation } from 'react-i18next';


export const localizationText=(parentKey:string,childKey:string)=>{
    const {t} = useTranslation()
    if(parentKey && childKey)
      return t(`${parentKey}.${childKey}`)
    else 
      return t(`${parentKey}`)
  }
  

  export const converNumberToRupee=(amount:string|number)=>{
    return parseInt(amount.toString()).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    });
  }
  