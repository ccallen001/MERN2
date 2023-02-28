import { useQuery } from 'react-query';
import axios, { AxiosHeaders } from 'axios';

interface HookUseQueryParams {
  url: string;
  headers?: AxiosHeaders;
}

export default function hookUseQuery({ url, headers }: HookUseQueryParams) {
  const { isLoading, isError, data } = useQuery('query', async () => {
    try {
      const { data } = await axios.get(url, {
        headers
      });
      return data;
    } catch (error) {
      throw error;
    }
  });

  return { isLoading, isError, data };
}
