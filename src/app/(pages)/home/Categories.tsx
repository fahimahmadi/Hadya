import { FaBaby, FaBabyCarriage, FaCalendar, FaHeart, FaUser } from "react-icons/fa";

const Categories = () => {
  return (
    <section id="categories" className="py-10 lg:py-16 bg-gray-50">
      <div className="text-center text-gray-600 my-10 lg:my-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
          Shop By Category
        </h2>
        <p className="text-lg text-gray-600 max-w-[400px] mx-auto">
          Find the perfect gift for anyone and any occasion with our curated
          collections
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
      {/* categories */}
      {/* For Her */}
        <div className="card w-full sm:w-[250px] rounded-md bg-pink-50 p-8 flex flex-col items-center gap-y-6">
          <div className="inline-block rounded-full p-3 bg-radial from-pink-300 to-pink-500">
            <FaHeart className="text-white text-2xl" />
          </div>

          <h3 className="text-xl font-bold text-center">For Her</h3>
          <p className="text-center text-orange-900/80 font-light mb-auto">
            Elegant gifts that celebrate the special women in your life
          </p>

          <button className="w-[140px] p-[8px] rounded-md text-sm font-semibold bg-gradient-to-b from-amber-600/50 to-amber-500/60 text-gray-700 hover:text-pink-700">
            Shop Now
          </button>
        </div>

      {/* For Him */}
        <div className="card w-full sm:w-[250px] rounded-md bg-blue-50 p-8 flex flex-col items-center gap-y-6">
          <div className="inline-block  rounded-full p-3 bg-radial from-blue-300 to-blue-500">
            <FaUser className="text-white text-2xl" />
          </div>

          <h3 className="text-xl font-bold text-center">For Him</h3>
          <p className="text-center text-orange-900/80 font-light mb-auto">
            Thoughtful presents for the important men in your world
          </p>

          <button className="w-[140px] p-[8px] rounded-md text-sm font-semibold bg-gradient-to-b from-amber-600/50 to-amber-500/60 text-gray-700 hover:text-pink-700">
            Shop Now
          </button>
        </div>

        {/* Kids*/}
          <div className="card w-full sm:w-[250px] rounded-md bg-green-50 p-8 flex flex-col items-center gap-y-6">
            <div className="inline-block  rounded-full p-3 bg-radial from-green-300 to-green-500">
              <FaBabyCarriage className="text-white text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-center">Kids & Baby</h3>
            <p className="text-center text-orange-900/80 font-light mb-auto">
              Delightful gifts that spark joy and imagination
            </p>

            <button className="w-[140px] p-[8px] rounded-md text-sm font-semibold bg-gradient-to-b from-amber-600/50 to-amber-500/60 text-gray-700 hover:text-pink-700">
              Shop Now
            </button>
          </div>

        {/* Special Occasions*/}
          <div className="card w-full sm:w-[250px] rounded-md bg-purple-50 p-8 flex flex-col items-center gap-y-6">
            <div className="inline-block  rounded-full p-3 bg-radial from-purple-300 to-purple-500">
              <FaCalendar className="text-white text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-center">Special Occasions</h3>
            <p className="text-center text-orange-900/80 font-light mb-auto">
              Perfect gifts for birthdays, anniversaries, and holidays
            </p>

            <button className="w-[140px] p-[8px] rounded-md text-sm font-semibold bg-gradient-to-b from-amber-600/50 to-amber-500/60 text-gray-700 hover:text-pink-700">
              Shop Now
            </button>
          </div>

      </div>
    </section>
  );
};

export default Categories;
