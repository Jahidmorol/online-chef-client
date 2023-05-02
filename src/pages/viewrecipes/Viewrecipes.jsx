import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Viewrecipes = () => {
    const viewrecipes = useLoaderData();
    console.log(viewrecipes);
    const {id, name, photo, experience, numRecipes, likes, bio, recipes} = viewrecipes

    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-1/2">
              <img src={photo} className="w-full rounded-lg" />
              <h1 className="text-4xl font-bold mt-4">{name}</h1>
              <p className="text-gray-600 mt-2">{bio}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-gray-600">{likes} Likes</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600">{numRecipes} Recipes</span>
                </div>
                <span className="text-gray-600">{experience} Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div>
            {recipes.map(recipe => <RecipeCard recipe={recipe}></RecipeCard>)}
        </div>
      </div>
    );
  };
export default Viewrecipes;