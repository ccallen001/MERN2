import { useRef } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import './LoginForm.scss';

export default function LoginForm() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const mutation = useMutation(
    (login: Record<string, unknown>) => {
      return axios.post('http://localhost:3001/api/login', login);
    },
    {
      onSuccess({ data }) {
        console.log(data);
      }
    }
  );

  function handleSubmit(ev: React.SyntheticEvent) {
    ev.preventDefault();
    mutation.mutate({
      username: username.current?.value,
      password: password.current?.value
    });
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label>
        Username
        <input ref={username} />
      </label>

      <label>
        Password
        <input ref={password} />
      </label>

      <button>Submit</button>
    </form>
  );
}
