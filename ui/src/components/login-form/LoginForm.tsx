import { useRef } from 'react';
import { useMutation } from '@/hooks';
import axios, { AxiosResponse } from 'axios';

import './LoginForm.scss';

export default function LoginForm() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { mutate, isLoading, isError, data } = useMutation({
    method: 'POST',
    url: 'http://localhost:3001/api/login',
    onSuccess: (data: AxiosResponse<any, any>) => {
      console.log(data);
    }
  });

  function handleSubmit(ev: React.SyntheticEvent) {
    ev.preventDefault();

    mutate({
      username: username.current?.value,
      password: password.current?.value
    });
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <h3 className="LoginForm__title">Login</h3>

      <label className="LoginForm__label">
        Username
        <input ref={username} />
      </label>

      <label className="LoginForm__label">
        Password
        <input ref={password} />
      </label>

      <button className="LoginForm__btn-submit">Submit</button>
    </form>
  );
}
