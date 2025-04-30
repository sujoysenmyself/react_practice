import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ marginRight: '10px' }}>+ Increase</button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>- Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
