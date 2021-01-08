
import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const SignInForm = ({ onSubmit }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      backgroundColor: 'white',
      flexDirection: 'column'
    },
    containerLoginButton: {
      backgroundColor: theme.colors.primary,
      borderColor:  theme.colors.primary,
      borderWidth: 1,
      borderRadius: 3,
      padding: 10,
      margin: 10,
      alignItems: 'center',
    },
    text: {      
      color: 'white',                 
    },
  });

  return (
    <View style={styles.container}>
      <FormikTextInput name="Username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="Password" placeholder="Password" />
      <TouchableWithoutFeedback onPress={onSubmit} >
        <View style={styles.containerLoginButton}>
          <Text fontWeight='bold' fontSize='title' style={styles.text}>Sign In</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;