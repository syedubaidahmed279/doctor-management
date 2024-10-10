import About from '@/components/global/about';
import Banner from '@/components/global/banner';
import ChooseUs from '@/components/global/choose-us';
import Faqs from '@/components/global/faq';
import Onboard from '@/components/global/onboard';
import Testimonials from '@/components/global/testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ChooseUs />
      <Onboard />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Home;
