import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useHistory } from "react-router-native";
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSortOrder, sortOrder }) => {
  const history = useHistory();

  const onPress = (id) => {
    history.push(`/repository/${id}`);
  };

  const Dropdown = () => {
    return (
      <RNPickerSelect
        value={sortOrder}
        onValueChange={(value) => setSortOrder(value)}
        items={[
          { label: 'Latest repositories', value: { orderBy: 'CREATED_AT' } },
          { label: 'Highest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' } },
          { label: 'Lowest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' } },
        ]}
      />
    );
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
      ListHeaderComponent={Dropdown}
    />
  );
};


const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState({ orderBy: 'CREATED_AT' });
  const { repositories, loading } = useRepositories(sortOrder);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortOrder={setSortOrder}
      sortOrder={sortOrder}
    />
  );
};

export default RepositoryList;