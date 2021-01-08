import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {    
    paddingTop: Constants.statusBarHeight,
    flex: 0,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    alignItems: 'flex-end',    
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text='Repositories' link={'/'} />
    <AppBarTab text='Sign In' link={'/signin'} />
  </View>;
};

export default AppBar;