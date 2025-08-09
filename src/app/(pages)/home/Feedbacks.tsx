import RatingStars from "@/app/components/RatingStars";
import ReviewCard from "@/app/components/ReviewCard";
import { FaStar } from "react-icons/fa";

const Feedbacks = () => {
  return (
    <section id="feedbacks" className="py-10 lg:py-16 bg-gray-100">
      <div className="text-center text-gray-600 my-10 lg:my-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 max-w-[400px] mx-auto">
          Join thousands of happy customers who've found the perfect gifts with
          us
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <ReviewCard
          name="Miriam Hoseini"
          subtitle="Happy Customer"
          rate={3}
          locked={true}
          message="The gift wrapping was absolutely beautiful and the delivery was so fast! My sister loved her birthday present."
        />
        <ReviewCard
          name="Daniel Ahmadi"
          subtitle="Verified Buyer"
          rate={5}
          locked={true}
          message="Found the perfect anniversary gift here. The quality exceeded my expectations and customer service was excellent."
        />
        <ReviewCard
          name="Khadija Ibrahimi"
          subtitle="Repeat Customer"
          rate={4}
          locked={true}
          message="I've ordered multiple gifts from here and they never disappoint. Great selection and always beautifully packaged."
        />
        <ReviewCard
          name="Miriam Hoseini"
          subtitle="Happy Customer"
          rate={2}
          locked={true}
          message="The gift wrapping was absolutely beautiful and the delivery was so fast! My sister loved her birthday present."
        />
      </div>
    </section>
  );
};

export default Feedbacks;
