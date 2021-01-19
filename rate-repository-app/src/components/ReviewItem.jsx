import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../theme';
import Text from './Text';


const ReviewItem = ({ review, myreview }) => {

  const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 15,
      paddingRight: 30,
    },
    ratingContainer: {

    },
    rating: {
      textAlign: 'center',
      borderColor: '#40E0D0',
      color: '#40E0D0',
      fontSize: 26,
      width: 72,
      height: 72,
      lineHeight: 72,
      borderRadius: 72 / 2,
      borderWidth: 5,
      paddingLeft: 5,
      paddingBottom: 5,

    },
    header: {
      flexDirection: 'column',
      flexGrow: 1,
      padding: 10
    },
    username: {
      fontSize: theme.fontSizes.title,
    },
    date: {
      color: theme.colors.textSecondary
    },
    textContainer: {
      padding: 10,
      width: theme.deviceType.width
    },
    text: {
    }

  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rating} fontWeight='bold'>{review.rating} </Text>
      </View>
      <View >
        <View style={styles.header}>
          {myreview
            ? <Text style={styles.username} fontWeight='bold'>{review.repository.fullName}</Text>
            : <Text style={styles.username} fontWeight='bold'>{review.user.username}</Text>
          }
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