import ControlledFlow from './components/ControlledFlow';
import { useState } from 'react';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button
        onClick={() => {
          goNext({ name: 'MyName' });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button
        onClick={() => {
          goNext({ age: 26 });
        }}
      >
        Next
      </button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congredulations! You qualify for the gitft!</h1>
      <button
        onClick={() => {
          goNext({});
        }}
      >
        Next
      </button>
    </>
  );
};

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4 Enter your country</h1>
      <button
        onClick={() => {
          goNext({ country: 'Mars' });
        }}
      >
        Next
      </button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex((prev) => prev + 1);
  };

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 24 && <StepThree />}

        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
