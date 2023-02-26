import { Link } from 'react-router-dom';

import { useGlobalState } from '@/hooks';

import './Nav.scss';

export default function Nav() {
  const [_, setGlobalState] = useGlobalState();

  function changeGlobalState() {
    setGlobalState((currentGlobalState) => {
      const globalKey =
        currentGlobalState.globalKey === 'globalValue'
          ? 'blobalValue'
          : 'globalValue';

      return {
        ...currentGlobalState,
        globalKey
      };
    });
  }

  return (
    <nav className="Nav">
      <Link to="">Home</Link> |&nbsp;
      <Link to="login">Login</Link>
      <button
        style={{
          display: 'block',
          marginTop: 20
        }}
        onClick={changeGlobalState}
      >
        Change Global State State
      </button>
    </nav>
  );
}
