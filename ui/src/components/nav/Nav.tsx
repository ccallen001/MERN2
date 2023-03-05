import { Link } from 'react-router-dom';

// import { useStateStore } from '@/hooks';

import './Nav.scss';

export default function Nav() {
  // const [_, setstateStore] = useStateStore();

  // function changeStateStore() {
  //   setstateStore((currentStateStore) => {
  //     const stateStoreKey =
  //       currentStateStore.stateStoreKey === 'stateStoreValue'
  //         ? 'something's different'
  //         : 'stateStoreValue';

  //     return {
  //       ...currentStateStore,
  //       stateStoreKey
  //     };
  //   });
  // }

  return (
    <nav className="Nav">
      <h1 className="app-title">MERN</h1>
      <Link to="">Home</Link> |&nbsp;
      <Link to="login">Login</Link>
      {/* <button
        style={{
          display: 'block',
          marginTop: 20
        }}
        onClick={changeStateStore}
      >
        Change State Store
      </button> */}
    </nav>
  );
}
