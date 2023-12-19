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
          className="border min-w-[80px] mx-3 font-semibold pb-1 bg-green-950 hover:bg-lime-950 active:bg-red-800"
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          className="border min-w-[80px] mx-3 font-semibold pb-1  bg-green-950 hover:bg-lime-950 active:bg-red-800"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MyCounter;
