import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);


  

    const menuItems = <>
    <li className="mr-5"><Link className="font-semibold" to='/'>Home</Link></li>
    
     {
        user?.email ? 
        <>
        <li><Link className="font-semibold" to='/orders'>Inventory</Link></li>
        <li onClick={logOut}><Link className="font-semibold" to='/login'>Logout</Link></li>
        </>
        :
        <li><Link className="font-semibold" to='/login'>Login</Link></li>
      
     }
    </>

  return (
    <div className="navbar h-20 pt-8 mb-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}

          </ul>
        </div>
        <Link to='/' className="w-24 h-20">
            <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
