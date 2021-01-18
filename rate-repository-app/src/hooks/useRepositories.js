import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword }
  });

  return {
    repositories: data?.repositories,
    loading: loading,
  };
};

export default useRepositories;