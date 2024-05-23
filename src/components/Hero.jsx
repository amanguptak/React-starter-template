
import { Link } from 'react-router-dom';

const Hero= () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">We are here to provide you the best service possible.</p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" to="/users">Get Started</Link>
      </div>
    </div>
  );
};

export default Hero;
