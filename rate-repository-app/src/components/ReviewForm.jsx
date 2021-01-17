import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';

const ReviewForm = ({ onSubmit, dirty, isValid }) => {
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
        name="ownerName"
        placeholder="Repository owner's username"
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository's name"
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={onSubmit}
          title="Create a review"
          disabled={!dirty || !isValid}
        />
      </View>
    </View>
  );

};

export default ReviewForm;