import { Link } from 'react-router-dom';

export default function Route404() {
  return (
    <>
      <h1>404</h1>
      <h2>Hmm... there's nothing here.</h2>
      <Link to="/">Let's go Home.</Link>
    </>
  );
}
