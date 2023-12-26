import './index.css';

import SplitScreen from './components/SplitScreen';

const LeftSideComp = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>;
};

const RightSideComp = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: 'brown' }}>{title}</h2>;
};

function App2_7() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title='left' />
        <RightSideComp title='Right' />
      </SplitScreen>
    </>
  );
}

export default App2_7;
