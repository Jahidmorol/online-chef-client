import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
//   console.log("jahid error",error);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <img src="https://pngimg.com/uploads/chef/chef_PNG139.png" alt="404 error" className="h-48 mb-2 animate-bounce" />
      <h1 className="text-6xl font-bold mb-4">{status || 404}</h1>
      <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-8">{error?.message}</p>
      <Link
        to="/"
        className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
