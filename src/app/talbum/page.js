import Image from 'next/image';
import year from '@/assests/2024.jpg';

const ImageComponent = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl">This is Image Component</h2>
        <Image
          src="https://images.unsplash.com/photo-1627519374433-e30c530696ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="nature image"
        />
      </div>
      <div>
        <Image src={year} alt="year 2024"></Image>
      </div>
    </div>
  );
};

export default ImageComponent;
