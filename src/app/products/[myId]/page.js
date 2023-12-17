import React from 'react';

const DynamicPage = ({ params }) => {
  // console.log(params);
  return (
    <div>
      <h2 className="text-3xl text-center p-10">
        This is Dynamic page: {params.myId}{' '}
      </h2>
    </div>
  );
};

export default DynamicPage;
