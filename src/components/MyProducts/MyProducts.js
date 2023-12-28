'use client';

import { useEffect, useState } from 'react';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://technest-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="p-5 text-2xl">{products.length}</h2>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div className="border-black border-2 m-5 p-2" key={product._id}>
            <img src={product?.image} alt="images"></img>
            <div className="text-lg">
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.type}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
