import React from 'react';

export default ({ count, increment, decrement }) => (<div className="counter">
  <h1>{count}</h1>
  <button onClick={() => increment()}>+</button>
  <button onClick={() => decrement()}>-</button>
</div>);
