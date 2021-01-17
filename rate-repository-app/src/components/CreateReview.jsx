import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import useCreateReview from '../hooks/useCreateReview';
import useNotification from '../hooks/useNotification';
import Notification from './Notification';
import ReviewForm from './ReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner\'s username is a required'),
  repositoryName: yup
    .string()
    .required('Repository\'s name is a required'),
  rating: yup
    .string()
    .test('is rating number', 'Rating is a required number between 0 and 100', (val) => {
      const rating = Number(val);
      return rating >= 0 && rating <= 100;
    })
    .required('Rating is a required number between 0 and 100'),
  text: yup
    .string()
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const [notification, displayNotification] = useNotification();  
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating: Number(rating), text });      
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (error) {
      console.log(error); 
      displayNotification(error.message);
    }
  };

  return (
    <View>
      <Notification notification={notification} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, dirty, isValid }) => <ReviewForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
      </Formik>
    </View>
  );
};


export default CreateReview;