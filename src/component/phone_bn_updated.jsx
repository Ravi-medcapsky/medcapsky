import BookBtn from '../component/book_btn';
import Group_25 from '../assets/down_GoMed.png';
import Group_51 from "../assets/at_home.png";
import Group_50 from '../assets/schedule_up.png';

function PhoneBnUpdated() {
  return (
    <>
      <div className="md:bg-gray-50 flex flex-col gap-16 items-center justify-center min-h-screen md:p-6 font-[Inter]">

        {/* 1️⃣ First Banner */}
        <div className="flex flex-col items-center w-full md:flex-row md:justify-around md:p-8">
          
          {/* Left Section */}
          <div className="flex flex-col md:max-w-[45%] md:items-center gap-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold">
                1. Download and Open{" "}
                <span className="text-blue-500">GoMedGo</span> App
              </h1>
              <img src={Group_25} alt="Phone" className="w-[60%] md:hidden mt-4" />
            </div>

            <p className="text-center text-sm md:text-lg px-4 md:px-0">
              GoMedGo by MedCapSky revolutionizes at-home healthcare service
              with seamless paramedical recruitment, upskilling, and digital
              solutions. Our app connects skilled professionals to hospitals,
              clinics, and homes—ensuring efficient workforce management and
              better patient care.
            </p>

            <BookBtn name="Download Now" />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex md:max-w-[30%]">
            <img src={Group_25} alt="Phone" className="w-full object-cover" />
          </div>
        </div>

        {/* 2️⃣ Second Banner */}
        <div className="flex flex-col items-center w-full md:flex-row md:justify-around md:p-8">
          
          {/* Right Section (image first on desktop) */}
          <div className="hidden md:flex md:max-w-[30%]">
            <img src={Group_51} alt="Service" className="w-full object-cover" />
          </div>

          {/* Left Section */}
          <div className="flex flex-col md:max-w-[45%] md:items-center gap-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold">
                2. Select <span className="text-blue-500">At Home</span> Service
              </h1>
              <img src={Group_51} alt="Service" className="w-[60%] md:hidden mt-6" />
            </div>

            <p className="text-center text-sm md:text-lg px-4 md:px-0">
              Choose a dedicated caretaker to ensure the patient receives
              personalized and loving care at home. Our trained professionals
              support feeding, hygiene, sleep routines, and comfort—with full
              compassion and safety.
            </p>

            <BookBtn name="Select Service" />
          </div>
        </div>

        {/* 3️⃣ Third Banner */}
        <div className="flex flex-col items-center w-full md:flex-row md:justify-around md:p-8">

          {/* Left Section */}
          <div className="flex flex-col md:max-w-[45%] md:items-center gap-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold">
                3. Personalized{" "}
                <span className="text-blue-500">Appointment Scheduling</span>
              </h1>
              <img src={Group_50} alt="Schedule" className="w-[60%] md:hidden mt-6" />
            </div>

            <p className="text-center text-sm md:text-lg px-4 md:px-0">
              Get expert care for infants or elderly at preferred timings.
              From feeding and hygiene to comfort and mobility support, our
              caregivers ensure gentle and reliable assistance tailored to
              the patient’s needs.
            </p>

            <BookBtn name="Schedule Caretaker" />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex md:max-w-[30%]">
            <img src={Group_50} alt="Schedule" className="w-full object-cover" />
          </div>
        </div>

      </div>
    </>
  );
}

export default PhoneBnUpdated;
