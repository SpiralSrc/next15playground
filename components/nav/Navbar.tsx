import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen fixed top-0 left-0 flex py-5">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-2">
        {/* logo */}
        <div>
          <span>Logo</span>
        </div>

        {/* links */}
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
