"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({
  stars = 5,
  starSize = 15,
  locked = false,
  rate = 0,
}) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState<any>(null);

  return (
    <div className="flex">
      {[...Array(stars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <label key={starValue}>
            <input
              type="radio"
              name="rating"
              value="stars"
              onClick={() => setRating(starValue)}
              className="hidden"
              disabled={locked}
              readOnly
            />
            <FaStar
              size={starSize}
              className={`cursor-point transition-colors duration-200 ${
                starValue <= (hover || rating)
                  ? "text-amber-400"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => !locked && setHover(starValue)}
              onMouseLeave={() => !locked && setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
