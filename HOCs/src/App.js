import { UserInfo } from './components/user-info';
import { logProps } from './components/log-props';

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper test={'test'} b='i am b' c={21} />
    </>
  );
}

export default App;
