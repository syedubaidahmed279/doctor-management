import Navbar from '@/components/global/navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
