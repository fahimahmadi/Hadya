import HomePage from "./(pages)/home/homepage";

function Page() {
  return (
    <div className="h-screen flex flex-col bg-sky-300/60">
      <div className="mt-18 sm:mt-31"></div>
      {/* banner */}
      <HomePage />
    </div>
  );
}

export default Page;
