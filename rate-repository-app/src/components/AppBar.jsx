import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';

import useAuthorizedUser from '../hooks/useAuthorizedUser';
import AuthStorageContext from '../contexts/AuthStorageContext';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
});

const AppBar = () => {
  const { auth } = useAuthorizedUser({ includeReviews: false });
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' link={'/'} />
        {auth && <AppBarTab text='Create a review' link={'/createReview'} />}
        {auth && <AppBarTab text='My reviews' link={'/myreviews'} />}
        {auth ? <SignOut logout={logout} /> : <AppBarTab text='Sign In' link={'/signin'} />}
        {!auth && <AppBarTab text='Sign Up' link={'/signup'} />}
      </ScrollView>
    </View>
  );
};

export default AppBar;