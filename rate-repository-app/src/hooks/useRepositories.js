import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  const fetchRepositories = () => {
    return useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
    });
  };

  const result = fetchRepositories();

  return {
    repositories: result.data?.repositories,
    loading: result.loading,
    refetch: fetchRepositories
  };
};

export default useRepositories;