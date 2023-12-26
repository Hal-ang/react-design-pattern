import LargeBookListItem from './components/books/LargeListItems';
import { Modal } from './components/Modal';
import { books } from './data/books';

const App = () => {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
};

export default App;
