import UncontrolledFlow from './components/UncontrolledFlow';

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
          goNext({ age: 'Age' });
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
      <h1>Step #3 Enter your country</h1>
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
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert('Yaee, you made it to the final step!');
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
