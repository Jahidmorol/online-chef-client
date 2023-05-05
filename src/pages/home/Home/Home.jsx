import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import shef from "../../../assets/20230504_024040.png";
import Loading from "../../shared/Loading";
import Chefs from "../chefs/Chefs";
import orange from "../../../assets/orange-logo.png";
import lime from "../../../assets/lime-logo.png";
import BestRecipe from "../bestRecipe/BestRecipe";
import AboutMe from "../aboutMe/AboutMe";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const chefs = useLoaderData();
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="mt-5 rounded-xl flex flex-col justify-center md:flex-row items-center">
            {/* <img src={shef} className="w-4/5 md:w-6/12 " alt="" /> */}
            <LazyLoadImage
              alt={'chef'}
              height={""}
              src={shef}
              width={""}
              className="w-5/6 md:w-6/12"
            />
            <div>
              <h2 className="text-4xl text-center  md:text-6xl md:leading-tight text-gray-800 md:text-right font-bold lg:mr-40">
                Fun and Essy to Become Cooking{" "}
                <span className="text-yellow-600">Mistario</span>
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-3xl text-yellow-600 btn-circle">
              ❮
            </a>
            <a href="#slide2" className="text-3xl text-yellow-600 btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="mt-5 rounded-xl flex flex-col justify-center md:flex-row items-center">
            {/* <img src={orange} className="w-4/5 md:w-6/12 " alt="" /> */}
            <LazyLoadImage
              alt={'chef'}
              height={""}
              src={orange}
              width={""}
              className="w-4/5 md:w-6/12"
            />
            <div>
              <h2 className="text-4xl text-center  md:text-6xl md:leading-tight text-gray-800 md:text-right font-bold lg:mr-40">
                Fun and Essy to Become Cooking{" "}
                <span className="text-rose-500">Mistario</span>
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-3xl text-rose-500">
              ❮
            </a>
            <a href="#slide3" className="text-3xl text-rose-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="mt-5 rounded-xl flex flex-col justify-center md:flex-row items-center">
            {/* <img src={lime} className="w-4/5 md:w-6/12 " alt="" /> */}
            <LazyLoadImage
              alt={'chef'}
              height={""}
              src={lime}
              width={""}
              className="w-4/5 md:w-6/12"
            />
            <div>
              <h2 className="text-4xl text-center  md:text-6xl md:leading-tight text-gray-800 md:text-right font-bold lg:mr-40">
                Fun and Essy to Become Cooking{" "}
                <span className="text-lime-700">Mistario</span>
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-3xl text-lime-700">
              ❮
            </a>
            <a href="#slide4" className="text-3xl text-lime-700">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Chefs chefs={chefs}> </Chefs>
      <AboutMe></AboutMe>
      <BestRecipe></BestRecipe>
    </div>
  );
};

export default Home;
