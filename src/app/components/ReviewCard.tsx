import RatingStars from "./RatingStars";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({
  name,
  subtitle,
  rate = 0,
  locked,
  message,
}: {
  name: string;
  subtitle: string;
  rate: number;
  locked: boolean;
  message: string;
}) => {
  return (
    <div
      id="feedback-cards"
      className="flex flex-col gap-y-4 px-5 py-10 rounded-md bg-gray-50 w-[300px] max-w-[350px]"
    >
      <div id="head" className="flex gap-3 mb-2">
        <div className="uppercase bg-radial from-purple-400 to-purple-600 w-[40px] h-[40px] p-0 rounded-full text-white font-semibold text-shadow-amber-200 flex items-center justify-center">
          <span>{name.split(' ').map(part=>part[0]).join("")}</span>
        </div>
        <div className="flex flex-col capitalize">
          <span className="font-semibold text-lg text-gray-700">
            {name}
          </span>
          <span className="text-amber-800/80 font-light text-sm">
            {subtitle}
          </span>
        </div>
      </div>
      <RatingStars stars={5} rate={rate} starSize={18} locked={locked} />
      <FaQuoteRight className="text-amber-900/20" />
      <p className="font-light text-gray-800">
        {message}
      </p>
    </div>
  );
};

export default ReviewCard;
