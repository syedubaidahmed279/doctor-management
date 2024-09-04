import About from "@/components/global/about";
import Banner from "@/components/global/banner";
import ChooseUs from "@/components/global/choose-us";
import Faqs from "@/components/global/faq";

import Footer from "@/components/global/footer";
import Onboard from "@/components/global/onboard";

import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ChooseUs />
      <Onboard />
      <Faqs />
      {/* <About />
      <Projects />
      <ChooseUs />
      <Onboard />
      <Technologies />
      <Employees />
      <ServiceArea />
      <Testimonials />
      <Partners />
      <Pricing />
      <Faqs /> */}
    </div>
  );
};

export default Home;
