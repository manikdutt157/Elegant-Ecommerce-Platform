import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

export default function Header() {
  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-40 py-4 flex justify-between items-center border-b-2 bg-white text-textPrimary'>
      <div className="font-medium text-lg sm:text-xl">3legant.</div>
      
      {/* Navigation links */}
      <div className=" md:flex gap-4 sm:gap-6 md:gap-10 space-x-1 text-[11px] sm:text-base text-textSecondary">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-textPrimary" : ""}>
          Home
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "font-semibold text-textPrimary" : ""}>
          Shop
        </NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? "font-semibold text-textPrimary" : ""}>
          Product
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold text-textPrimary" : ""}>
          Contact Us
        </NavLink>
      </div>

      {/* Icon buttons */}
      <div className="flex gap-2 sm:gap-4 text-lg sm:text-xl font-semibold">
        <CiSearch />
        <CiShoppingCart />
        <CiUser />
      </div>
    </div>
  );
}
