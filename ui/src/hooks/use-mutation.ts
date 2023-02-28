import { useMutation, UseMutationResult } from 'react-query';
import axios, { AxiosHeaders } from 'axios';

interface HookUseMutationParams {
  method:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';
  url: string;
  headers?: AxiosHeaders;
  onSuccess?: Function;
  onError?: Function;
}

export default function hookUseMutation({
  url,
  headers, // figure out how to do post headers
  onSuccess,
  onError
}: HookUseMutationParams) {
  const { mutate, isLoading, isError, data } = useMutation(
    (data: Record<string, unknown>) => {
      return axios.post(url, data);
    },
    {
      onSuccess({ data }) {
        onSuccess?.(data);
      },
      onError({ data }) {
        onError?.(data);
      }
    }
  );

  return { mutate, isLoading, isError, data };
}
