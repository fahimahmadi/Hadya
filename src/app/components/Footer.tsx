import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pb-5 ">
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col gap-y-3 px-5">
          <Image
            src="/logo_.png"
            width={300}
            height={50}
            alt="application logo"
            className="mx-auto mt-5 inline-block"
          />
          <p className="text-gray-100/80 max-w-[300px] mx-auto text-sm">
            Your destination for thoughtful gifts that create lasting memories.
            We believe every occasion deserves something special.
          </p>
        </div>
        <div
          id="links"
          className="flex flex-wrap  gap-x-5 gap-y-3 sm:gap-5 justify-start sm:justify-evenly flex-1 px-6 sm:px-0"
        >
          <div
            id="col-1"
            className="text-gray-50 flex flex-col items-start gap-1 capitalize"
          >
            <h4 className="text-lg text-white font-semibold my-1">
              Quick Links
            </h4>
            <Link href="" className="hover:text-amber-300">
              For Her
            </Link>
            <Link href="" className="hover:text-amber-300">
              For Him
            </Link>
            <Link href="" className="hover:text-amber-300">
              Kids & Baby
            </Link>
            <Link href="" className="hover:text-amber-300">
              Special Occasions
            </Link>
            <Link href="" className="hover:text-amber-300">
              Gift Cards
            </Link>
            <Link href="" className="hover:text-amber-300">
              Best Sellers
            </Link>
          </div>
          <div
            id="col-2"
            className="text-gray-50 flex flex-col items-start gap-1 capitalize"
          >
            <h4 className="text-lg text-white font-semibold my-1">
              Customer Service
            </h4>
            <Link href="/contact" className="hover:text-amber-300">
              Contact Us
            </Link>
            <Link href="" className="hover:text-amber-300">
              Shipping Info
            </Link>
            <Link href="" className="hover:text-amber-300">
              Returns
            </Link>
            <Link href="" className="hover:text-amber-300">
              Size Guide
            </Link>
            <Link href="" className="hover:text-amber-300">
              Gift Wrapping
            </Link>
            <Link href="" className="hover:text-amber-300">
              FAQ
            </Link>
          </div>
          <div
            id="col-3"
            className="text-gray-50 flex flex-col items-start gap-1 capitalize"
          >
            <h4 className="text-lg text-white font-semibold my-1">
              Get in Touch
            </h4>
            <div className="flex items-center text-lg font-light gap-2">
              <FaPhone className="text-amber-400" />
              <Link href="tel:+4917655657788"className="hover:text-amber-300">+49-176-5565 7788</Link>
            </div>
            <div className="flex items-center text-lg font-light gap-2">
              <FaEnvelope className="text-amber-400" />
              <Link href="mailto:info@hadya.net" className="lowercase hover:text-amber-300">info@hadya.net</Link>
            </div>
            <div className="flex items-center text-lg font-light gap-2">
              <FaLocationPin className="text-amber-400" />
              <span className="">Düsseldorf, Germany</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-100/60 flex flex-wrap justify-between px-10 pt-5 text-sm">
        <p className="w-[300px] text-center sm:text-start">
          @2025 Hadya. All rights reserved.
        </p>
        <div className="flex gap-x-3 mx-auto sm:mx-0">
          <Link href="/policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-white">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
