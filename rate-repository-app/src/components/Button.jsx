import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.title,
  }
});

const Button = ({  style, children, ...props }) => {
  const buttonStyles = [
    styles.container,    
    style
  ];

  return (
    <View>
      <TouchableWithoutFeedback {...props}>
        <View style={buttonStyles}>
          <Text style={styles.text} fontWeight='bold'>{children}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};


export default Button;