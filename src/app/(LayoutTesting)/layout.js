import React from 'react';

const MyLayout = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl text-center p-5">Header</h2>
      {children}
      <h2 className="text-3xl text-center p-5">Footer</h2>
    </div>
  );
};

export default MyLayout;
