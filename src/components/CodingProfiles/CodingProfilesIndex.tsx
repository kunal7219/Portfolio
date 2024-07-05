"use client";

import React from "react";
import Leetcode from "./Leetcode";
import LeetcodeRating from "./LeetcodeRating";
import { GoLinkExternal } from "react-icons/go";
import Codeforces from "./Codeforces";
import CodeforcesProblemList from "./CodeforcesProblemList";

const CodingProfilesIndex: React.FC = () => {
  return (
    <section id="codingProfiles" className="px-[100px] my-[4rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-row gap-[5px]">
          <div className="mt-[15px] h-[3px] w-[1rem] bg-slate-400"></div>
          <h1 className="text-3xl font-bold text-white">Coding Profiles</h1>
          <div className="mt-[15px] h-[3px] w-[800px] bg-slate-400"></div>
        </div>
      </div>

      <div
        className="flex my-6 md:my-10 mx-[10%] flex-col"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500"
      >
        <div className="flex justify-start items-center mb-4 lg:text-2xl text-xl text-light-slate">
          LeetCode
          <a
            href="https://leetcode.com/kunal_91/"
            target="_blank"
            rel="noreferrer"
          >
            <GoLinkExternal className="lg:text-2xl text-xl hover:text-highlight transition-all text-light-slate ml-2" />
          </a>
        </div>

        <div className="flex justify-between md:flex-row flex-col">
          <Leetcode />
          <LeetcodeRating />
        </div>
      </div>

      <div
        className="flex my-6 md:my-10 mx-[10%] flex-col"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500"
      >
        <div className="flex justify-start items-center mb-4 lg:text-2xl text-xl text-light-slate">
          Codeforces
          <a
            href="https://codeforces.com/profile/kunal_91"
            target="_blank"
            rel="noreferrer"
          >
            <GoLinkExternal className="lg:text-2xl text-xl hover:text-highlight transition-all text-light-slate ml-2" />
          </a>
        </div>

        <div className="flex justify-between md:flex-row flex-col">
          <Codeforces />
          <CodeforcesProblemList />
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesIndex;
