'use client';

import { useState } from 'react';
const MyCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-2xl text-center text-green-300">
      <h2>Counter: {counter} </h2>
      <div className="m-5">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="btn btn-primary text-white px-10 text-2xl mx-3 active:bg-violet-700"
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          className="btn btn-error text-white px-10 text-2xl mx-3 active:bg-violet-700"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MyCounter;
