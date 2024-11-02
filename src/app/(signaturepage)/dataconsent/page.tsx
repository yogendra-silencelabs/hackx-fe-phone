'use client';
import React from "react";
import Image from "next/image";
import Top from "@/public/Top app bar.svg";
import Logo from "@/public/signaturepage1.svg";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const handleProceed = () => {
    router.push("/privacypreference");
  }
  return (
    <div>
      <div className=" m-4 ">
        <div className="text-[#171d1e] text-[28px] font-semibold leading-9 mb-4">
          Data consent
        </div>
        <div className="text-[#454745] text-base font-normal leading-normal tracking-wide">
          In order to offer you the loan and benefits in the Quick Loan
          dashboard, Quick Loan Limited needs your approval to access the
          following information from your financial accounts through the account
          aggregator
        </div>
      </div>
      <div className="w-[393px] h-[53px] px-8 py-2 bg-[#d0ff66] justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal leading-tight tracking-tight">
            Secure data sharing powered by{" "}
          </span>
          <span className="text-black text-sm font-bold leading-tight tracking-tight">
            Silent Compute
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center py-4">
        <div className="text-black text-xl font-normal leading-tight tracking-tight">
          Select Accounts to share
        </div>
        <Image src={Logo} alt="" />
      </div>
      <div className="px-4 mt-4">
      <div className="flex flex-col items-center gap-8">
      <div className="space-y-4">
        <h2 className="text-lg text-gray-700">Your code</h2>
        
        <div className="flex gap-2">
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">2</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">5</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">4</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">4</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">4</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-lg">4</span>
          </div>
        </div>

        <a href="#" className="block text-center text-blue-600 hover:underline">
          Didn't receive a code?
        </a>
      </div>

      <button className="px-8 py-3 bg-[#7bf179] rounded-full text-black" onClick={handleProceed}>
        Proceed
      </button>
    </div>

      </div>
    </div>
  );
}

export default Page;
