import React from 'react';
import FooterImage from "../assets/Footer.png";
import { CiMail } from 'react-icons/ci';

export default function SubFooter() {
  return (
    <div className="w-full relative">
      <img
        src={FooterImage}
        className="w-full md:w-3/4 lg:w-1/2 object-cover md:h-full h-48"
        alt="Footer"
      />
      <div className="absolute top-0 flex flex-col items-center justify-center gap-4 w-full h-full p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
          Join Our Newsletter
        </h1>
        <p className="text-base sm:text-lg text-textSecondary text-center">
          Sign up for deals, new products, and promotions
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 border-b-2 bg-background px-2 py-2 sm:py-0">
          <CiMail className="text-lg text-textSecondary" />
          <input
            className="w-full sm:w-96 border-0 bg-transparent outline-none"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button className="bg-black text-white py-2 px-4 rounded-md sm:rounded-r-md text-center" aria-label="Signup for newsletter">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
