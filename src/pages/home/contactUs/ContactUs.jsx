import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
      <form className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-yellow-500 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="border border-yellow-600 p-2 w-full rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-yellow-500 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="border border-yellow-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block text-yellow-500 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="border border-yellow-600 p-2 w-full rounded-md"
            rows="5"
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="btn text-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
