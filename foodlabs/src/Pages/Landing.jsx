import React from "react";
import { useNavigate } from "react-router";
import BurgerImage from "../Assets/BurgerImage.svg";
import EasyToOrder from "../Assets/EasyToOrder.svg"
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
    return(
        <div className="flex flex-row items-center px-36 mt-10">
            <img src={BurgerImage} alt="Logo" className="h-[40rem] fade-in" />
        </div>
    )
}

function Landing() {
  return (
    <div>
      <Header />
      <FirstElement />
      <SecondElement/>
    </div>
  );
}

export default Landing;
