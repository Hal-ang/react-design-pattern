import './index.css';

import SplitScreen from './components/SplitScreen';

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: 'crimson' }}>I am left</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: 'brown' }}>I am right</h2>;
};

function App() {
  return (
    <>
      <SplitScreen Left={<LeftSideComp />} Right={<RightSideComp />} />
    </>
  );
}

export default App;
