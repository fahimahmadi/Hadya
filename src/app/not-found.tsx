import Link from "next/link";

function NotFound() {
    
    return (
      <div className="flex justify-center items-center flex-col space-y-2 w-full h-screen bg-black/50 text-white">
        <h2 className="text-2xl">❌ 404 - Page Not Found</h2>
        <p className="text-gray-100/60">
          Could not find requested resource! 🤨
        </p>
        <Link href="/" className="text-gray-100/60 hover:text-pink-300">
          ⬅️ Return Home
        </Link>
      </div>
    );
}

export default NotFound;