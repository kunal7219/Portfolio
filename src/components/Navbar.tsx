"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Link as ScrollLink } from "react-scroll";
import useDragger from "@/hooks/useDragger";
import fitflex from "../../public/images/fitflex.png";
import estate from "../../public/images/estate.png";
import megablog from "../../public/images/megablog.png";
import curioseek from "../../public/images/curioseek.png";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  useDragger("dragger");
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      id="dragger"
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ScrollLink
          to="heroSection"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Home")}
        >
          <MenuItem setActive={setActive} active={active} item="Home" />
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("About")}
        >
          <MenuItem setActive={setActive} active={active} item="About" />
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Projects")}
        >
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="text-sm grid grid-cols-2 gap-10 p-4 ">
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
                description="Curio-seek is a platform for discovering new and exciting content tailored to your interests."
              />
            </div>
          </MenuItem>
        </ScrollLink>
        <ScrollLink
          to="codingProfiles"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Coding Profiles")}
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item="Coding Profiles"
          />
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Skills")}
        >
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </ScrollLink>

        <ScrollLink
          to="contactUs"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Contact Us")}
        >
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </ScrollLink>
        <ScrollLink
          to="contactMe"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Contact Me")}
        >
          <MenuItem setActive={setActive} active={active} item="Contact Me" />
        </ScrollLink>
      </Menu>
    </div>
  );
};

export default Navbar;
