import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" id="navLogo" className="text-chocolate text-3xl font-bold">
          Chocolate Coffee
        </Link>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="transition hover:text-chocolate hover:text-lg hover:font-bold hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/buy" className="transition hover:text-chocolate hover:text-lg hover:font-bold hover:underline">Buy</Link>
          </li>
          <li>
            <Link to="/about us" className="transition hover:text-chocolate hover:text-lg hover:font-bold hover:underline">About Us</Link>
          </li>
           <li>
            <Link to="/contact us" className="transition hover:text-chocolate hover:text-lg hover:font-bold hover:underline">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
