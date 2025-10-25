import React from "react";

function Footer() {
  const date = new Date();
  return (
    <div className="my-4 text-[10px] md:text-xs text-center font-poppins">
      &copy; {date.getFullYear()} OptiRoute Chaouch Houssem Eddine .all rights
      reserved
    </div>
  );
}

export default Footer;
