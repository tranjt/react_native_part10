import React from 'react';
import { Route, Switch } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
  title: {
    marginBottom: 20
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>      
        <Route path="/repository/:id">
          <SingleRepository />
        </Route>
        <Route path="/createReview" exact>
          <CreateReview />
        </Route>     
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        
      </Switch>
    </View>
  );
};

export default Main;