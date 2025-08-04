import {GetStaticProps} from 'next';
import Image from 'next/image';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
type Product = {
    image: string;
    target: string;
    title: string;
    rate: number;
    reviews: number;
    curprice: number;
    origprice: number;
    badge: string;
}
const Product = ({data}:{data:Product}) => {
    return (
      <div className="product-card sm:w-[300px] rounded-md shadow-lg text-sm relative">
        <span className="absolute z-50 top-2 left-4 bg-pink-600/50 p-1 px-2 rounded-lg text-gray-50 text-sm">{data.badge}</span>
        <Image
          src={`/products/${data.image}`}
          alt="pink birthday cake on stand"
          height={130}
          width={300}
          className="object-cover rounded-t-md aspect-square"
        />
        <div className="p-5 pb-10 flex flex-col gap-y-3">
          <p className="text-gray-400 text-sm">{data.target}</p>
          <p className="text-gray-600 font-semibold text-xl">{data.title}</p>
          <p className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <FaStar className="text-amber-500" />
              <span>{data.rate}/5</span>
            </span>
            <span className="text-gray-500">({data.reviews} reviews)</span>
          </p>
          <p className="flex gap-2 text-lg mt-4">
            <span>${data.curprice}</span>
            <span className="text-gray-400 line-through">${data.origprice}</span>
          </p>
          <button className="flex gap-2 items-center justify-center text-lg bg-gradient-to-b from-amber-500/80 to-amber-400/90 px-5 py-2 mt-5 rounded text-white">
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    );
}


export const getStaticProps:GetStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}

export default Product;