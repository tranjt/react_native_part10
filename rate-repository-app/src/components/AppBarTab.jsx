import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: "white",
    margin: 10,
  }
});

const AppBarTab = ({ text, link }) => {
  return (
    <TouchableWithoutFeedback style={styles.container}>      
        <Link to={link}>
          <Text fontWeight="bold" fontSize="title" style={styles.text}>{text}</Text>
        </Link>      
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;