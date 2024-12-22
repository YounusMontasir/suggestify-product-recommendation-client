import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {user, setUser, createUser, updateUserProfile, loginWithGoogle} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    setError("")
    const form = new FormData(e.target);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name,email, image, password);
    
    
    if(password.length< 6){
        setError("Password must be 6 character long")
        return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
        setError("Password must contain one upperCase and One lowerCase Letter")
        return;
    }
    createUser(email, password)
    .then(result=>{
        const user = result.user
        setUser(user)
        updateUserProfile(name, image)
        console.log(user);
        navigate("/")
        Swal.fire({
            icon: "success",
            title: "Registration Completed",
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch(error => {
       
        
    })
  };
  const handleGoogle = () =>{
    loginWithGoogle()
    .then(result =>{
      const user = result.user
      setUser(user)
      navigate("/")
      Swal.fire({
        icon: "success",
        title: "Registration Completed",
        showConfirmButton: false,
        timer: 1500
      });
      
      
  })
  .catch(error =>{
    Swal.fire({
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500
      });
      
  })
 
  
  }
  return (
    <div>
      
      <div class="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-2xl mt-14 p-12">
        <form class="card-body" onSubmit={handleRegister}>
        <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Image URL</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control relative">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              class="input input-bordered"
              required
            />
             <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
            </button>
            
              {
                error && <p  class="label-text link link-hover text-red-700">{error}</p>
              }

          </div>
          <div class="form-control mt-6">
            <button class="btn bg-[#7ABB2D] text-white font-bold">Register</button>
          </div>
          <p className="text-center">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
        </form>
        <div class="divider">OR</div>
        <div onClick={handleGoogle} className="flex items-center justify-center gap-2 btn bg-[#7ABB2D] text-white font-bold w-10/12 mx-auto mt-10">
            <img className="w-8 h-8" src="https://i.ibb.co.com/6tyhjC2/google.png" alt="" />
            <p>Continue With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
