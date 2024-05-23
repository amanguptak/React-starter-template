
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-xl rounded-md bg-white">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGD7Zes0BFod2_dT_e-ORw12AMRbcfsBsTgq61XxWGQ&s" alt="Logo" className="h-9 w-fit" />
      </div>
      <div className="flex space-x-5 mx-3">
        <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
        <Link to="/users" className="text-gray-800 hover:text-blue-600">User</Link>
        <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
