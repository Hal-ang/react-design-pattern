import { Recursive, RecursiveComponent } from './components/recursive';
import { RedButton, SmallRedButton } from './components/partial';

const myNestedObject = {
  key1: 'value1',
  key2: {
    innerKey1: 'innerValue1',
    innerKey2: {
      innerInnerKey1: 'innerInnerValue1',
      innerInnerKey2: 'innerInnerValue2',
    },
  },
  key3: 'value3',
};

function App() {
  return (
    <>
      {/* <Recursive data={myNestedObject} /> */}
      {/* <RecursiveComponent data={myNestedObject} /> */}

      <RedButton text='I am red' />
      <SmallRedButton text='I am red and small' />
    </>
  );
}

export default App;
