import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaPhone,
  FaLocationArrow,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const SecondFooter = () => {
  return (
    <main className="bg-gray-800 text-white p-6 min-w-full">
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:ml-12 md:mr-12 md:gap-x-6 mb-6">
        <section className="max-w-2xl md:ml-4">
          <div className="text-4xl mb-6 font-bold text-center md:text-start">
            MaxFit.
          </div>
          <div className="text-2xl text-gray-200 text-opacity-70 mb-6">
            A state of the art gym for only the elite of the society. A gym for
            kings and queens. A gym for royalty and nobility. We are looking
            forward to meeting you. Welcome.
          </div>
          <div className="flex justify-between mr-12 text-2xl">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </section>

        <section className="md:min-w-[150px] lg:min-w-[200px] mr-12">
          <div className="text-4xl mb-6 font-bold text-center md:pr-6 md:text-start">
            Our Links.
          </div>
          <div className="text-2xl text-gray-200 text-opacity-70">
            <div>
              <Link to="/" className="hover:text-red-700 cursor-pointer">
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" className="hover:text-red-700 cursor-pointer">
                About Us
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="hover:text-red-700 cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="md:mr-[100px]">
          <div className="text-4xl mb-6 font-bold text-center md:text-start">
            Contact Us.
          </div>
          <div className="text-2xl text-gray-200 text-opacity-70">
            <div className="flex gap-x-2 mb-4">
              <FaPhone className="text-red-700" />
              <div className="cursor-pointer">+234-916-828-7090</div>
            </div>
            <div className="flex gap-x-2 mb-4">
              <FaEnvelope className="text-red-700" />
              <div className="cursor-pointer">emmy010906@gmail.com</div>
            </div>
            <div className="flex gap-x-2">
              <FaLocationArrow className="text-red-700" />
              <div className="cursor-pointer">
                Off oba akran avenue, Ikeja, Lagos State
              </div>
            </div>
          </div>
        </section>
      </div>

      <h1 className="text-center text-2xl text-gray-200">
        {"\u00A9"} 2025 MaxFit
      </h1>
    </main>
  );
};

export default SecondFooter;
