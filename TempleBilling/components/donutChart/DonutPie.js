import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Svg, G } from "react-native-svg"; // from "react-native-svg"
import { pie } from "d3-shape";

import PieSlice from "./DonutSlice";
import { DonutChartContainer, DonutInnerText } from './styles'; 
import { converNumberToRupee } from "@/constants/commonMenthod";


const Pie = ({ value, data, size, pieSize, onItemSelected }) => {
  const [arcs, setArcs] = useState(null);
  useEffect(() => {
    const calculatedArcs = pie().value(item => item.value)(data);
    setArcs(calculatedArcs);
  }, [data, pieSize]);
  return (
    arcs && (
      <DonutChartContainer>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <G transform="translate(100, 100)">
            {data.map(({ color }, index) => (
              <PieSlice
                key={`pie_shape_${index}`}
                color={color}
                onSelected={onItemSelected(index)}
                arcData={arcs[index]}
                isActive={value.index === index}
              />
            ))}
          </G>
        </Svg>
        <DonutInnerText onPress={()=>onItemSelected(-1)}>
          <Text style={{ textAlign:'center',fontWeight:'bold'}}>{value.name}</Text>
          <Text style={{ textAlign:'center',fontWeight:'bold'}}>{converNumberToRupee(value.value)}</Text>
        </DonutInnerText>
      </DonutChartContainer>
    )
  );
};

export default Pie;
