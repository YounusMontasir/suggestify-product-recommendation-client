import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { CiUser } from 'react-icons/ci';

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
  const items = (
    <>
     <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/queries"><li>Queries</li></NavLink>
    <NavLink to="/aboutus"><li>About Us</li></NavLink>
    {user && (
    <>
    <NavLink to="/recommendations"><li>Recommendations For Me</li></NavLink>
    <NavLink to="/myqueries"><li>My Queries</li></NavLink>
    <NavLink to="/myrecommendations"><li>My recommendations</li></NavLink>
    </>
    )}
      
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
  // #6C727C
  //  #0D233E
    return (
       <div className='bg-[#212529]  sticky top-0 z-10'>
         <div className="navbar bg-[#212529] py-4 w-11/12 lg:w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-white  lg:hidden">
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
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 pl-3 px-1 gap-6 text-[15px] font-semibold bg-[#212529] text-[#FFFFFFB3] p-2 shadow">
        {items}
      </ul>
    </div>
    <img className='w-10 h-10 md:w-16 md:h-16 rounded-full ml-4 ' src="https://i.ibb.co.com/M22BwbG/suggestify-logo.webp" alt="" />
    <a className="text-xl md:text-2xl text-white font-bold ml-2">Suggestify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-[15px] font-semibold text-[#FFFFFFB3]">
     {items}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <Link to="/auth/login"><button onClick={handleSignOut} className='btn btn-md text-[#0D233E] rounded-md'><CiUser className='h-5 font-bold w-5'/> Logout</button></Link> : <Link to="/auth/login"><button className='btn btn-md text-[#0D233E] rounded-md'>Login</button></Link>
    }
    
  </div>
</div>
       </div>
    );
};

export default Navbar;