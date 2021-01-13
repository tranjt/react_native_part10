import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

import LoginForm from './LoginForm';
import useSignIn from '../hooks/useSignIn';
import AuthStorageContext from '../contexts/AuthStorageContext';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);
    try {
      const { data } = await signIn( username, password );
      console.log(data);
      await authStorage.setAccessToken(data);
      apolloClient.resetStore();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, dirty, isValid }) => <LoginForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
    </Formik>
  );
};

export default SignIn;

