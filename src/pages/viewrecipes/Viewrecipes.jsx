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
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2">
            <LazyLoadImage
              alt={"img"}
              height={""}
              src={photo}
              width={""}
              className="w-3/5 mx-auto"
            />
            <h1 className="text-4xl font-bold text-yellow-600 mt-4">{name}</h1>
            <p className="text-gray-600 mt-2">{bio}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                <span className="badge badge-warning">{likes} Likes</span>
                <span className="badge badge-warning">{numRecipes} Recipes</span>
              </div>
              <span className="badge badge-warning">
                {experience} Years of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container grid md:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};
export default Viewrecipes;
