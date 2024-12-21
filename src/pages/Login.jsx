import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaTextSlash } from "react-icons/fa6";
import Swal from "sweetalert2";

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
        <div>
             <div class="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-2xl mt-14 p-12">
        <form class="card-body" onSubmit={handleLogin}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
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
              <span class="label-text">Password</span>
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
            <button class="btn bg-[#7ABB2D] text-white font-bold">Login</button>
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
          className="flex items-center justify-center gap-2 btn bg-[#7ABB2D] text-white font-bold w-10/12 mx-auto mt-10"
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