import { Outlet } from 'react-router-dom';

import { useApi, useGlobalState } from '@/hooks';

import { Nav } from '@/components';
import { DogFacts } from '@/components';

import './App.scss';

export default function App() {
  const { isLoading, data } = useApi('get', '/');
  if (!isLoading) console.log(data.app);

  const [globalState] = useGlobalState();

  return (
    <div className="App">
      <h1>MERN</h1>
      <Nav />
      <Outlet />
      <DogFacts />
      <pre>Global State: {globalState.globalKey}</pre>
    </div>
  );
}
