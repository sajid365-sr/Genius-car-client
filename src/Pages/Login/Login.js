import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();

    }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">

        <div className="text-center lg:text-left">
          <img className="w-4/5" src={img} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-8">New to Genius Car?
              <Link className="text-orange-500 text-bold" to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
