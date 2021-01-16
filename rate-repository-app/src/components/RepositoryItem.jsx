
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import ItemStats from './ItemStats';

const RepositoryItem = ({ item }) => {

  const itemStyles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      flexGrow: 1,
      padding: 10
    },
    avatar: {
      width: 55,
      height: 55,
    },
    infoContainer: {
      flexGrow: 0,
      paddingLeft: 10,
      width: theme.deviceType.width 
    },
    language: {
      color: 'white',
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary,
      padding: 4,
      borderRadius: 3
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 4
    },
    stats: {
      alignItems: 'center',
    }
  });

  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.header}>
        <View>
          <Image style={itemStyles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={itemStyles.infoContainer}>
          <Text fontWeight='bold' fontSize='title' testID={'testFullname'} >Full name: {item.fullName}</Text>
          <Text color='textSecondary' testID={'testDescription'}>Description: {item.description}</Text>
          <Text style={itemStyles.language} testID={'testLanguage'}>{item.language}</Text>
        </View>
      </View>
      <View style={itemStyles.statsContainer} >
        <ItemStats testIDName={'testStars'} stats={item.stargazersCount} label={'Stars'} />
        <ItemStats testIDName={'testForks'} stats={item.forksCount} label={'Forks'} />
        <ItemStats testIDName={'testReviews'} stats={item.reviewCount} label={'Reviews'} />
        <ItemStats testIDName={'testRating'} stats={item.ratingAverage} label={'Rating'} />
      </View>
    </View>
  );
};

export default RepositoryItem;