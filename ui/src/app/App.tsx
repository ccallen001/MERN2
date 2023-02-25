import { Outlet } from 'react-router-dom';

import { useAxios, useGlobalState } from '@/hooks';

import { Nav } from '@/components';
import { DogFacts } from '@/components';

import './App.scss';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        const app = await fetch('http://localhost:3001/api');
        const appJson = await app.json();
        console.log(appJson.app);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // TODO : going to need to refactor or completely ditch the useAxios hook thing...
  // it doesn't play well with 2 calls in the same component
  const { isLoading, data } = useAxios('get', 'https://dogapi.dog/api/facts');
  const fact = data?.facts[0];

  const [globalState] = useGlobalState();

  return (
    <div className="App">
      <h1>MERN</h1>
      <Nav />
      <Outlet />
      <DogFacts {...{ isLoading, fact }} />
      <pre
        style={{
          marginTop: 6,
          padding: 8,
          width: 256,
          backgroundColor: 'black',
          color: 'limegreen',
          borderRadius: 4
        }}
      >
        Global State: {globalState.globalKey}
      </pre>
    </div>
  );
}
