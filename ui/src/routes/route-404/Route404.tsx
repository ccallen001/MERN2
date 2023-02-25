import { Link } from 'react-router-dom';
import './Route404.scss';

export default function Route404() {
  return (
    <div className="Route404">
      <h1>404</h1>
      <h2>Hmm... there's nothing here.</h2>
      <Link to="/">Let's go Home.</Link>
    </div>
  );
}
