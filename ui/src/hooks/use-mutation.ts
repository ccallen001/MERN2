import { useMutation } from 'react-query';
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
  onFinally?: Function;
}

export default function hookUseMutation({
  url,
  headers, // figure out how to do headers
  onSuccess,
  onError,
  onFinally
}: HookUseMutationParams) {
  const { mutate, isLoading, isError, data } = useMutation(
    async (data: Record<string, unknown>) => await axios.post(url, data),
    {
      onSuccess(Response) {
        onSuccess?.(Response);
        onFinally?.(Response);
      },
      onError(Error) {
        onError?.(Error);
        onFinally?.(Error);
      }
    }
  );

  return { mutate, isLoading, isError, data };
}
