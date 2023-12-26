import LargeAuthorListItem from './components/authors/LargeListItems';
import LargeBookListItem from './components/books/LargeListItems';
import NumberedList from './components/lists/Numbered';
import RegularList from './components/lists/Regular';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import SmallBookListItem from './components/books/SmallListItems';
import { authors } from './data/authors';
import { books } from './data/books';

const App = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};

export default App;
