import { authors } from '../../data/authors';

export const SmallAuthorListItem = ({
  author,
}: {
  author: (typeof authors)[0];
}) => {
  const { name, age } = author;

  return (
    <p>
      Name : {name}, Age : {age}
    </p>
  );
};
