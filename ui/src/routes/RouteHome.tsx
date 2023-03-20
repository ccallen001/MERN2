import { useQuery } from '@/hooks';

export default function RouteHome() {
  const { data, refetch } = useQuery({
    url: 'http://localhost:3001/api/test-auth',
    headers: {
      authorization: `bearer ${localStorage.getItem('token')}`
    },
    enabled: false
  });

  if (data) {
    console.log(data);
  }

  return (
    <div className="RouteHome route">
      <h2 className="route-heading">Home</h2>
      <button
        style={{ display: 'block', margin: '32px auto' }}
        onClick={() => refetch()}
      >
        Test Auth
      </button>
    </div>
  );
}
