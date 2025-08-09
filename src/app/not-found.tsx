import Link from "next/link";

function NotFound() {
    
    return (
      <div className="flex justify-center items-center flex-col space-y-2 w-full h-screen bg-gray-800 text-gray-500">
        <h2 className="text-4xl">❌ 404 - Page Not Found</h2>
        <p className="text-gray-100/60">
          Could not find requested resource! Maybe under construction.
        </p>
        <Link href="/" className="text-gray-100/60 hover:text-pink-300">
          ⬅️ Return Home
        </Link>
      </div>
    );
}

export default NotFound;