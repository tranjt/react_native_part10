import React from 'react';
import { TextInput as NativeTextInput, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {   
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    margin: 10
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [
    styles.text,
    style,
  ];

  return (
    <View style={styles.container} >
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;