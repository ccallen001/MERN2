import { DogFactsProps } from '@/types';

import './DogFacts.scss';

export default function DogFacts({ isLoading, fact }: DogFactsProps) {
  return (
    <div className="DogFacts">
      {isLoading ? (
        <h2 style={{ fontSize: 40 }}>🐶</h2>
      ) : (
        <>
          <h4>Did you know?</h4>
          <h5>{fact}</h5>
        </>
      )}
    </div>
  );
}
