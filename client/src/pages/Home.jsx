import React from "react";
import heroImage from "../assets/home/HomeHero.png";
import LivingRoom from "../assets/home/LivingRoom.png";
import BedRoom from "../assets/home/BedRoom.png";
import Kitchen from "../assets/home/Kitchen.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import NewArrivals from "../components/Home/NewArrivals";
import OurService from "../components/Home/OurService";
import CTA from "../components/CTA";
import SubFooter from "../components/SubFooter";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 w-full">
        <div className="relative">
          <img src={heroImage} className="w-full object-cover" alt="" />
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 rounded-full bg-white p-2 cursor-pointer">
            <FaArrowLeft className="text-xl sm:text-2xl" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 rounded-full bg-white p-2 cursor-pointer">
            <FaArrowRight className="text-xl sm:text-2xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full my-8">
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold w-full md:w-[16ch]">
            Simply Unique/ Simply Better.
          </div>
          <div className="text-textSecondary w-full md:w-[50ch] text-xs sm:text-sm text-center md:text-left">
            <span className="font-semibold text-textPrimary">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col bg-background p-6 md:p-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Living Room</h3>
              <div className="border-b border-black w-fit">
                <p className="text-xs sm:text-sm text-textSecondary flex items-center gap-1">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
            <img src={LivingRoom} className="w-full object-cover mt-4" alt="" />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 relative w-full flex bg-background p-6 md:p-12">
              <div className="absolute bottom-6 md:bottom-12 flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Bedroom</h3>
                <div className="border-b border-black w-fit">
                  <p className="text-xs sm:text-sm text-textSecondary flex items-center gap-1">
                    Shop Now <GoArrowRight />
                  </p>
                </div>
              </div>
              <img src={BedRoom} className="w-full object-cover" alt="" />
            </div>

            <div className="flex-1 relative w-full flex bg-background p-6 md:p-12">
              <div className="absolute bottom-6 md:bottom-12 flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Kitchen</h3>
                <div className="border-b border-black w-fit">
                  <p className="text-xs sm:text-sm text-textSecondary flex items-center gap-1">
                    Shop Now <GoArrowRight />
                  </p>
                </div>
              </div>
              <img src={Kitchen} className="w-full object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* New Arrival section */}
        <NewArrivals title="New Arrivals" />
        {/* Our Service section */}
        <OurService />
      </div>
      {/* CTA section */}
      <CTA />
      {/* Sub Footer section */}
      <SubFooter />
    </div>
  );
}
