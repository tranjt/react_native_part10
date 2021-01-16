import React from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useHistory } from "react-router-native";
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  const onPress = (id) => {
    history.push(`/repository/${id}`);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <RepositoryItem item={item} />
      </TouchableOpacity>
    );
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};


const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;