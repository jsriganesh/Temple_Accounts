import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import Dot from './dot';

interface PaginationProps {
  data: { key: string; [key: string]: any }[];
  x: SharedValue<number>;
  size: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, x, size }) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => (
        <Dot key={i} x={x} index={i} size={size} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
