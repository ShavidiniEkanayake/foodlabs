import React from "react";
import { useNavigate } from "react-router";
import BurgerImage from "../Assets/BurgerImage.svg";
import EasyToOrder from "../Assets/EasyToOrder.png";
import BestQuality from "../Assets/BestQuality.png";
import Food from "../Assets/Food.svg";
import FavouritIcon from "../Assets/FavouritIcon.svg";
import FasterDelivery from "../Assets/FasterDelivery.png";
import FoodData from "../Data/FoodData";
import Header from "../Components/Header";
import "../Assets/Styles/Landing.css"; // Import the CSS file for animations

const FirstElement = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-4">
      <div className="flex flex-row items-center px-36">
        <div className="flex flex-col" aos="fade-right">
          <p className="text-black font-inter font-bold text-6xl pb-4 fade-in">
            Your Favorite
          </p>
          <p className="pb-4 fade-in">
            <span className="text-black font-inter font-extrabold text-6xl">
              Food Delivered
            </span>
            <span className="text-[#C40000] font-inter font-extrabold text-6xl">
              {" "}
              Hot &
            </span>
          </p>
          <p className="text-[#C40000] font-inter font-extrabold text-6xl pb-8 fade-in">
            Delicious
          </p>
          <p className="text-black font-inter font-normal text-1xl pb-8 fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
          </p>
          <button
            onClick={() => navigate("/login")}
            className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#C40000] text-white rounded-3xl h-11 w-fit px-8 py-1 font-inter font-semibold fade-in"
          >
            Order Now
          </button>
        </div>
        <img src={BurgerImage} alt="Logo" className="h-[40rem] fade-in" />
      </div>
    </div>
  );
};

const SecondElement = () => {
  return (
    <div className="flex flex-row items-center justify-center px-36 mt-20 mx-48">
      <div className="flex flex-col items-center">
        <img src={EasyToOrder} alt="Logo" className="h-[8rem] fade-in" />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Easy To Order
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-4 text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="flex flex-col items-center ml-8">
        <img src={FasterDelivery} alt="Logo" className="h-[8rem] fade-in" />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Easy To Order
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-4 text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="flex flex-col items-center ml-8">
        <img src={BestQuality} alt="Logo" className="h-[8rem] fade-in" />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Easy To Order
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-4 text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
    </div>
  );
};

const ThirdElement = () => {
    return (
      <div>
        <div className="flex flex-row items-center justify-center px-36 mt-20 mx-48">
          <p className="text-black font-inter font-bold text-6xl mt-4">
            Our Special Dishes
          </p>
        </div>
        <div className="flex flex-row items-start justify-between px-36 my-4">
          {FoodData.slice(0, 4).map((dish, index) => (
            <div
              className="bg-[#ECECEC] rounded-xl shadow-lg p-3 relative mb-5 w-1/4 mx-5"
              key={index}
            >
              <img src={Food} alt="Special Dish" className="rounded-lg mb-4" />
              <div className="absolute top-1 right-0">
                <img src={FavouritIcon} alt="Favorite" className="w-12 h-12" />
              </div>
              <p className="text-black font-inter font-bold text-[1.5rem]">
                {dish.name}
              </p>
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center">
                  <p className="text-black font-inter font-bold text-[1.5rem] mt-4">
                    {dish.price}
                  </p>
                </div>
              </div>
              <button
                className="absolute bottom-3 right-3 bg-[#C40000] font-inter font-semibold text-white rounded-full px-4 py-2 text-sm"
                onClick={() => {
                  // Add to cart logic here
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

function Landing() {
  return (
    <div>
      <Header />
      <FirstElement />
      <SecondElement />
      <ThirdElement />
    </div>
  );
}

export default Landing;
