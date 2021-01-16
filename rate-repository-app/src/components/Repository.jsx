import React from "react";
import { View, StyleSheet } from 'react-native';
import { useParams } from "react-router-native";
import * as Linking from 'expo-linking';
import Text from './Text';
import Button from './Button';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';


const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10
  },
  button: {
    marginTop: 20,
  }
});

const Repository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  if (loading) {
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



export default Repository;