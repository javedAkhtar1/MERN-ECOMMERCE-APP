import React from 'react';
import { useInView } from 'react-intersection-observer';

function Collections() {
  
  const { ref: womanRef, inView: womanInView } = useInView({ triggerOnce: true });
  const { ref: manRef, inView: manInView } = useInView({ triggerOnce: true });
  const { ref: kidRef, inView: kidInView } = useInView({ triggerOnce: true });

  return (
    <div>
      <section
        className="collections-section mt-6 grid max-h-[700px] mx-auto max-w-6xl gap-5"
        style={{ gridTemplateColumns: '4fr 4fr', gridTemplateRows: '1fr 1fr' }}
      >
        <div
          ref={womanRef}
          className={`row-span-2 relative transform transition-all duration-700 ${
            womanInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src="./assets/woman-card.jpg" alt="woman-collection-image" className="h-full w-full object-cover" />
          <div className="absolute top-[100px] left-10 font-Cormorant">
            <h1 className="text-7xl text-red-900">WOMEN'S</h1>
            <h1 className="text-3xl">COLLECTION</h1>
            <button className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>

        <div
          ref={manRef}
          className={`relative transform transition-all duration-700 ${
            manInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src="./assets/man-card.jpg" alt="man-collection-image" className="h-full w-full object-cover" />
          <div className="absolute bottom-[60px] left-6 font-Cormorant">
            <h1 className="text-7xl text-red-900">MEN'S</h1>
            <h1 className="text-3xl">COLLECTION</h1>
            <button className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>

        <div
          ref={kidRef} 
          className={`relative transform transition-all duration-700 ${
            kidInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src="./assets/kid-card.jpg" alt="kid-collection-image" className="h-full w-full object-cover" />
          <div className="absolute top-[60px] right-10 font-Cormorant">
            <h1 className="text-7xl text-red-900">KIDS'</h1>
            <h1 className="text-3xl">COLLECTION</h1>
            <button className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collections;
