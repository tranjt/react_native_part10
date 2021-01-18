import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import SignUpForm from './SignUpForm';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirm is required'),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();  

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username);
    console.log(password);

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, dirty, isValid }) => <SignUpForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
      </Formik>
    </View>
  );

};

export default SignUp;