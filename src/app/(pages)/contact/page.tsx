import Footer from "@/app/components/Footer";
import ContactForm from "./form";
import ContactInfo from "./info";
import Subscribe from "../home/Subscribe";

const ContactPage = () => {
  return (
    <div id="contact-page" className="flex-1 bg-gray-50">
      <div className="text-center py-12">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">
          Get in Touch
        </h1>
        <p className="text-gray-800/70 text-sm sm:text-lg w-4/5 mx-auto">
          Have a question about our gifts or need help with your order?
        </p>
        <p className="text-amber-800/70 text-sm sm:text-lg font-semibold mt-6">
          We are here to help!
        </p>
      </div>

      <div className="bg-white p-5 py-16 flex flex-wrap gap-5 justify-evenly">
        <ContactForm />
        <ContactInfo />
      </div>
        <Subscribe/>
        <Footer />
    </div>
  );
};

export default ContactPage;
