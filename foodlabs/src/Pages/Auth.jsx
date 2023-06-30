import React from "react";
import { useNavigate } from "react-router";
import LogoLightPng from "../Assets/LogoLanding.svg";
import BugerIcon from "../Assets/BurgerIcon.svg";
import GoogleIcon from "../Assets/GoogleIcon.svg";
import AppleIcon from "../Assets/AppleIcon.svg";
import FacebookIcon from "../Assets/FacebookIcon.svg";
import Or from "../Assets/Or.svg";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-8">
      <div className="flex flex-row items-center px-28">
        <img src={BugerIcon} className="h-6 px-8" />
        <img src={LogoLightPng} className="h-6 mr-7" />
      </div>
      <div className="flex flex-row items-center justify-center mt-14">
        <div className="bg-[#ffffff] p-3 relative mb-5 w-[28rem]">
          <p className="font-inter font-medium text-3xl mb-1">
            What’s your Phone Number or email?
          </p>
          <input
            type="text"
            placeholder="Enter Phone Number Or Email"
            className="mt-4 p-2 rounded-md bg-[#E8E8E8] w-full font-inter font-medium h-12 placeholder-[#7A7A7A] mb-3"
          />
          <button className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#C40000] text-white rounded-md h-11 w-full px-8 py-1 font-inter font-semibold mb-2">
            Continue
          </button>
          <div className="flex flex-row items-center justify-center mb-4 mt-1">
            <img src={Or} className="inline-block h-[1.6rem]" />
          </div>

          <button className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#E8E8E8] text-[#7A7A7A] font-inter font-medium rounded-md h-11 w-full px-8 py-1 mb-3">
            <img src={GoogleIcon} className="inline-block h-6 mr-3" />
            Continue With Google
          </button>
          <button className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#E8E8E8] text-[#7A7A7A] font-inter font-medium rounded-md h-11 w-full px-8 py-1 mb-3">
            <img src={AppleIcon} className="inline-block h-6 mr-3" />
            Continue With Apple
          </button>
          <button className="transition hover:-translate-y hover:red duration-200 ease-in-out bg-[#E8E8E8] text-[#7A7A7A] font-inter font-medium rounded-md h-11 w-full px-8 py-1 mb-4">
            <img src={FacebookIcon} className="inline-block h-6 mr-3" />
            Continue With Facebook
          </button>
          <p className="font-inter font-normal text-xs">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Us and its affiliates to the
            number provided. This site is protected by Re-captcha and the Google
            Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};
function Auth() {
  return (
    <div>
      <Content />
    </div>
  );
}

export default Auth;
