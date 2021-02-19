import React from "react";
import HeroSection from "./HeroSection";
import { HomeObjOne, HomeObjThree, HomeObjTwo } from "./HomeObjData";

const HomePage = () => {
  return (
    <>
      <HeroSection {...HomeObjOne} />
      <HeroSection {...HomeObjTwo} />
      <HeroSection {...HomeObjThree} />
    </>
  );
};

export default HomePage;
