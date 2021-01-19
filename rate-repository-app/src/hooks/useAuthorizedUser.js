
import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = ({ includeReviews }) => {

  const { data, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  });

  return {
    auth: data ? data.authorizedUser : undefined,
    loading
  };
};

export default useAuthorizedUser;