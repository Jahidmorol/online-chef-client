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
      <h2>its a chefs component</h2>
      <div className="grid gap-1 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
