import { useState } from 'react';
import { useMutation } from '@/hooks';
import { AxiosResponse } from 'axios';

import './LoginForm.scss';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const { mutate, isLoading, isError, data } = useMutation({
    method: 'POST',
    url: isLogin
      ? 'http://localhost:3001/api/login'
      : 'http://localhost:3001/api/signup',
    onSuccess: (data: AxiosResponse<any, any>) => {
      console.log(data);
      setIsLogin(true);
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
        <h3 className="title">{isLogin ? 'Login' : 'Sign Up'}</h3>

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

        <div className="sign-up">
          <h4>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </h4>
          <a className="btn-sign-up" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </a>
        </div>
      </form>
    </div>
  );
}
