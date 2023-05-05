import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../shared/Loading";
import RecipeCard from "./RecipeCard";

const Viewrecipes = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const viewrecipes = useLoaderData();
  console.log(viewrecipes);
  const { id, name, photo, experience, numRecipes, likes, bio, recipes } =
    viewrecipes;

  return (
    <div className="bg-gray-100 py-8">
      <div className="container">
        <div className="md:flex justify-center">
          <div className="md:w-1/2">
            <LazyLoadImage
              alt={"img"}
              height={""}
              src={photo}
              width={""}
              className="w-10/12 md:w-3/5 border border-yellow-600 rounded-full mx-auto"
            />
            <h1 className="text-center md:text-left text-4xl font-bold text-yellow-600 mt-4">
              {name}
            </h1>
            <p className="text-gray-600 mt-2 text-center md:text-left">{bio}</p>
            <div className="flex-wrap mx-auto w-52 md:w-full md:flex items-center justify-between mt-4">
              <div className="flex gap-3">
                <span className="badge badge-warning">{likes} Likes</span>
                <span className="badge badge-warning">
                  {numRecipes} Recipes
                </span>
              </div>
              <span className="badge badge-warning">
                {experience} Years of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container ">
        <h2 className="text-center mb-10 text-4xl font-bold text-yellow-600">
          Best And Best Recipes
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard key={id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Viewrecipes;
