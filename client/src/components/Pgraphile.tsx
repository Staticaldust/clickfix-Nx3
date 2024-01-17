import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { GET_USER } from '../utils/postgraphile';

export const Pgl = () => {
  const { loading, error, data } = useQuery(
    gql`
      query {
        userByUserId(userId: 2) {
          userId
          name
          mailAddress
        }
      }
    `
  );

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Error: {error.message}</p>;
  }
  console.log(data);

  return (
    <div>
      <div>{JSON.stringify(data.userByUserId)}</div>
    </div>
  );
};
// interface Dog {
//   id: string;
//   breed: string;
// }

// interface DogsProps {
//   onDogSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
// }

// export function Pgl({ onDogSelected }: DogsProps) {
//   const { loading, error, data } = useQuery<{ dogs: Dog[] }>(GET_USERS);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return (
//     <select name="dog" onChange={onDogSelected}>
//       {data?.dogs.map((dog) => (
//         <option key={dog.id} value={dog.breed}>
//           {dog.breed}
//         </option>
//       ))}
//     </select>
//   );
// }
