import MyProducts from '@/components/MyProducts/MyProducts';

const page = () => {
  return (
    <div className="bg-gray-700">
      <h2 className="text-center p-10 text-4xl text-white">
        This is Products Page
        <MyProducts></MyProducts>
      </h2>
    </div>
  );
};

export default page;
