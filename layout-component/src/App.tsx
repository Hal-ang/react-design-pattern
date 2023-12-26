import LargeAuthorListItem from './components/authors/LargeListItems';
import RegularList from './components/lists/Regular';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { authors } from './data/authors';

const App = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
};

export default App;
