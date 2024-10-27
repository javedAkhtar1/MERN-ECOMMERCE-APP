import React from 'react'

function Collections() {
  return (
    <>
      <div>
        <section className='collections-section mt-6 grid max-h-[700px] mx-auto max-w-6xl gap-5'
                 style={{ gridTemplateColumns: '4fr 4fr', gridTemplateRows: '1fr 1fr' }}>
          <div className="row-span-2 relative">
            <img src="./assets/woman-card.jpg" alt="woman-collection-image" className='h-full w-full object-cover'/>
            <div className='absolute top-[100px] left-10 font-Cormorant'>
              <h1 className='text-7xl text-red-900'>WOMEN'S</h1>
              <h1 className='text-3xl'>COLLECTION</h1>
              <button 
              className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
                Check Out
              </button>
            </div>
          </div>
          <div className='relative'>
            <img src="./assets/man-card.jpg" alt="man-collection-image" className='h-full w-full object-cover'/>
            <div className='absolute bottom-[60px] left-6 font-Cormorant'>
              <h1 className='text-7xl text-red-900'>MEN'S</h1>
              <h1 className='text-3xl'>COLLECTION</h1>
              <button 
              className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
                Check Out
              </button>
            </div>
          </div>
          <div className='relative'>
            <img src="./assets/kid-card.jpg" alt="kid-collection-image" className='h-full w-full object-cover'/>
            <div className='absolute top-[60px] right-10 font-Cormorant'>
              <h1 className='text-7xl text-red-900'>KID'S</h1>
              <h1 className='text-3xl'>COLLECTION</h1>
              <button 
              className="font-Cormorant mt-2 text-lg border border-black py-1 px-4 hover:bg-black hover:text-white transition-all">
                Check Out
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Collections
