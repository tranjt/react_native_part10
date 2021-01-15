
import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const auth = data ? data.authorizedUser : undefined;

  return auth;
};

export default useAuthorizedUser;