import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import icon from "../assets/mapicon.png";
import Card from "./Card";
// import { motion } from "motion/react";

import Layout from "./Layout";

gsap.registerPlugin(TextPlugin);

function Header() {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Welcome to OptiRoutes!",
      "Plan Faster Routes!",
      "Save Time & Fuel!",
    ];
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    texts.forEach((t) => {
      tl.to(textRef.current, { duration: 2, text: t, ease: "power1.inOut" });
    });
  }, []);

  return (
    <>
      <div className="conatiner mx-auto w-[97vw] h-[30vh] mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center">
        <div className="w-full text-xl md:w-1/2 px-4 font-poppins space-y-3 text-white">
          <h1 ref={textRef} className="font-bold md:text-xl">
            {""}
          </h1>

          <p className="text-sm text-justify md:leading-7 opacity-80">
            OptiRoute is a React-based web app that allows users to create
            graphs, assign edge weights, and solve the Traveling Salesman
            Problem (TSP) using a brute-force algorithm. It provides an
            interactive graph canvas powered by ReactFlow and a step-by-step
            solution display with detailed path costs.
          </p>
        </div>
      </div>
      <Layout />
    </>
  );
}

export default Header;
