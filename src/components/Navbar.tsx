"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import useDragger from "@/hooks/useDragger";
import fitflex from "../../public/images/fitflex.png";
import estate from "../../public/images/estate.png";
import megablog from "../../public/images/megablog.png";
import curioseek from "../../public/images/curioseek.png";

function Navbar({ className }: { className?: string }) {
  useDragger("dragger");
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      id="dragger"
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4 ">
            <ProductItem
              title="FitFlex"
              href="#"
              src={fitflex.src}
              description="Collaborated on creating FitFlex, a fitness web app offering tailored plans for maintaining fitness streaks."
            />
            <ProductItem
              title="Estate-Explorer"
              href="#"
              src={estate.src}
              description="Estate-Explorer is a real estate web app built with Express.js, React, Socket.io, Prisma, and React-Leaflet."
            />
            <ProductItem
              title="Mega Blog"
              href="#"
              src={megablog.src}
              description="MegaBlog is a React.js application featuring real-time editing capabilities, powered by AppWrite for secure backend operations."
            />
            <ProductItem
              title="Curio-seek"
              href="#"
              src={curioseek.src}
              description="It seems like you've listed various phrases or prompts that could be used in a messaging or social media app."
            />
          </div>
        </MenuItem>
        
        <MenuItem
          setActive={setActive}
          active={active}
          item="Skills"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Coding Profiles"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        >
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
