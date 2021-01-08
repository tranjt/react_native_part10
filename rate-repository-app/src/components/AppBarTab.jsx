import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({  
  text: {
    color: "white",
    margin: 10,
  }
});

const AppBarTab = ({ text }) => {
  return <TouchableWithoutFeedback style={styles.container}>
    <Text fontWeight="bold" fontSize="title" style={styles.text}>{text}</Text>
  </TouchableWithoutFeedback>;
};

export default AppBarTab;