import React from "react";

function Home() {
  return (
    <>
      <div className="relative">
        <section className="mx-auto relative">
          <img src="../public/assets/home.jpg" alt="home-image" className="h-[540px] w-full object-cover" />
          <div className="absolute  flex flex-col justify-center items-center bottom-[100px] right-[220px] gap-4">
            <h1 className="text-4xl font-Cormorant text-red-500">
              BIG SALE
            </h1>
            <p className="max-w-xs text-center font-Rubik text-[.8rem]">
            Discover the latest trends and exclusive collections crafted to elevate your style.
            </p>
            <div className="flex gap-4">
              <button>View Deals</button>
              <button>Shop Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
