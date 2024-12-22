import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
  const items = (
    <>
     <Link to="/"><li>Home </li></Link>
    <Link to="/queries"><li>Queries</li></Link>
    <Link to="/recommendations"><li>Recommendations For Me</li></Link>
    <Link to="/myqueries"><li>My Queries</li></Link>
    <Link to="/myrecommendations"><li>My recommendations</li></Link>
      
    </>
  )
  const handleSignOut = () =>{
    signOutUser()
      .then(result=>{
       Swal.fire({
              icon: "success",
              title: "Logged out Successfully",
              showConfirmButton: false,
              timer: 1500
            });
    })
    .catch(error=>
      console.log(error)
      
    )
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {items}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Suggestify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
     {items}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <Link to="/auth/login"><button onClick={handleSignOut} className='btn'>Logout</button></Link> : <Link to="/auth/login"><button className='btn'>Login</button></Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;