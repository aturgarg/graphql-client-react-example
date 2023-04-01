// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div>
      <h2>My first Apollo client app 🚀</h2>
      <br/>
      <DisplayBooks />
    </div>
  );
}



const GET_BOOKS = gql`
  query ExampleQuery {
    books {
      title
        author {
          name
            books {
              title
            }
        }
    }
  }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((book) => (
    <div key={book.title}>
      <h3>Book name: {book.title}</h3>
      <h3>Author: {book.author.name}</h3>
    </div>
  ));
}


