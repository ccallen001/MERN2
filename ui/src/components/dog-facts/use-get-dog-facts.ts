import { useQuery } from 'react-query';
import axios from 'axios';

function useGetDogFacts() {
  async function getDogFacts() {
    const { data } = await axios.get('https://dogapi.dog/api/facts');
    return data;
  }

  const { isLoading, isError, data } = useQuery('dog-facts', getDogFacts, {
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    isError,
    data
  };
}

export { useGetDogFacts };
