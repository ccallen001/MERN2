import { Outlet } from 'react-router-dom';

import { useQuery } from '@/hooks';
import { useStateStore, useToastMsg } from '@/hooks';

import { Nav, Toast } from '@/components';

import './App.scss';

export default function App() {
  const { isLoading, data } = useQuery({ url: 'http://localhost:3001/api' });
  if (!isLoading) console.log(data?.app);

  // const [stateStore] = useStateStore();

  const [toastMsg, setToastMsg] = useToastMsg('');

  return (
    <div className="App">
      <Nav />
      <Outlet />
      {toastMsg && (
        <Toast msg={toastMsg} duration={3000} setToastMsg={setToastMsg} />
      )}
    </div>
  );
}
