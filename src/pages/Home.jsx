import ClientLogos from '../components/ClientLogos';
import Work from '../components/Work';
import Tooling from '../components/Tooling';
import Testimonial from '../components/Testimonial';
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:pl-[270px] md:mt-20 xl:mt-0 w-full">
          <HomeContent />
          <div className="relative border-b custom_border w-full"></div>
          <ClientLogos />
          <div className="relative border-b custom_border w-full"></div>
          <Tooling />
          <div className="relative border-b custom_border w-full"></div>
          <Work />
          <div className="relative border-b custom_border w-full"></div>
          <Testimonial />
          <div className="relative border-b custom_border w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
