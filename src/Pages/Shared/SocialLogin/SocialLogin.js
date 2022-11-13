import React, { useContext } from "react";
import { setAuthToken } from "../../../api/auth";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setAuthToken(user);

      })

      .catch((e) => console.error(e));
  };
  return (
    <div>
      <p className="text-center">
        <small>Social Login?</small>
      </p>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-sm btn-ghost">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
