import { ControlledModal } from './components/ControlledModal';
import { useState } from 'react';

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I am the body of th modal!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay((prev) => !prev)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>
    </>
  );
}

export default App;
