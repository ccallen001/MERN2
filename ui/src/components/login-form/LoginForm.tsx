import { useRef } from 'react';
import { useMutation } from '@/hooks';
import { AxiosResponse } from 'axios';

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
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Login</h3>

        <label className="LoginForm__label">
          <span>Username</span>
          <input ref={username} placeholder="Username" />
        </label>

        <label className="LoginForm__label">
          <span>Password</span>
          <input ref={password} placeholder="Password" />
        </label>

        <button className="LoginForm__btn-submit">Submit</button>
      </form>
    </div>
  );
}
