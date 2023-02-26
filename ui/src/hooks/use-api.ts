import { useQuery } from 'react-query';
import axios, { AxiosHeaders } from 'axios';

// seems like should be provided by axios
type AxiosMethods = 'get' | 'post' | 'put' | 'delete';

export default function useApi(
  method: AxiosMethods,
  url: string,
  headers?: AxiosHeaders,
  body?: BodyInit
) {
  async function fetchApi() {
    url = `http://localhost:3001/api${url}`;

    const { data } = await axios.request({
      method,
      url,
      headers,
      data: body
    });

    return data;
  }

  const { isLoading, isError, data } = useQuery('api', fetchApi, {
    refetchOnWindowFocus: false
  });

  return { isLoading, isError, data };
}
