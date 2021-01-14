
import { useEffect, useState, } from 'react';
import { AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = () => {
  const [auth, setAuth] = useState(false);
  const { data, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!loading && data) {
      setAuth(data.authorizedUser !== null);      
    }
  }, [loading, data]);

  return { auth, setAuth };
};

export default useAuthorizedUser;