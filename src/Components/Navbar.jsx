import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-4 bg-orangy relative z-10">
      {/* logo */}
      <div className="font-oswald font-extrabold text-5xl text-creamy">
        <Link to="/">FinFlo</Link>
      </div>

      {/* nav links */}
      <div className="flex items-center gap-6 text-creamy font-semibold text-lg">
        <Link className="hover:underline active:text-black" to="/learn" >Learn</Link>
        <Link className="hover:underline active:text-black" to="/use">Use</Link>
        <Link className="hover:underline active:text-black" to="/build">Build</Link>
        <Link className="hover:underline active:text-black" to="/participate">Participate</Link>
        <Link className="hover:underline active:text-black" to="/research">Research</Link>
      </div>

      {/* donate button */}

        <Link to="/donate" className="bg-creamy text-black px-8 py-1 rounded-full font-oswald font-extrabold text-lg">Donate</Link>

    </div>
  );
};

export default Navbar;
