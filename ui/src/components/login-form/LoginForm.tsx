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
        <h3 className="title">User Login</h3>

        <label className="label">
          <span>Username</span>
          <input ref={username} placeholder="Username" required />
        </label>

        <label className="label">
          <span>Password</span>
          <input ref={password} placeholder="Password" required />
        </label>

        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}
