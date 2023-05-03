import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../shared/Loading";

const Chef = ({ chef }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const { id, name, photo, experience, numRecipes, likes } = chef;
  return (
    <div className="card w-96 bg-inherit shadow-xl my-5 border-2 border-orange-600">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="photo"
          className="w-44 h-44 rounded-full border-4 border-orange-600"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name : {name}</h2>
        <p className="font-semibold text-gray-700">Years of experience : {experience}</p>
        <p className="font-semibold text-gray-700">Numbers of recipes : {numRecipes}</p>
        <p className="font-semibold text-gray-700">Likes : {likes}</p>
        <div className="card-actions">
          <Link to={`/viewrecipes/${id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
