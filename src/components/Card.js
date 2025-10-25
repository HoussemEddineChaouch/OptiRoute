import React from "react";

function Card({ name, value, Icon, bgColor, textColor }) {
  return (
    <div className="w-full p-4 rounded-xl bg-white border flex items-start justify-between font-poppins hover:scale-105 transition-all cursor-pointer">
      <div className="space-y-2">
        <h1 className="font-semibold text-lg">{name}</h1>
        <h2 className="opacity-70">{value}</h2>
      </div>
      <div className={`p-3 rounded-md ${bgColor} ${textColor}`}>
        <Icon fontSize={20} />
      </div>
    </div>
  );
}

export default Card;
