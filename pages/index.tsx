import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/hero.jpg')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to the Listing App</h1>
          <p className="mt-4 text-xl">Find your next home today</p>
        </div>
      </section>

      {/* More sections here */}
    </div>
  );
};

export default Home;
