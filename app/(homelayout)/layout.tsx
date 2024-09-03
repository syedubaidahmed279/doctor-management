import Navbar from "@/components/global/navbar";

const HomeLayout = ({ children }: any) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
