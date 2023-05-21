import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../shared/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = ({ chef }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  } 
  const { id, name, photo, experience, numRecipes, likes } = chef;
  return (
    <div className="card bg-neutral-100 shadow-xl my-1 border border-yellow-600">
      <figure className="px-10 pt-10 ">
        <LazyLoadImage
              alt={"img"}
              height={""}
              src={photo}
              width={""}
              className="w-44 h-44 bg-neutral border border-yellow-600 rounded-full"
            />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-neutral">Name : {name}</h2>
        <p className="font-semibold text-gray-700">Years of experience : {experience}</p>
        <p className="font-semibold text-gray-700">Numbers of recipes : {numRecipes}</p>
        <p className="font-semibold text-gray-700 badge badge-warning">Likes : {likes}</p>
        <div className="card-actions">
          <Link to={`/viewrecipes/${id}`}>
            <button className="btn text-yellow-600 hover:text-white hover:bg-yellow-600">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
