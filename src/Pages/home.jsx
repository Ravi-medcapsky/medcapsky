import Card from "../component/card.jsx";
import Hospitals from "../component/hospitals.jsx";

// import PhoneBn from '../component/phone_bn.jsx'
import CareSol from "../component/care_sol";
import Sliders from "../component/slider";
import HomeSlider from "../component/home_slider.jsx";
import Footer from "../component/footer";
import PhoneBnUpdated from "../component/phone_bn_updated.jsx";
import Team from "../assets/our_team.png";

function Home() {
  return (
    <>
      <div className="pt-20 bg-gray-50">
        <h1 className="text-center py-3 text-3xl md:text-2xl font-bold">
          Trusted by Families in India
        </h1>
        <HomeSlider />
        <Hospitals />
        <Card />
        <PhoneBnUpdated />
        <CareSol />
        <h1 className="text-center text-xl md:text-3xl py-8 font-semibold">
          What Our Patients Say
        </h1>
        <Sliders />
        <h1 className="text-center text-xl md:text-3xl py-8 font-semibold">
          Our Team
        </h1>
        <img
          src={Team}
          alt="Our Team"
          className="mx-auto my-1 w-full md:w-[100%] h-auto"
        />
      </div>
    </>
  );
}
export default Home;
