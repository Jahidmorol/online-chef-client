import React from "react";
import { useNavigation } from "react-router-dom";
import Loading from "../../shared/Loading";
import Chef from "./Chef";

const Chefs = ({ chefs }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="my-container">
      <h2 className="text-center mb-10 text-4xl font-bold md:text-5xl">Our Awesome Chef's</h2>
      <div className=" grid gap-5 lg:grid-cols-3">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
