import DataSource from './components/data-source';
import DataSourceWithRender from './components/data-soure-with-render';
import { UserInfo } from './components/user-info';
import axios from 'axios';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer('/users/3')}
        render={(resource) => <UserInfo user={resource} />}
      />
      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
