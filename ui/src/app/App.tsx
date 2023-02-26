import { useQuery } from 'react-query';
import axios from 'axios';

import { Outlet } from 'react-router-dom';

import { useGlobalState } from '@/hooks';

import { Nav } from '@/components';
import { DogFacts } from '@/components';

import './App.scss';

export default function App() {
  const { isLoading, data } = useQuery('app-mern', async () => {
    const { data } = await axios.get('http://localhost:3001/api');
    return data;
  });

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
