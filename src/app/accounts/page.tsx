// src/app/account/page.tsx
import Layout from "@/components/Layout";
import React from "react";

function AccountPage() {
  return (
    <Layout>
      <div className="w-[393px] h-[860px] relative bg-[#fcf8f8] "> {/* Added pt-8 for top padding */}
        {/* Header Section */}
        <div className="h-[200px] absolute top-0 left-0 flex flex-col justify-start items-start gap-[280px] pt-0"> {/* Added pt-4 for additional spacing */}
          <div className="h-[196px] flex flex-col justify-start items-start gap-4">
            <div className="h-[15px] flex flex-col justify-start items-start">
            </div>
            <div className="flex flex-col items-start gap-2 px-4 h-[60px]">
              <div className="w-[328px] text-[#171d1e] text-[28px] font-semibold leading-9">
                Select Accounts to share
              </div>
            </div>
          </div>
        </div>

        {/* Bank Accounts Section */}
        <div className="absolute top-[130px] left-[22px] flex items-center gap-2"> {/* Adjusted top spacing */}
          <div className="w-[20px] h-[22px] bg-gray-300 rounded-full"></div>
          <div className="text-black text-[25px] font-sem">Bank accounts</div>
        </div>

        {/* Accounts List */}
        <div className="absolute top-[300px] left-[17px] flex flex-col gap-3"> {/* Adjusted top spacing */}
          <div className="w-full h-[86px] p-4 bg-[#002203] rounded-2xl flex items-center gap-2">
            <div className="w-[21px] h-[21px] bg-gray-300 rounded-full"></div>
            <div className="flex-grow flex flex-col gap-1">
              <div className="text-[#7bf179] text-xs font-light">Chase</div>
              <div className="text-[#7bf179] text-sm font-bold">Savings Account</div>
              <div className="text-[#7bf179] text-sm font-normal">xxxxxxxxx1901</div>
            </div>
            <img
              className="w-[45px] h-11 transform rotate-180"
              src="https://via.placeholder.com/45x44"
              alt="arrow"
            />
          </div>
          <div className="w-full h-[86px] p-4 bg-[#002203] rounded-2xl flex items-center gap-3">
            <div className="w-[21px] h-[21px] bg-gray-300 rounded-full"></div>
            <div className="flex-grow flex flex-col gap-1">
              <div className="text-[#7bf179] text-xs font-light">Wells Fargo</div>
              <div className="text-[#7bf179] text-sm font-bold">Checking Account</div>
              <div className="text-[#7bf179] text-sm font-normal">xxxxxxxxx2022</div>
            </div>
            <img
              className="w-[45px] h-11"
              src="https://via.placeholder.com/45x44"
              alt="arrow"
            />
          </div>
        </div>

        {/* Investment Accounts Section */}
        <div className="absolute top-[540px] left-[20px] flex items-center gap-2"> {/* Adjusted top spacing */}
          <div className="w-[21px] h-[21px] bg-gray-300 rounded-full"></div>
          <div className="text-black text-[28px] font-semibold">
            Investment Accounts
          </div>
        </div>

        {/* Investment Account Card */}
        <div className="absolute top-[580px] left-[17px] flex flex-col gap-3"> {/* Adjusted top spacing */}
          <div className="w-full h-[86px] p-4 bg-[#002203] rounded-2xl flex items-center gap-3">
            <div className="w-[21px] h-[21px] bg-gray-300 rounded-full"></div>
            <div className="flex-grow flex flex-col gap-1">
              <div className="text-[#7bf179] text-xs font-light">Vanguard</div>
              <div className="text-[#7bf179] text-sm font-bold">Mutual Fund</div>
              <div className="text-[#7bf179] text-sm font-normal">xxxxxxxxx4222</div>
            </div>
            <img
              className="w-[45px] h-11"
              src="https://via.placeholder.com/45x44"
              alt="arrow"
            />
          </div>
        </div>

        {/* Proceed Button */}
        <div className="absolute top-[800px] left-0 flex flex-col items-center gap-8 w-full bg-white"> {/* Adjusted top spacing */}
          <div className="h-[38px] px-4 pt-3.5 text-center">
            <span className="text-[#454745] text-2xl font-bold">2</span>
            <span className="text-[#454745] text-base font-normal"> of </span>
            <span className="text-[#454745] text-2xl font-bold">3</span>
            <span className="text-[#454745] text-base font-normal"> selected</span>
          </div>
          <button className="bg-[#7bf179] rounded-full px-6 py-2.5 text-sm font-semibold text-[#102000]">
            Proceed
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[34px] flex justify-center items-center bg-white">
          <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
        </div>
      </div>
    </Layout>
  );
}

export default AccountPage;
