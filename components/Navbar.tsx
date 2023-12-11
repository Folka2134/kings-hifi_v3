import React from "react";
import Image from "next/image";
import NavContent from "./NavContent";
import NavSocials from "./NavSocials";

const Navbar = () => {
  return (
    <div className="flex h-16 items-center justify-evenly bg-secondary">
      <Image src="" alt="Logo" height={50} width={50} />
      <NavContent />
      {/* <NavSocials /> */}
    </div>
  );
};

export default Navbar;
