import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: "white",
    margin: 10,
  }
});

const SignOut = ({ logout }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={logout}>
      <Text fontWeight="bold" fontSize="title" style={styles.text}>Sign out</Text>
    </TouchableWithoutFeedback>
  );
};

export default SignOut;