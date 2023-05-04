import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import shef from "../../../assets/20230504_024040.png";
import Loading from "../../shared/Loading";
import Chefs from "../chefs/Chefs";
// import myBackgroundImage from "../../../assets/foodbg-1.jpg";
import BestRecipe from "../bestRecipe/BestRecipe";
import ContactUs from "../contactUs/ContactUs";
import AboutMe from "../aboutMe/AboutMe";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const chefs = useLoaderData();
  return (
    <div>
      <div className="mt-5 rounded-xl flex flex-col justify-center md:flex-row items-center">
        <img src={shef} className="w-4/5 md:w-6/12 " alt="" />
        <div>
          <h2 className="text-4xl text-center  md:text-6xl md:leading-tight text-gray-800 md:text-right font-bold lg:mr-40">
            Fun and Essy to Become Cooking{" "}
            <span className="text-yellow-600">Mistario</span>
          </h2>
        </div>
      </div>
      <Chefs chefs={chefs}> </Chefs>
      <AboutMe></AboutMe>
      <BestRecipe></BestRecipe>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

// style={{
//   backgroundImage: `url(${myBackgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   height: "100vh",
// }}
