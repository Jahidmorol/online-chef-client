import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {id, name, photo, experience, numRecipes, likes } = chef;
  return (
    <div className="card w-96 bg-inherit shadow-xl my-5 border-2 border-yellow-600">
      <figure className="px-10 pt-10">
        <img src={photo} alt="photo" className="w-44 h-44 rounded-full border border-yellow-600" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Chef Name : {name}</h2>
        <p>Years of experience : {experience}</p>
        <p>Numbers of recipes : {numRecipes}</p>
        <p>Likes : {likes}</p>
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
