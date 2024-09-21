import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FiLock } from "react-icons/fi";

export default function OurService() {
  return (
    <div className="my-8 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-background p-8 py-12 flex flex-col items-center gap-4 text-center">
        <CiDeliveryTruck className="text-6xl" />
        <h2 className="text-xl sm:text-2xl">Free Shipping</h2>
        <p className="text-textSecondary text-sm">Order above $200</p>
      </div>
      <div className="bg-background p-8 py-12 flex flex-col items-center gap-4 text-center">
        <LiaMoneyBillSolid className="text-6xl" />
        <h2 className="text-xl sm:text-2xl">Money-back</h2>
        <p className="text-textSecondary text-sm">30 days guarantee</p>
      </div>
      <div className="bg-background p-8 py-12 flex flex-col items-center gap-4 text-center">
        <FiLock className="text-6xl" />
        <h2 className="text-xl sm:text-2xl">Secure Payments</h2>
        <p className="text-textSecondary text-sm">Secured by Stripe</p>
      </div>
      <div className="bg-background p-8 py-12 flex flex-col items-center gap-4 text-center">
        <IoCallOutline className="text-6xl" />
        <h2 className="text-xl sm:text-2xl">24/7 Support</h2>
        <p className="text-textSecondary text-sm">Phone and Email support</p>
      </div>
    </div>
  );
}
