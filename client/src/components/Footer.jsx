import React from "react";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className="px-4 md:px-40 py-12">
        <div className="py-12 flex w-full justify-between border-b border-textSecondary">
          <div className="flex items-center gap-8">
            <div className="text-2xl">3legant.</div>
            <span className="text-3xl font-light text-textSecondary">|</span>
            <div className="font-light">Gift and Decoration store</div>
          </div>
          <div className="flex gap-10 text-sm font-light text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-medium text-white" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "font-medium text-white" : ""
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "font-medium text-white" : ""
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "font-medium text-white" : ""
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-medium text-white" : ""
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex gap-8 text-sm">
            <p className="font-light">Copyright © 2023 3legant. All rights Reserved</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms and Use</p>
          </div>
          <div className="flex gap-8 text-2xl">
            <a href="https://instagram.com" aria-label="Follow us on Instagram">
              <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com" aria-label="Follow us on Facebook">
              <SlSocialFacebook className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://youtube.com" aria-label="Follow us on YouTube">
              <AiOutlineYoutube className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
