import { FaPaperPlane } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";


const ContactForm = () => {

  // const addContactMsg = async(formData: FormData)=>{
  //   "use server";

  //   await prisma.msg.create({
  //     data: {
  //       firstname: formData.get("firstname") as string,
  //       lastname: formData.get("lastname") as string,
  //       email: formData.get("email") as string,
  //       subject: formData.get("subject") as string,
  //       message: formData.get("message") as string,
  //     },
  //   })
  // }

  return (
    <div
      id="form"
      className="border border-gray-300 rounded-md p-3 sm:p-5 w-full sm:w-1/2 bg-gray-100 shadow-xl/20"
    >
      <div className="flex items-center justify-center gap-2 py-5 text-2xl font-semibold text-gray-800/70">
        <FaRegMessage/>
        <h2>Send us a Message</h2>
      </div>
      <form>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full lg:w-2/4">
            <label htmlFor="firstname" className="text-gray-600 ">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              className="bg-gray-50 focus:outline-0 focus:border-gray-800 focus:bg-white border border-gray-300 rounded py-1 pl-2"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full lg:w-2/4">
            <label htmlFor="lastname" className="text-gray-600 ">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              className="bg-gray-50 focus:outline-0 focus:border-gray-800 focus:bg-white border border-gray-300 rounded py-1 pl-2"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full">
          <label htmlFor="email" className="text-gray-600 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 focus:outline-0 focus:border-gray-800 focus:bg-white border border-gray-300 rounded py-1 pl-2"
            placeholder="john@example.com"
          />
        </div>
        <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full">
          <label htmlFor="subject" className="text-gray-600 ">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="bg-gray-50 focus:outline-0 focus:border-gray-800 focus:bg-white border border-gray-300 rounded py-1 pl-2"
            placeholder="How can we help you?"
          />
        </div>
        <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full">
          <label htmlFor="subject" className="text-gray-600 ">
            Message
          </label>
          <textarea
            name="message"
            rows={3}
            className="bg-gray-50 focus:outline-0 focus:border-gray-800 focus:bg-white border border-gray-300 rounded py-1 pl-2"
            placeholder="Tell us more about your inquiry..."
          />
        </div>
        <div className="flex flex-col flex-wrap gap-y-2 my-2 w-full">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-2 bg-gradient-to-b from-purple-600 to-purple-400 hover:to-purple-700 focus:outline-0 rounded-md text-gray-50 mt-4"
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
