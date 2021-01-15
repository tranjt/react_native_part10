import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import kFormatter from '../utils/kFormatter';

const ItemStats = ({ stats, label, testIDName }) => {
  
  const itemStyles = StyleSheet.create({
    stats: {
      alignItems: 'center',
    }
  });

  return (
    <View style={itemStyles.stats} >
      <Text fontWeight='bold' fontSize='title' testID={testIDName}>{kFormatter(stats)}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>);
};

export default ItemStats;