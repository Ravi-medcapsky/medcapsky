import Nursing from '../assets/nursing_logo.png';
import MedicalStaf from '../assets/medical_staf_logo.png';
import Elderly_logo from '../assets/Elderly_logo.png';
import physio_logo from '../assets/physio_logo.png';
import post_surgery_logo from '../assets/post_surgery_logo.png';
import logo_mobile from '../assets/logo_mobile.png';

function CareSol() {
    return (
        <>
            <h1 className="text-center text-xl md:text-3xl pt-5 font-semibold">
                Complete Medical Care Solutions
            </h1>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-6">

                {/* First Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">
                        
                        {/* Image */}
                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={Nursing} className="w-full object-contain" />
                        </div>

                        {/* Text */}
                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                Nursing Care at Home
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                Providing compassionate, professional nursing support directly to your doorstep. Whether it's post-hospital care, elderly support, or chronic illness management.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Second Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">

                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={MedicalStaf} className="w-full object-contain" />
                        </div>

                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                Medical Staffing Solutions
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                Empowering hospitals, clinics, and care centers with verified, on-demand healthcare professionals — including nurses, caretakers, and paramedics.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Third Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">

                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={Elderly_logo} className="w-full object-contain" />
                        </div>

                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                Elderly & Long-Term Care
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                Dedicated caregivers trained to provide daily support, emotional companionship, and medical supervision for seniors in their homes.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Fourth Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">

                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={physio_logo} className="w-full object-contain" />
                        </div>

                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                Physiotherapy Services
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                Licensed physiotherapists provide personalized therapy sessions at home for faster and more comfortable recovery.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Fifth Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">

                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={post_surgery_logo} className="w-full object-contain" />
                        </div>

                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                Post-Surgery Care at Home
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                Complete after-surgery care including wound dressing, medication management, mobility assistance, and more.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Sixth Card */}
                <div className="flex justify-center items-start pt-6">
                    <div className="flex justify-around items-start gap-4">

                        <div className="w-18 md:w-20 flex justify-center">
                            <img src={logo_mobile} className="w-full object-contain" />
                        </div>

                        <div className="w-[70%]">
                            <h1 className="text-md md:text-xl font-semibold text-left mb-3">
                                GoMedGo Mobile App
                            </h1>
                            <p className="text-base md:text-md text-left text-gray-600 leading-relaxed">
                                One app — book nurses, physiotherapy, medical staff, real-time support & more. Fast, secure, and easy to use.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default CareSol;
