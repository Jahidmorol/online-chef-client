import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import shef from "../../../assets/shef.png";
import Loading from "../../shared/Loading";
import Chefs from "../chefs/Chefs";
import myBackgroundImage from "../../../assets/foodbg-1.jpg";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const chefs = useLoaderData();
  return (
    <div>
      <div
        className="mt-5 my-container rounded-xl flex items-center justify-end "
        style={{
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* <img src={shef} className="w-100 md:w-6/12" alt="" /> */}
        <div>
          <h2 className="text-7xl leading-tight text-white text-right max-w-2xl mr-14 font-bold">
            Fun and Essy to Become Cooking <span className="text-gray-800">Mistario</span>
          </h2>
        </div>
      </div>
      <Chefs chefs={chefs}> </Chefs>
    </div>
  );
};

export default Home;
