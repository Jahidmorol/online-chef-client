import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../shared/Loading";

const RecipeCard = ({ recipe }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(true);
    toast.success("Recipe added to favorites!");
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
          onClick={handleClick}
          disabled={isFavorite}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            isFavorite ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isFavorite ? "Favorite" : "Add to favorites"}
        </button>
        <ToastContainer />
        {/* <button className="ml-4 bg-blue-500 text-white rounded px-4 py-2" onClick={() => handleFavoritebutton(recipe.favorite)}>
          Favorite
        </button> */}
      </div>
    </div>
  );
};

export default RecipeCard;
