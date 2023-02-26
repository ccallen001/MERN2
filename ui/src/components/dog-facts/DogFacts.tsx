import { useGetDogFacts } from './use-get-dog-facts';

import './DogFacts.scss';

export default function DogFacts() {
  const { isLoading, isError, data } = useGetDogFacts();

  if (isLoading) return <h2 style={{ fontSize: 40 }}>🐶</h2>;

  if (isError) return <h2>An error occurred while getting dog facts.</h2>;

  return (
    <>
      <h4>Did you know?</h4>
      <h5>{data.facts[0]}</h5>
    </>
  );
}
