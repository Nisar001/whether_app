import React from 'react';

const Toggle = ({ isCelsius, setIsCelsius }) => {
  return (
    <div className="toggle">
      <button onClick={() => setIsCelsius(!isCelsius)}>
        Toggle to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default Toggle;
