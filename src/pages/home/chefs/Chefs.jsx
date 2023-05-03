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
      <h2 className="text-center font-bold text-5xl mb-10">Our Awesome Chef's</h2>
      <div className="grid gap-1 mb-8 lg:grid-cols-3 ">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
