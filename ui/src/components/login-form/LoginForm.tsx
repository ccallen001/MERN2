import { useState } from 'react';
import { useMutation } from '@/hooks';
import { AxiosResponse, AxiosError } from 'axios';

import { Toast } from '@/components';

import './LoginForm.scss';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const { mutate, isLoading, isError, data } = useMutation({
    method: 'POST',
    url: isLogin
      ? 'http://localhost:3001/api/login'
      : 'http://localhost:3001/api/signup',
    onSuccess(response: AxiosResponse) {
      console.log(response.data);

      setToastMsg('Login successful!');
    },
    onError(error: AxiosError) {
      setToastMsg(error.response?.statusText || 'Login failed.');
    },
    onFinally() {
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

      {toastMsg && (
        <Toast msg={toastMsg} duration={3000} setToastMsg={setToastMsg} />
      )}
    </div>
  );
}
