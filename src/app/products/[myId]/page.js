import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h2 className="text-3xl text-center p-10">
        This is Dynamic page: {params.myId}{' '}
      </h2>
      <h2 className="text-2xl text-center p-10">
        Search By: {searchParams.type} & {searchParams.kind}
      </h2>
    </div>
  );
};

export default DynamicPage;
