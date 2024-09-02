import Banner from '@/components/global/banner';
import Faqs from '@/components/global/faq';

import Footer from '@/components/global/footer';

import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
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
      <Footer />
    </div>
  );
};

export default Home;
