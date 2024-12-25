import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaTextSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import loginLottie from '../assets/lotties/login.json'
import Lottie from "lottie-react";

const Login = () => {
    const { setUser, loginUser, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
       
    
        loginUser(email, password)
          .then((result) => {
            const user = result.user;
            setUser(user);
    
            navigate(location?.state ? location.state : "/");
            Swal.fire({
                
                icon: "success",
                title: "Logged in Successfully",
                showConfirmButton: false,
                timer: 1500
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed",
              showConfirmButton: false,
              timer: 1500
            });
          });
      };
      const handleGoogle = () => {
        loginWithGoogle()
          .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
            Swal.fire({
                icon: "success",
                title: "Logged in Successfully",
                showConfirmButton: false,
                timer: 1500
              });
          })
          .catch((error) => {
            
            Swal.fire({
                icon: "error",
                title: "Failed",
                showConfirmButton: false,
                timer: 1500
              });
          });
      };
    return (
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 gap-0 items-center mx-auto my-20">
          <div>
            <Lottie className="w-full" animationData={loginLottie}> 

            </Lottie>
          </div>
             <div class=" w-full lg:w-1/2  mx-auto  ">
             <div className='relative inline-block w-full'>
         <h3 className='text-3xl mb-4 relative'>Login to Suggestify
          <span class="absolute left-0 top-12 t-4 h-0.5 bg-blue-500 w-2/12"></span>
          </h3>
          <div class="absolute top-12 bottom-0 w-full h-px bg-gray-300"></div>
         </div>
        <form class="card-body" onSubmit={handleLogin}>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control relative">
            <label class="label">
              <span class="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
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
            <label class="label">
              <Link
                class="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-[#2D86EB] text-white font-bold">Login</button>
          </div>
          <p className="text-center">
            Doesn't have an Account?{" "}
            <Link to="/auth/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </form>
        <div class="divider">OR</div>
        <div
          onClick={handleGoogle}
          className="flex items-center justify-center gap-2 btn  text-black font-bold w-11/12 mx-auto mt-10"
        >
          <img
            className="w-8 h-8"
            src="https://i.ibb.co.com/6tyhjC2/google.png"
            alt=""
          />
          <p>Continue With Google</p>
        </div>
      </div>
        </div>
    );
};

export default Login;