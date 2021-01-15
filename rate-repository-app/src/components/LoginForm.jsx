
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit, dirty, isValid }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      backgroundColor: 'white',
      flexDirection: 'column'
    },
    buttonContainer: {
      margin: 10,
    }
  });

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID={'usernameField'}
      />
      <FormikTextInput
        secureTextEntry
        name="password"
        placeholder="Password"
        testID={'passwordField'}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={onSubmit}
          title="Sign In"
          disabled={!dirty || !isValid}
          testID={'submitButton'}
        />
      </View>
    </View>
  );
};

export default SignInForm;