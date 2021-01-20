import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { format } from 'date-fns';
import { useHistory } from "react-router-native";

import theme from '../theme';
import Text from './Text';
import Button from './Button';
import useDeleteReview from '../hooks/useDeleteReview';

export const ReviewItemWithTwoButton = ({ review, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      paddingBottom: 15,      
    },
    button: {
      backgroundColor: theme.colors.error,
    },
  });

  const handleViewRepository = () => {
    history.push(`/repository/${review.repositoryId}`);
  };

  const handleDeleteReview = async () => {
    console.log('delete repository');
    try {
      await deleteReview({ id: review.id });
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => handleDeleteReview() }
      ],
      { cancelable: false }
    );

  return (
    <>
      <ReviewItem review={review} />
      <View style={styles.container}>
        <Button
          onPress={handleViewRepository}
        >View Repository </Button>
        <Button
          style={styles.button}
          onPress={createTwoButtonAlert}
        >Delete Review</Button>
      </View>
    </>
  );
};


const ReviewItem = ({ review }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 15,
      paddingRight: 30,
    },
    ratingContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.primary,
      borderRadius: 72 / 2,
      borderWidth: 5,
      height: 72,
      width: 72,
      paddingLeft: 5,
      paddingBottom: 5,
    },
    rating: {
      color: theme.colors.primary,
      fontSize: 26,
    },
    header: {
      flexDirection: 'column',
      flexGrow: 1,
      padding: 10
    },
    title: {
      fontSize: theme.fontSizes.title,
    },
    date: {
      color: theme.colors.textSecondary
    },
    textContainer: {
      padding: 10,
      width: theme.deviceType.width
    },
  });

  return (  
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating} fontWeight='bold'>{review.rating} </Text>
      </View>
      <View >
        <View style={styles.header}>
          <Text style={styles.title} fontWeight='bold'>{review.title}</Text>
          <Text style={styles.date}>{format(new Date(review.createdAt), 'MM.dd.yyyy')}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};


export default ReviewItem;