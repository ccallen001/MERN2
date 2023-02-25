import { useQuery } from 'react-query';
import axios from 'axios';

import { AxiosMethods } from '@/types';

export default function useAxios(
  method: AxiosMethods,
  url: string,
  body?: Record<string, unknown>
) {
  async function fetch() {
    try {
      const { data } = await axios[method](url, body);
      return data;
    } catch (err) {
      throw err;
    }
  }

  const { isLoading, data } = useQuery('axios', fetch, {
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    data
  };
}
