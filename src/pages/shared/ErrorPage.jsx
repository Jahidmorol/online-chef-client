import React from "react";
import { Link, useRouteError } from "react-router-dom";
import page404 from "../../assets/page404.webp"

const ErrorPage = () => {
  const { error, status } = useRouteError();
//   console.log("jahid error",error);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <img src={page404} alt="404 error" className="md:h-80 h-52 rounded-full mb-2 animate-bounce" />
      <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-8">{error?.message}</p>
      <Link
        to="/"
        className="btn text-gray-700 hover:bg-yellow-300"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
