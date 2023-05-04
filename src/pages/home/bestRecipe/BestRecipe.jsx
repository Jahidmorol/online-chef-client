import React from "react";
import images1 from "../../../assets/gallery1.png";
import images2 from "../../../assets/gallery2.png";
import images3 from "../../../assets/gallery3.png";
import images4 from "../../../assets/gallery4.png";
import images5 from "../../../assets/gallery5.png";
import images6 from "../../../assets/gallery6.png";

const BestRecipe = () => {
  return (
    <div className="my-container mb-10">
      <h1 className=" text-center text-4xl md:text-5xl mb-7  font-bold">
        Our Best Chef Recipes
      </h1>
      <div className="   grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5 text-center">
            Beef Wellington
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:skew-y-3 md:transform-none hover:delay-200"
            src={images1}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5 text-center">
            Scrambled Eggs
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:skew-y-3 md:transform-none hover:delay-200"
            src={images2}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5 text-center">
            Lobster Risotto
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:skew-y-3 md:transform-none hover:delay-200"
            src={images3}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5 text-center">
            Macaroni and Cheese
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:skew-y-3 md:transform-none hover:delay-200"
            src={images4}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5 text-center">
            Spaghetti Carbonara
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:-skew-y-3 md:transform-none hover:delay-200"
            src={images5}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-yellow-600 text-2xl font-semibold mb-5">
            Hot and cold dring
          </h1>
          <img
            className="rounded-xl hover:transition-transform hover:translate-x-4 hover:skew-y-3 md:transform-none hover:delay-200"
            src={images6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BestRecipe;
