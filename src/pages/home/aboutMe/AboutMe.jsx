import React from "react";
import about from "../../../assets/waitress-standing-front-team-chefs_13339-16993.jpg";

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-5 pb-6 border-b-2 border-yellow-600">
        About Us
      </h2>
      <div className="grid md:flex items-center gap-4  ">
        <div className="mb-4 md:mb-0">
          <img
            src={about}
            alt="Chef in kitchen"
            className="w-full rounded-md"
          />
        </div>
        <div className="border-x-2 px-4 border-yellow-600 ">
            <p className="text-center font-bold text-2xl text-yellow-600 mb-3">Welcome to our chef website!</p>
          <p className="mb-4 text-gray-600 font-semibold">
            Our team of chefs has years of experience in the culinary world, and
            we pride ourselves on using only the freshest ingredients to create
            healthy, tasty meals. We specialize in a variety of cuisines,
            including Italian, French, and Asian, and we are always
            experimenting with new flavors and techniques to keep our menus
            fresh and exciting.
          </p>
          <p className="mb-4 text-gray-600 font-semibold">
            In addition to our catering services, we also offer cooking classes
            and workshops for individuals and groups. Whether you're a seasoned
            cook or just starting out, our classes are designed to help you
            develop your skills and expand your culinary knowledge.
          </p>
          <p className="text-gray-600 font-semibold">
            At our chef website, we're passionate about bringing people together
            through the joy of food. Whether you're planning a special event,
            looking for a fun activity with friends and family, or simply want
            to enjoy a delicious meal, we're here to help. Get in touch with us
            today to learn more about our services and how we can help make your
            next meal or event a success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
