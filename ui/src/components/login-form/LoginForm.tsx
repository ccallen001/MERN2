import { useState } from 'react';
import { useMutation } from '@/hooks';
import { AxiosResponse } from 'axios';

import './LoginForm.scss';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isLoading, isError, data } = useMutation({
    method: 'POST',
    // url: 'http://localhost:3001/api/login',
    url: 'http://localhost:3001/api/signup',
    onSuccess: (data: AxiosResponse<any, any>) => {
      console.log(data);
    }
  });

  function handleSubmit(ev: React.SyntheticEvent) {
    ev.preventDefault();

    mutate({
      username,
      password
    });

    setUsername('');
    setPassword('');
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h3 className="title">User Login</h3>

        <label className="label">
          <span>Username</span>
          <input
            placeholder="Username"
            required
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </label>

        <label className="label">
          <span>Password</span>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>

        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}
