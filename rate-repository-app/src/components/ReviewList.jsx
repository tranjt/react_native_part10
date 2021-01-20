import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import { ReviewItemWithTwoButton } from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const ReviewList = () => {
  const { auth, loading, refetch } = useAuthorizedUser({ includeReviews: true });

  const reviews = auth
    ? auth.reviews.edges.map(edge => {
      return {
        ...edge.node,
        title: edge.node.repository.fullName
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
      renderItem={({ item }) => <ReviewItemWithTwoButton review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default ReviewList;