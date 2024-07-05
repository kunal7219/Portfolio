"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const data = [
  {
    id: 1,
    name: "Leetcode",
    designation: "Knight",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
    link: "https://leetcode.com/kunal_91",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "Official Connect",
    image:
      "https://www.yashkvr.com/_next/image?url=https%3A%2F%2Fimgur.com%2FqVhGNtD.png&w=128&q=75",
    link: "https://www.linkedin.com/in/kunalsingla721",
  },
  {
    id: 3,
    name: "GitHub",
    designation: "Codes Here",
    image:
      "https://www.yashkvr.com/_next/image?url=https%3A%2F%2Fimgur.com%2FJRgbGsP.png&w=128&q=75",
    link: "https://github.com/kunal7219",
  },
  {
    id: 4,
    name: "Codeforces",
    designation: "Expert",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3521352-2944796.png",
    link: "https://codeforces.com/profile/kunal_91",
  },
];

function ContactMe() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Connect With Me
        </h2>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={data} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default ContactMe;
