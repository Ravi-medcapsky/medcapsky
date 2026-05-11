import { Link } from "react-router-dom";
import logo from "../assets/MedcapLogo.png";
import fb from "../assets/facebook-f-brands-solid-full.svg";
import insta from "../assets/instagram-brands-solid-full.svg";
import linkedin from "../assets/linkedin-in-brands-solid-full.svg";
import x from "../assets/x-twitter-brands-solid-full.svg";

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-600 mt-20 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:w-[90%] mx-auto pb-6 border-b">

        {/* -------- COLUMN 1 -------- */}
        <div>
          <img src={logo} className="max-w-[12rem] mb-4" />

          <h2 className="text-lg md:text-xl font-bold mt-4">Contact Us</h2>
          <p className="text-sm md:text-lg">
            Email:
            <a href="mailto:privacy@medcapsky.com" className="text-blue-600 underline font-semibold">
              {" "}
              privacy@medcapsky.com
            </a>
          </p>

          <p className="text-sm md:text-lg">
            Phone:
            <a href="tel:+919208432221" className="text-black font-semibold">
              {" "}
              +91 9208432221
            </a>
          </p>

          <p className="text-sm md:text-lg">
            Website:
            <a href="https://www.medcapsky.com" className="text-blue-600 underline font-semibold">
              {" "}
              www.medcapsky.com
            </a>
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4">Address</h2>
          <p className="text-sm md:text-lg">
            Villa Number-7, Sanskriti Garden, Phase-2, Roza Jalalpur,
            Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201009
          </p>
        </div>

        {/* -------- COLUMN 2 -------- */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3">Legal</h2>

          <ul className="space-y-2 text-sm md:text-lg">
            <li>
              <Link to="/privacy.jsx" className="hover:text-black">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms.jsx" className="hover:text-black">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* -------- COLUMN 3 -------- */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3">About Us</h2>

          <ul className="space-y-2 text-sm md:text-lg">
            <li>
              <Link to="/" className="hover:text-black">Home</Link>
            </li>
            <li>
              <Link to="/jobSearch" className="hover:text-black">Job Search</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ------------ BOTTOM SECTION ------------ */}
      <div className="mt-4 text-center">
        <p className="text-sm md:text-lg">© 2025 MedcapSky. All Rights Reserved</p>

        <div className="flex justify-center items-center gap-4 mt-3">
          <a href="https://www.facebook.com/..." className="w-6 md:w-8">
            <img src={fb} />
          </a>
          <a href="https://www.instagram.com/medcapsky/" className="w-6 md:w-8">
            <img src={insta} />
          </a>
          <a href="https://www.linkedin.com/company/medcapsky/" className="w-6 md:w-8">
            <img src={linkedin} />
          </a>
          <a href="https://x.com/medcapsky/" className="w-6 md:w-8">
            <img src={x} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
