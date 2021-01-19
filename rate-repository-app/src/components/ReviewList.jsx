import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const ReviewList = () => {
  const { auth, loading } = useAuthorizedUser({ includeReviews: true });

  if (loading) {
    return (
      <Text>loading...</Text>
    );
  }

  const reviews = auth
    ? auth.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} myreview={true} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default ReviewList;