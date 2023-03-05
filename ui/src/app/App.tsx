import { Outlet } from 'react-router-dom';

import { useQuery } from '@/hooks';
import { useStateStore } from '@/hooks';

import { Nav } from '@/components';
// import { DogFacts } from '@/components';

import './App.scss';

export default function App() {
  const { isLoading, data } = useQuery({ url: 'http://localhost:3001/api' });
  if (!isLoading) console.log(data?.app);

  const [stateStore] = useStateStore();

  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* <DogFacts /> */}
      {/* <pre>State: {stateStore.stateStoreKey}</pre> */}
    </div>
  );
}
