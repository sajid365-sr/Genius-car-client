
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUP = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result => {
            const user = result.user;
            form.reset();
        })
        .catch(e => console.error(e))

    }

    return (
        <div className="hero w-full my-20">
      <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">

        <div className="text-center lg:text-left">
          <img className="w-4/5" src={img} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>

          <form onSubmit={handleSignUP} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name='name'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
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
                name='password'
                className="input input-bordered"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="text-center mb-8">Already have an account?
              <Link className="text-orange-500 text-bold" to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;