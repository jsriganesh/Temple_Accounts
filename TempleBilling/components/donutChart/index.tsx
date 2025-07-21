import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet,View } from 'react-native'
import Pie from '../../components/donutChart/DonutPie'
import { converNumberToRupee } from '@/constants/commonMenthod'
import { pieDataProps } from '@/interface/commonInterface'



// const pieData = [
//   { "value": 1000, "name": "Income", "color": "#35B82A" },
//   { "value": 1700, "name": "Expance", "color": "#F74C0B" },
//   { "value": 2000, "name": "Recepit", "color": "#B0ED36" },
// ]


// const pieData =  //data.data.map(item => ({ ...item, color: getRandomColor() }));


const getInnerText = (index: number, dataAsset: any,holdingAmount:any) => index < 0
  ? {
    index: -1,
    name: `Holding Amount`,
    value:parseInt(holdingAmount)
  }
  : {
    index,
    name: 'Total '+dataAsset[index].name,
    value: dataAsset[index].value,
  };

const CANVAS_SIZE = 200;


interface DonutPieChartProps {
  pieData:pieDataProps[]
  holdingAmount:number
}

const DonutPieChart = ({pieData,holdingAmount}:DonutPieChartProps) => {

  const [selectedPie, setSelectedPie] = useState(getInnerText(-1, pieData,holdingAmount));
  console.log('holdingAmount', holdingAmount);
  const onPieItemSelected = (newIndex: number) => () =>
    setSelectedPie(
      getInnerText(newIndex === selectedPie.index ? -1 : newIndex, pieData,holdingAmount)
    );


  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pie
        pieSize={CANVAS_SIZE * 0.9}
        onItemSelected={onPieItemSelected}
        size={CANVAS_SIZE}
        data={pieData}
        value={selectedPie}
      />
    </View>
  )
}

export default DonutPieChart

const styles = StyleSheet.create({

})