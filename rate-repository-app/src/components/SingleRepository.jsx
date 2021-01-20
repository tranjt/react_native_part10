import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import { useParams } from "react-router-native";
import Text from './Text';
import useRepository from '../hooks/useRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const SingleRepository = () => {
  const { id } = useParams();
  const variables = { id, first: 8 };
  const { repository, loading, fetchMore } = useRepository(variables);

  const onEndReach = () => {
    fetchMore();
  };

  const reviews = repository
  ? repository.reviews.edges.map(edge => {
    return {
      ...edge.node,
      title: edge.node.user.username
    };
  })
  : [];

  if (loading) {
    return (
      <Text>loading...</Text>
    );
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;