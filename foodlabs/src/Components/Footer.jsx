import React from "react";
import { useNavigate } from "react-router";
import FooterLine1 from "../Assets/FooterLine1.svg";
import LogoLightPng from "../Assets/LogoLanding.svg";
import FooterFBIcon from "../Assets/FooterFBIcon.svg";
import FooterTwitter from "../Assets/FooterTwitter.svg";
import FooterInstar from "../Assets/FooterInstar.svg";
import FooterPayPal from "../Assets/FooterPayPal.svg";
import FooterVisa from "../Assets/FooterVisa.svg";
import FooterMaster from "../Assets/FooterMaster.svg";

const Footer = () => {
  return (
    <div className="px-28 mt-10">
        <div className="px-14">
            <div className="w-full h-[1px] bg-[#DFDFDF]"></div>
        </div>
      
      <div className="flex flex-row content-between pt-10 pb-10">
        <div className="flex flex-col pl-14 mr-48">
          <div>
            <img src={LogoLightPng} alt="Logo" className="h-6 mr-7" />
          </div>
          <p className="mt-5 text-sm w-72 font-inter">
            Food Ordering Website. Inspirational designs, illustrations, and
            graphic add elements from the
          </p>
          <div className="flex flex-row mt-5">
            <img src={FooterFBIcon} alt="facebook" className="mr-4 w-7 " />
            <img src={FooterTwitter} alt="twitter" className="mr-4 w-7" />
            <img src={FooterInstar} alt="Instar" className="mr-4 w-7" />
          </div>
        </div>
        <div className="flex flex-col mr-16">
          <div>
            <h4 className="font-bold">Our Menu</h4>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li>Spesial</li>
              <li className="mt-4">Popular</li>
              <li className="mt-4">Categories</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mr-16 ml-16">
          <div>
            <h4 className="font-bold">Useful Links</h4>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li>Payment & Tax</li>
              <li className="mt-4">Terms Of Service</li>
              <li className="mt-4">Privacy Policy</li>
              <li className="mt-4">About Us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mr-16 ml-16">
          <div>
            <h4 className="font-bold">Get In Touch</h4>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li>hellofoodlabs@gmail.com</li>
              <li className="mt-4">Colombo,Sri Lanka</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" px-14">
        <div className="w-full h-[1px] bg-[#DFDFDF]"></div>
      </div>

      <div className="flex flex-row px-14">
        <p className="text-sm mt-4 mb-7">Copyright © 2023 -FoodLabs - All Rights Reserved.</p>
        <div className="flex flex-row ml-[46rem]">
          <img src={FooterPayPal} alt="facebook" className="mr-4 " />
          <img src={FooterVisa} alt="facebook" className="mr-4 w-10" />
          <img src={FooterMaster} alt="facebook" className="mr-4 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
