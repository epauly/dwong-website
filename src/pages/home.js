import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeAboutObj,
  homeTrainingObj,
  homeSuccessObj,
  homeContactObj,
} from "../components/InfoSection/InfoSectionData";
import SuccessStories from "../components/SuccessStories/SuccessStories";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeAboutObj} />
      <InfoSection {...homeTrainingObj} />
      {/* <InfoSection {...homeSuccessObj} /> */}
      <SuccessStories />
      <InfoSection {...homeContactObj} />
    </>
  );
};

export default Home;
