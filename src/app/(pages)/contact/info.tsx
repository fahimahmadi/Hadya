import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin, } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div id="info" className="px-10 py-6 border border-gray-300 bg-gray-100 rounded-md flex flex-col gap-3 min-w-[300px] sm:w-fit shadow-xl/20">
      <h2 className="font-semibold text-gray-800/70 text-xl">
        Contact Information
      </h2>
      <div id="address">
        <span className="flex items-baseline gap-4 text-gray-600">
          <FaLocationPin />
          <span className="font-semibold text-xl">Address</span>
        </span>
        <div className="ml-8 font-light">
            <p className="">Trift straße 152</p>
            <p className="">13353, Belrin</p>
            <p className="">Germany</p>
        </div>
      </div>
      <div id="phone">
        <span className="flex items-baseline gap-4 text-gray-600">
          <FaPhoneAlt />
          <span className="font-semibold text-xl">Phone</span>
        </span>
        <div className="ml-8 font-light">
            <p className="">+49 (176) 5670 7575</p>
            <p className="">+49 (176) 5670 8283</p>
            <p className="">+49 (176) 5670 1234</p>
        </div>
      </div>
      <div id="email">
        <span className="flex items-baseline gap-4 text-gray-600">
          <FaEnvelope />
          <span className="font-semibold text-xl">Email</span>
        </span>
        <div className="ml-8 font-light">
            <p className="">info@hadya.net</p>
            <p className="">marketing@hadya.net</p>
            <p className="">support@hadya.net</p>
        </div>
      </div>
      <div id="open-hours">
        <span className="flex items-baseline gap-4 text-gray-600">
          <FaClock />
          <span className="font-semibold text-xl">Business Hours</span>
        </span>
        <div className="ml-8 font-light">
            <p className="">Monday - Friday: 9:00 - 20:00</p>
            <p className="">Saturday: 10:00 - 18:00</p>
            <p className="">Sunday: 12:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
