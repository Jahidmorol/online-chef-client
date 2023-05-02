import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
    .then()
    .catch(e => console.error(e))
  }

  return (
    <div className="bg-gray-100">
      <div className=" px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="">
            <span className="ml-2 mb-3 text-xl sm:text-2xl  font-bold tracking-wide uppercase text-gray-800">
              Mast <span className=" text-yellow-600">Mosala</span>
            </span>
          </Link>

          {/* Nav Items Section */}

          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li className="flex items-center gap-3">
              <div
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                {
                  user?.displayName ? <p className="font-semibold">{user.displayName}</p> : <p>Profile</p>
                }
              </div>
              <div>
                {
                  user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user.photoURL} /> : <FaUserCircle className="w-9 h-9"></FaUserCircle>
                }
              </div>
              {user ? (
                <button onClick={handleLogout} className="btn">Log Out</button>
              ) : (
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/">
                        <span className="mb-6 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Mast Masala
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaRegTimesCircle className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* <button className="btn">Star Applying</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
