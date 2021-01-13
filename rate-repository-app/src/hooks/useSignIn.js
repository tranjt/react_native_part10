import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [login, result] = useMutation(SIGN_IN);

  const signIn = async ( username, password ) => {    
    await login({
      variables: { username, password }
    });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
