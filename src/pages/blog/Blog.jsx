import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';

const Blog = () => {
    const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  
    return (
      <div className="container mx-auto">
      <div className="md:mt-16 mt-8">
        <h2 className="md:text-4xl text-3xl ms-2 md:ms-0 text-yellow-600 font-bold mb-4">1. DIFFERENCES BETWEEN UNCONTROLLED AND CONTROLLED COMPONENTS</h2>
        <h4 className="ms-5 font-semibold text-gray-700">
        Uncontrolled components:
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Manage their own state internally.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> The component's state is not directly controlled by React.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Values can be accessed using a ref, but they don't have an onChange handler.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Typically used for simple forms or when you need direct access to DOM elements.</p>
        <h4 className="ms-5 font-semibold text-gray-700 mt-4">
        Uncontrolled components:
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Manage their own state internally.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> The component's state is not directly controlled by React.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Values can be accessed using a ref, but they don't have an onChange handler.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Typically used for simple forms or when you need direct access to DOM elements.</p>
      </div>

      {/* ---------Q2-------------- */}
      <div className="my-8">
        <h2 className="md:text-4xl text-3xl ms-2 md:ms-0 text-yellow-600 font-bold mb-4">2. HOW TO VALIDATE REACT PROPS USING PROPTYPES</h2>
        <h4 className="ms-5 font-semibold text-gray-700">
        <span className='text-yellow-600 font-semibold'>#</span> PropTypes is a package in React that allows you to define the type and shape of the props that your component expects.
        </h4>
        <h4 className="ms-5 font-semibold text-gray-700 mb-2">
        <span className='text-yellow-600 font-semibold'>#</span> It provides runtime type-checking to help catch bugs and ensure that the correct props are passed to components.
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>1.</span> Import the PropTypes package: import PropTypes from 'prop-types'.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>2.</span> Define the PropTypes for your component, specifying the expected types and any required props.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>3.</span> Assign the PropTypes to the component's propTypes static property.</p>
      </div>

      {/* ---------Q3-------------- */}
      <div className="my-8">
        <h2 className="md:text-4xl text-3xl ms-2 md:ms-0 text-yellow-600 font-bold mb-4">3. DIFFERENCE BETWEEN NODE.JS AND EXPRESS.JS</h2>
        <h4 className="ms-5 font-semibold text-gray-700">
        Node.js:
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span>  Node.js is a JavaScript runtime environment built on the Chrome V8 JavaScript engine.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> It allows you to execute JavaScript code outside the browser, on the server-side.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Provides a platform for building scalable and high-performance network applications.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Offers a vast ecosystem of libraries and frameworks to build various types of applications.</p>
        <h4 className="ms-5 font-semibold text-gray-700 mt-4">
        Express.js:
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Express.js is a minimal and flexible web application framework built on top of Node.js.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> It provides a set of features and tools for building web applications and APIs</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Handles routing, middleware, and request/response handling in a simple and intuitive manner.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>#</span> Express.js simplifies the process of building web applications with Node.js by providing a higher-level abstraction.</p>
      </div>

      {/* ---------Q4-------------- */}
      <div className="mt-8 md:mb-16 mb-8">
        <h2 className="md:text-4xl text-3xl ms-2 md:ms-0 text-yellow-600 font-bold mb-4">4. WHAT IS A CUSTOM HOOK, AND WHY WILL YOU CREATE A CUSTOM HOOK?</h2>
        <h4 className="ms-5 font-semibold text-gray-700">
        <span className='text-yellow-600 font-semibold'>#</span> A custom hook is a JavaScript function that allows you to reuse stateful logic between components in a reusable and composable way.
        </h4>
        <h4 className="ms-5 font-semibold text-gray-700 mb-2">
        <span className='text-yellow-600 font-semibold'>#</span> It enables you to extract common logic from components into a separate function that can be used across multiple components.
        </h4>
        <h4 className="ms-5 font-semibold text-gray-700 ">
        Reasons to create a custom hook:
        </h4>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>1.</span> Reusability: Custom hooks promote code reuse and prevent duplication of logic across components.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>2.</span> Abstraction: They allow you to encapsulate complex logic and provide a simplified interface to use that logic.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>3.</span> Modularity: Custom hooks can help in separating concerns and keeping your components focused on their specific tasks.</p>
        <p className="ms-5 text-gray-700"><span className='text-yellow-600 font-semibold'>3.</span> Stateful Logic: Custom hooks can manage and maintain state, perform side effects, or connect to external APIs.</p>
      </div>
    </div>
    );
};

export default Blog;