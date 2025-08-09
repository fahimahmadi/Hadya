const Subscribe = () => {
  return (
    <section id="subscribe" className="popular bg-gray-800 p-10 flex flex-col items-center">
      <div className="py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center text-white/80">
          Stay in the Loop
        </h2>
        <p className="text-lg text-gray-100 max-w-[400px] mx-auto text-center">
          Get exclusive offers, gift ideas, and be the first to know about new
          arrivals
        </p>
      </div>
      <div id="subscrib-form" className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="p-3 w-[300px] max-w[400px] bg-transparent border-1 border-gray-400 text-gray-50 rounded-md focus:outline-0 focus:border-white"
        />
        <button className="px-5 py-3 bg-gradient-to-bl from-amber-500 to-amber-300 font-semibold text-sm rounded-md hover:text-amber-900">
          Subscribe
        </button>
      </div>
      <hr className="border-0 border-b-1 h-2  border-gray-500 w-full mt-5"/>
    </section>
  );
};

export default Subscribe;
