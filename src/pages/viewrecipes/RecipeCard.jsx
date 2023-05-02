import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

//   const handleFavoritebutton = (favorite) => {
//     if(!favorite){
//         setFavoriteRecipes(true)
//     }
    
//   }

  const handleFavoriteClick = (recipeName) => {
    if (favoriteRecipes.includes(recipeName)) {
      setFavoriteRecipes(favoriteRecipes.filter((name) => name !== recipeName));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipeName]);
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
      <h4 className="text-gray-600 font-bold me-5">Ingradient :</h4>
      <ul className="list-disc ml-6  border-yellow-600">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700 list-none me-5">
            {ingredient},
          </li>
        ))}
      </ul>
      <p className="text-gray-700 mt-2">
        <span className="font-bold">Method : </span>
        {recipe.method}
      </p>
      <div className="flex items-center mt-4">
        <span className="text-gray-600">{recipe.rating} Rating</span>
        <button
          className={`ms-5 text-white bg-gray-900 border-0 py-2 px-4  rounded mr-2 mb-2 ${
            favoriteRecipes.includes(recipe.name) && "btn-disabled"
          }`}
          onClick={() => handleFavoriteClick(recipe.name)}
        >
          Favorite
        </button>
        {/* <button className="ml-4 bg-blue-500 text-white rounded px-4 py-2" onClick={() => handleFavoritebutton(recipe.favorite)}>
          Favorite
        </button> */}
      </div>
    </div>
  );
};

export default RecipeCard;
