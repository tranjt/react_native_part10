import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';


const useSignIn = () => {
  const [login, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({username, password}) => {
    const { data } = await login({
      variables: { username, password }
    });
    console.log(data);
    await authStorage.setAccessToken(data.authorize.accessToken);    
    apolloClient.resetStore();

  };

  return [signIn, result];
};

export default useSignIn;
