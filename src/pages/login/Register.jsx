import React, { useContext, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../shared/Loading";

const Register = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const { setReload } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const picture = form.picture.value;

    console.log(email, password, name, picture);
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        // console.log(createUser);
        updateUser(createUser, name, picture)
          .then((result) => {
            setReload(new Date().getTime());
          })
          .catch((error) => console.error(error));
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });

    if (!email || !password) {
      setErrorMessage("Please enter an email and password");
      return;
    } else if (password.length < 6) {
      setErrorMessage("at least more then 6 numbers ");
      return;
    }
    //  else if (!/(?=.[A-Z].[A-Z])/.test(password)) {
    //   setErrorMessage("at least two capital letters");
    //   return;
    // } else if (!/(?=.[0-9].[0-9])/.test(password)) {
    //   setErrorMessage("at least two numeric digits");
    //   return;
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-4">
        <h1 className="text-5xl text-center text-yellow-600 font-bold mb-8">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-yellow-600  shadow-md rounded-md px-8 pt-8 pb-10 mb-4"
        >
          <div className="my-5">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="my-5">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="picture"
            >
              Your Photo Url
            </label>
            <input
              className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="picture"
              type="text"
              placeholder="Your Photo Url"
              required
            />
          </div>
          <div className="my-5">
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
              // required
            />
          </div>
          <div className="my-5">
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
                // required
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
            <p className="text-red-500 text-md mb-4">{errorMessage}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <p className="mt-5 ">
              Allrady have an account ?
              <Link
                to="/login"
                className="ms-2 inline-block align-baseline font-bold text-sm text-yellow-600 hover:text-yellow-700"
              >
                Go to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
