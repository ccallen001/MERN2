import { Link } from 'react-router-dom';

export default function Route404() {
  return (
    <div className="Route404 route">
      <h2>404</h2>
      <h3>Hmm... there's nothing here.</h3>
      <Link to="/">Let's go Home.</Link>
    </div>
  );
}
