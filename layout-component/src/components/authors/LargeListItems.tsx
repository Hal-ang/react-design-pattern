import { authors } from '../../data/authors';

export const LargeAuthorListItem = ({
  author,
}: {
  author: (typeof authors)[0];
}) => {
  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age :{age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book: string) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
