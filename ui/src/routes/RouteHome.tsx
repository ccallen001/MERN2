export default function RouteHome() {
  return (
    <div className="RouteHome route">
      <h2 className="route-heading">Home</h2>
      <button
        style={{ display: 'block', margin: '32px auto' }}
        onClick={async () => {
          const resp = await fetch('http://localhost:3001/api/test-auth', {
            headers: {
              authorization: `bearer ${localStorage.getItem('token')}`
            }
          });
          const json = await resp.json();
          console.log({ json });
        }}
      >
        Test Auth
      </button>
    </div>
  );
}
