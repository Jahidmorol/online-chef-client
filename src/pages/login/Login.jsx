import React, { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../shared/Loading";

const Login = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn, signInWithGoogle, singInWithGithub } =
    useContext(AuthContext);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleGithub = () => {
    singInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });

    if (!email || !password) {
      setErrorMessage("Please enter an email and password");
    } else {
      setErrorMessage("");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-4">
        <h1 className="text-5xl text-center text-yellow-600 font-bold mb-8">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-yellow-600 shadow-md rounded-md px-8 pt-8 pb-10 mb-4"
        >
          <div className="my-7">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email Address"
              // value={email}
              // onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex">
              <input
                className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                //   value={password}
                //   onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="ml-2 bg-white border border-yellow-600 hover:bg-gray-300 focus:bg-gray-300 text-gray-700 font-semibold px-2 py-1 rounded"
                onClick={handleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-xs mb-4">{errorMessage}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-5">
              If are you new
              <Link
                to="/register"
                className="ms-2 inline-block align-baseline font-bold text-sm text-yellow-600 hover:text-yellow-700"
              >
                Go to Register
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <button className="btn" onClick={handleGoogle}>
              <FaGoogle className="h-5 me-3 w-5 text-yellow-600"></FaGoogle>{" "}
              Login In with google
            </button>
            <button className="btn" onClick={handleGithub}>
              <FaGithub className="h-5 me-3 w-5 text-yellow-600"></FaGithub>{" "}
              Login In with github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
