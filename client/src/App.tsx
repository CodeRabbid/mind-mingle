import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

function App() {
  const { data, loading } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) return <div>loading</div>;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
