import React from "react";
import { useInView } from "react-intersection-observer";

function Collections() {
  const { ref: womanRef, inView: womanInView } = useInView({
    triggerOnce: true,
  });
  const { ref: manRef, inView: manInView } = useInView({ triggerOnce: true });
  const { ref: kidRef, inView: kidInView } = useInView({ triggerOnce: true });

  return (
    <div className="max-w-6xl mx-auto h-auto px-5">
      <section
        className="collections-section mt-6 grid h-auto gap-5"
        style={{ gridTemplateColumns: "4fr 4fr", gridTemplateRows: "1fr 1fr" }}
      >
        <div
          ref={womanRef}
          className={`row-span-2 relative transform transition-all duration-700 ${
            womanInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="./assets/woman-card.jpg"
            alt="woman-collection-image"
            className="h-full w-full object-cover"
          />
          <div className="absolute md:top-[80px] md:left-10 inset-0 xs:left-5 left-3 top-5 font-Cormorant">
            <h1 className="md:text-7xl sm:text-5xl xs:text-4xl text-2xl text-red-900">
              WOMEN'S
            </h1>
            <h1 className="md:text-3xl sm:text-3xl xs:text-2xl text-lg">COLLECTION</h1>
            <button className="font-Cormorant mt-2 text-sm sm:text-base md:text-lg border border-black py-1 xs:px-4 px-1 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>

        <div
          ref={manRef}
          className={`relative transform transition-all duration-700 ${
            manInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="./assets/man-card.jpg"
            alt="man-collection-image"
            className="h-full w-full object-cover"
          />
          <div className="absolute md:bottom-[60px] md:left-6 font-Cormorant inset-0 left-3 sm:top-8 top-2">
          <h1 className="md:text-8xl sm:text-5xl xs:text-3xl text-lg text-red-900">
              MEN'S
            </h1>
            <h1 className="md:text-3xl sm:text-3xl xs:text-2xl text-sm">COLLECTION</h1>
            <button className="font-Cormorant xs:mt-2 mt-1 text-xs xs:text-sm md:text-lg border border-black xs:py-1 py-[0.1rem] xs:px-3 sm:px-4 px-1 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>

        <div
          ref={kidRef}
          className={`relative transform transition-all duration-700 ${
            kidInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="./assets/kid-card.jpg"
            alt="kid-collection-image"
            className="h-full w-full object-cover"
          />
          <div className="absolute md:bottom-[60px] md:right-8 flex flex-col items-end sm:justify-center justify-start font-Cormorant inset-0 right-3 sm:top-8 top-2">
          <h1 className="md:text-7xl sm:text-5xl xs:text-3xl text-xl text-red-900">
              KIDS'
            </h1>
            <h1 className="md:text-3xl sm:text-3xl xs:text-2xl text-sm">COLLECTION</h1>
            <button className="font-Cormorant xs:mt-2 mt-1 text-xs xs:text-sm md:text-lg border border-black xs:py-1 py-[0.1rem] xs:px-3 sm:px-4 px-1 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collections;
