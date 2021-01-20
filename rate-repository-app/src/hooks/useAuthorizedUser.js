
import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = ({ includeReviews }) => {

  const { data, loading, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  });

  return {
    auth: data ? data.authorizedUser : undefined,
    loading,
    refetch
  };
};

export default useAuthorizedUser;