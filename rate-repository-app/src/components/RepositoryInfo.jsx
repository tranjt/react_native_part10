import React from "react";
import { View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import Button from './Button';
import RepositoryItem from './RepositoryItem';
import Text from './Text';



const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  }
});

const RepositoryInfo = ({ repository }) => {

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  if (!repository) {
    return (
      <Text>loading...</Text>
    );
  }

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Button
        onSubmit={() => handlePress(repository.url)}
        style={styles.button}
      >
        Open in Github
      </Button>
    </View>
  );
};



export default RepositoryInfo;