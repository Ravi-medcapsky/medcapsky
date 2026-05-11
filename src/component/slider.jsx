import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Female from "../assets/female_user_image-removebg-previewf.png";
import Male from "../assets/male_user_image-remove-1.png";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="md:w-[80%] mx-5 md:mx-auto bg-gray-100 p-5 md:p-8 rounded-lg shadow-lg">
      <Slider {...settings}>
        {data.map((d, i) => (
          <div
            key={i}
            className="flex justify-center items-center py-6 px-2"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full">

              {/* IMAGE + NAME */}
              <div className="flex flex-col items-center md:items-center w-full md:w-[40%]">
                <img
                  src={d.img}
                  className="w-24 h-24 md:w-40 md:h-40 object-contain mb-2"
                />
                <div className="hidden md:block text-lg font-medium text-gray-700 text-center">
                  {d.name}
                </div>
              </div>

              {/* REVIEW TEXT */}
              <div className="w-full md:w-[60%] text-gray-700 text-sm md:text-lg mt-4 md:mt-0 leading-relaxed text-center md:text-left">
                {d.review}

                <div className="md:hidden mt-3 font-medium text-gray-700">
                  {d.name}
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: `— Ujjawal Gupta, Patient, Noida`,
    img: Male,
    review: `After my surgery, I needed regular nursing and physiotherapy support at home. I found Medcapsky (GoMedGo) online and decided to try it. The platform was easy to use, and within hours, I was connected with a qualified nurse and physiotherapist. Their care helped me recover much faster than expected.`,
  },
  {
    name: `— Bhanu, Son of Patient, Noida`,
    img: Male,
    review: `We booked a nurse and physiotherapist from Medcapsky (GoMedGo) for my father after ICU discharge. Most staff were well-trained, compassionate, and supportive. The team stayed responsive throughout and helped reduce so much stress.`,
  },
  {
    name: `— Sweta Yadav, Critical Care Nurse, Gr. Noida`,
    img: Female,
    review: `Working with Medcapsky (GoMedGo) has given me flexibility and stability. I choose shifts and locations as per my availability, while the platform ensures timely payments and connects me directly with patients.`,
  },
  {
    name: `— Dr. Rohit (MPT), Physiotherapist, Delhi NCR`,
    img: Male,
    review: `I joined Medcapsky (GoMedGo) to expand my physiotherapy practice. The platform handles appointments, payments, and patient coordination, so I can focus on therapy and recovery.`,
  },
];

export default Sliders;
