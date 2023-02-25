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
      <Link to="route-0">Route 0</Link> |&nbsp;
      <Link to="route-1">Route 1</Link>
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
