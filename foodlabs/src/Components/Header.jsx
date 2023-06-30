import React from "react";
import { useNavigate } from "react-router";
import LogoLightPng from "../Assets/LogoLanding.svg";
import BugerIcon from "../Assets/BurgerIcon.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="pt-8">
      <div className="flex flex-row items-center px-28">
        <img src={BugerIcon} className="h-6 px-8" />
        <img src={LogoLightPng} className="h-6 mr-7" />
        <div className="flex-grow" />{" "}
        <div className="flex">
          <div className="mr-4">
            <button
              onClick={() => navigate("/auth")}
              className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#D9D9D9] text-black rounded-md h-10 w-fit px-8 py-1 font-inter font-semibold"
            >
              SignUp
            </button>
          </div>
          <div className="mr-4">
            <button
              onClick={() => navigate("/auth")}
              className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#C40000] text-white rounded-md h-10 w-fit px-8 py-1 font-inter font-semibold"
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
