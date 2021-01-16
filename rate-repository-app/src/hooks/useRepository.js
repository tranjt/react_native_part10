import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (id) => {
  const fetchRepository = () => {
    return useQuery(GET_REPOSITORY, {
      variables: { id },
      fetchPolicy: 'cache-and-network',
    });
  };

  const { data, loading } = fetchRepository();

  return {
    repository: data ? data.repository : undefined,
    loading,
    refetch: fetchRepository
  };
};

export default useRepository;