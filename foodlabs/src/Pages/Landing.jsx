import React, { useState } from "react";
import { useNavigate } from "react-router";
import BurgerImage from "../Assets/BurgerImage.svg";
import EasyToOrder from "../Assets/EasyToOrder.png";
import BestQuality from "../Assets/BestQuality.png";
import Food from "../Assets/Food.svg";
import FavouritIcon from "../Assets/FavouritIcon.svg";
import FasterDelivery from "../Assets/FasterDelivery.png";
import FoodData from "../Data/FoodData";
import OfferData from "../Data/OffersData";
import Header from "../Components/Header";
import OfferImage from "../Assets/OfferImage.svg";
import SideArrow from "../Assets/SideArrow.svg";
import "../Assets/Styles/Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

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
            onClick={() => navigate("/auth")}
            className="transition duration-200 ease-in-out bg-[#C40000] hover:bg-black text-white hover:text-white rounded-3xl h-11 w-fit px-8 py-1 font-inter font-semibold fade-in"
          >
            Order Now
          </button>
        </div>
        <img src={BurgerImage} alt="Logo" className="h-[40rem] fade-in " />
      </div>
    </div>
  );
};

const SecondElement = () => {
  return (
    <div className="flex flex-row items-center justify-center px-36 mt-20 mx-48">
      <div className="flex flex-col items-center">
        <img
          src={EasyToOrder}
          alt="Logo"
          className="h-[8rem] fade-in transition hover:-translate-y hover:scale-110 duration-200 ease-in-out"
        />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Easy To Order
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-2 text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="flex flex-col items-center ml-8">
        <img
          src={FasterDelivery}
          alt="Logo"
          className="h-[8rem] fade-in transition hover:-translate-y hover:scale-110 duration-200 ease-in-out"
        />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Faster Delivery
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-2 text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="flex flex-col items-center ml-8">
        <img
          src={BestQuality}
          alt="Logo"
          className="h-[8rem] fade-in transition hover:-translate-y hover:scale-110 duration-200 ease-in-out"
        />
        <p className="text-black font-inter font-bold text-xl mt-4">
          Best Quality
        </p>
        <p className="text-black font-inter font-normal text-1xl mt-2 text-center">
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
        <p className="text-black font-inter font-bold text-5xl mt-4 mb-10">
          Our Special Dishes
        </p>
      </div>
      <div className="flex flex-row items-start justify-between px-36 my-4">
        {FoodData.slice(0, 4).map((dish, index) => (
          <div
            className="bg-[#ECECEC] rounded-xl p-3 relative mb-5 w-1/4 mx-2"
            key={index}
          >
            <img src={Food} alt="Special Dish" className="rounded-lg mb-4" />
            <div className="absolute top-1 right-0">
              <img
                src={FavouritIcon}
                alt="Favorite"
                className="w-12 h-12 transition hover:-translate-y hover:scale-110 duration-200 ease-in-out"
              />
            </div>
            <p className="text-black font-inter font-bold text-[1.1rem]">
              {dish.name}
            </p>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <p className="text-black font-inter font-bold text-[1rem] mt-4">
                  {dish.price}
                </p>
              </div>
            </div>
            <button
              className="hover:bg-black hover:text-white absolute bottom-2 right-3 bg-[#C40000] font-inter font-semibold text-white rounded-full px-4 py-2 text-xs"
              onClick={() => {
                // Add to cart logic here
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <p className="flex flex-row items-center justify-center mt-10 font-inter font-bold text-lg transition hover:-translate-y hover:scale-110 duration-200 ease-in-out">
        Explore More
        <img
          src={SideArrow}
          alt="SideArrow"
          className="w-[0.85rem] ml-1 transition hover:-translate-y hover:scale-105 duration-200 ease-in-out"
        ></img>
      </p>
    </div>
  );
};

const FourthElement = () => {
  const [isAllClicked, setIsAllClicked] = useState(true);
  const [isBreakfastClicked, setIsBreakfastClicked] = useState(false);
  const [isLunchClicked, setIsLunchClicked] = useState(false);
  const [isDinnerClicked, setIsDinnerClicked] = useState(false);
  const [isDessertsClicked, setIsDessertsClicked] = useState(false);
  const [isBeveragesClicked, setIsBeveragesClicked] = useState(false);

  const handleAllClick = () => {
    setIsAllClicked((prevState) => !prevState);
    setIsBreakfastClicked(false);
    setIsLunchClicked(false);
    setIsDinnerClicked(false);
    setIsDessertsClicked(false);
    setIsBeveragesClicked(false);
  };

  const handleBreakfastClick = () => {
    setIsBreakfastClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsLunchClicked(false);
    setIsDinnerClicked(false);
    setIsDessertsClicked(false);
    setIsBeveragesClicked(false);
  };

  const handleLunchClick = () => {
    setIsLunchClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsBreakfastClicked(false);
    setIsDinnerClicked(false);
    setIsDessertsClicked(false);
    setIsBeveragesClicked(false);
  };

  const handleDinnerClick = () => {
    setIsDinnerClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsBreakfastClicked(false);
    setIsLunchClicked(false);
    setIsDessertsClicked(false);
    setIsBeveragesClicked(false);
  };

  const handleDessertsClick = () => {
    setIsDessertsClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsBreakfastClicked(false);
    setIsLunchClicked(false);
    setIsDinnerClicked(false);
    setIsBeveragesClicked(false);
  };

  const handleBeveragesClick = () => {
    setIsBeveragesClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsBreakfastClicked(false);
    setIsLunchClicked(false);
    setIsDinnerClicked(false);
    setIsDessertsClicked(false);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center px-36 mt-10 mx-48">
        <p className="text-black font-inter font-bold text-5xl mt-4 mb-16">
          Popular Menu
        </p>
      </div>
      <div className="px-40 mb-8">
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isAllClicked
            ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
            : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleAllClick}
        >
          All
        </button>
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isBreakfastClicked
              ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
              : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleBreakfastClick}
        >
          Breakfast
        </button>
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isLunchClicked
            ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
            : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleLunchClick}
        >
          Lunch
        </button>
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isDinnerClicked
            ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
            : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleDinnerClick}
        >
          Dinner
        </button>
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isDessertsClicked
            ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
            : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleDessertsClick}
        >
          Desserts
        </button>
        <button
          className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
            isBeveragesClicked
            ? "bg-[#C40000] text-white hover:bg-black hover:text-white"
            : "text-black border-[#C40000] border-2"
          } mr-5`}
          onClick={handleBeveragesClick}
        >
          Beverages
        </button>
      </div>
      <div className="flex flex-row items-start justify-between px-36 my-4">
        {FoodData.slice(0, 4).map((dish, index) => (
          <div
            className="bg-[#ECECEC] rounded-xl p-3 relative mb-5 w-1/4 mx-2"
            key={index}
          >
            <img src={Food} alt="Special Dish" className="rounded-lg mb-4" />
            <div className="absolute top-1 right-0">
              <img
                src={FavouritIcon}
                alt="Favorite"
                className="w-12 h-12 transition hover:-translate-y hover:scale-110 duration-200 ease-in-out"
              />
            </div>
            <p className="text-black font-inter font-bold text-[1.3rem]">
              {dish.name}
            </p>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <p className="text-black font-inter font-bold text-[1.3rem] mt-4">
                  {dish.price}
                </p>
              </div>
            </div>
            <button
              className="hover:bg-black hover:text-white absolute bottom-3 right-3 bg-[#C40000] font-inter font-semibold text-white rounded-full px-4 py-2 text-sm"
              onClick={() => {}}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <p className="flex flex-row items-center justify-center mt-10 font-inter font-bold text-lg transition hover:-translate-y hover:scale-105 duration-200 ease-in-out">
        Explore More
        <img
          src={SideArrow}
          alt="SideArrow"
          className="w-[0.85rem] ml-1 transition hover:-translate-y hover:scale-105 duration-200 ease-in-out"
        ></img>
      </p>
    </div>
  );
};

const FifthElement = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center px-36 mt-10 mx-48">
        <p className="text-black font-inter font-bold text-5xl mt-4 mb-10">
          Offers
        </p>
      </div>
      <div className="flex flex-row items-start justify-between px-36 my-4">
        <Swiper spaceBetween={1} slidesPerView={3}>
          {OfferData.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="bg-[#ECECEC] rounded-xl shadow-xl p-3 relative mb-5 mx-2">
                <div className="flex flex-row">
                  <img
                    src={OfferImage}
                    alt="Special Dish"
                    className="rounded-lg h-32"
                  />
                  <div className="flex flex-col ml-4 justify-center">
                    <p className="text-black font-inter font-bold text-[1.5rem]">
                      {offer.title}
                    </p>
                    <p>{offer.description}</p>
                    <p className="text-[#C40000]">{offer.code}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
      <FourthElement />
      <FifthElement />
    </div>
  );
}

export default Landing;
