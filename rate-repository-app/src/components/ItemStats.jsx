import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const ItemStats = ({ stats, label }) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
  };

  const itemStyles = StyleSheet.create({
    stats: {
      alignItems: 'center',
    }
  });

  return (
    <View style={itemStyles.stats}>
      <Text fontWeight='bold' fontSize='title' >{kFormatter(stats)}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>);
};

export default ItemStats;