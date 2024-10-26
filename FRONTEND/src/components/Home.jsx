import React from "react";

function Home() {
  return (
    <>
      <div className="relative">
        <section className="mx-auto relative">
          <img src="../public/assets/home.jpg" alt="home-image" className="h-[540px] w-full object-fill" />
          <div className="absolute  flex flex-col justify-center items-center bottom-[100px] right-[220px] gap-4">
            <h1 className="text-4xl font-Cormorant text-red-700">
              BIG SALE
            </h1>
            <p className="max-w-xs text-center font-Rubik text-[.8rem]">
            Discover the latest trends and exclusive collections crafted to elevate your style.
            </p>
            <div className="flex gap-4">
              <button className="font-Cormorant text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">View Deals</button>
              <button className="font-Cormorant text-lg border text-white bg-red-700 py-1 px-4 hover:bg-red-900 transition-all">Shop Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
