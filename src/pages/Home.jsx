import React from 'react';
import { Link } from 'react-router-dom';
import CC from '../img/chocolateCoffee.png'

const Home = () => {
  return (
    <div className="container mx-auto mt-36 flex flex-wrap">
      <div className="homeText w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-white">Discover Our Chocolate <br/>
                        Tasting Coffee</h1>
        <p className="text-gray-400 mb-9">
          Experience the rich, indulgent taste of coffee that's reminiscent of chocolate.<br/>
          Available globally online right here today!
        </p>
         {/* Sign Up and Log In buttons */}
        <div className="buttons">
          <Link to="/signup">
          <button className="bg-chocolate hover:bg-gray-600 text-white font-bold py-2 px-8 rounded">
            Sign Up
          </button>
          </Link>
          <Link to="/login">
          <button className="bg-chocolate hover:bg-gray-600 text-white font-bold py-2 px-8 rounded ml-5">
            Log In
          </button>
          </Link>
        </div>
      </div>
      <div className="coffeeCup w-full sm:w-1/2">
        <img src={CC} alt="Chocolate Coffee" className="w-sm rounded-lg"/>
      </div>
    </div>
  );
};

export default Home;
