import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

const HomeLayout = ({ children }: any) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
