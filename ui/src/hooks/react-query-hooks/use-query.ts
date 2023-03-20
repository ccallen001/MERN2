import { useQuery } from 'react-query';
import axios, { AxiosHeaders } from 'axios';

interface HookUseQueryParams {
  url: string;
  headers?: {
    authorization?: string;
  };
  enabled?: boolean;
}

export default function hookUseQuery({
  url,
  headers,
  enabled
}: HookUseQueryParams) {
  const { isLoading, isError, data, refetch } = useQuery(
    'query',
    async () => {
      try {
        const { data } = await axios.get(url, {
          headers
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    { enabled }
  );

  return { isLoading, isError, data, refetch };
}
