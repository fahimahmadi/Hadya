import Product from "@/app/components/Product";

const products = [
  {
    image: "cake1.jpg",
    target: "For Her",
    title: "Birthday Cake",
    rate: 4.3,
    reviews: 270,
    curprice: 30.0,
    origprice: 35.0,
    badge: "Best Seller",
  },
  {
    image: "cake2.jpg",
    target: "For Him",
    title: "Chocolate Cake",
    rate: 4.0,
    reviews: 150,
    curprice: 25,
    origprice: 30,
    badge: "New",
  },
  {
    image: "cake1.jpg",
    target: "For Her",
    title: "Birthday Cake",
    rate: 4.3,
    reviews: 270,
    curprice: 30.0,
    origprice: 35.0,
    badge: "Best Seller",
  },
  {
    image: "cake2.jpg",
    target: "For Him",
    title: "Chocolate Cake",
    rate: 4.0,
    reviews: 150,
    curprice: 25,
    origprice: 30,
    badge: "New",
  },
];

const Popular = () => {
  return (
    <section id="populars" className="popular bg-gray-50 p-10 flex flex-col items-center">
      <div className="py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center">
          Featured Gifts
        </h2>
        <p className="text-lg text-gray-600 max-w-[400px] mx-auto text-center">
          Our most loved gifts, chosen by customers and curated by our team
        </p>
      </div>

      <div className="products flex flex-wrap justify-center gap-5">
        {products.map((prod, index) => (
          <Product data={prod} key={index} />
        ))}
      </div>

      <button className="border border-gray-300 rounded-md py-2 px-5 text-gray-600 my-10 mx-auto hover:text-white hover:bg-gray-600">
        View More Products
      </button>
    </section>
  );
};

export default Popular;
