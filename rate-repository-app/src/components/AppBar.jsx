import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' link={'/'} />
        <AppBarTab text='Sign In' link={'/signin'} />      
      </ScrollView>
    </View>
  );
};

export default AppBar;