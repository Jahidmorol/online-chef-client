import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
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
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=740&t=st=1683136368~exp=1683136968~hmac=3fffea040695269397998f7ddb55dcc78cd4d07bca7e670b0eb0982e6b255fd9"
          className="h-52 w-full"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-600">{recipe.name}</h2>
        <h4 className=" font-bold text-yellow-600 me-5">Ingradient :</h4>
        <ul className="list-disc ml-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="text-gray-700 font-semibold list-none me-5 inline-block"
            >
              {ingredient},
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-2 font-semibold">
          <span className="font-bold text-yellow-600">Method : </span>
          {recipe.method}
        </p>
        <div className="flex items-center justify-around mt-4">
          <div>
            <Rating
              placeholderRating={recipe.rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            />
            <span className="text-gray-600 ms-2">{recipe.rating} Rating</span>
          </div>
          <button
            onClick={handleClick}
            disabled={isFavorite}
            className={`px-4 py-2 bg-inherit border border-yellow-600 hover:bg-yellow-600 text-black rounded-lg ${
              isFavorite ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isFavorite ? "Favorite" : "Add to favorites"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
