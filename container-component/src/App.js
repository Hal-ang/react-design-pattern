import { BookInfo } from './components/book-info';
import ResourceLoader from './components/resource-loader';
import { UserInfo } from './components/user-info';

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={'/users/2'} resourceName={'user'}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={'/books/2'} resourceName={'book'}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
