import React from 'react'

function Collections() {
  return (
    <>
      <div>
        <section className='collections-section mt-6 grid max-h-[700px] mx-auto max-w-6xl gap-5'
                 style={{ gridTemplateColumns: '4fr 4fr', gridTemplateRows: '1fr 1fr' }}>
          <div className="row-span-2">
            <img src="./assets/woman-card.jpg" alt="woman-collection-image" className='h-full w-full object-cover'/>
          </div>
          <div>
            <img src="./assets/man-card.jpg" alt="man-collection-image" className='h-full w-full object-cover'/>
          </div>
          <div>
            <img src="./assets/kid-card.jpg" alt="kid-collection-image" className='h-full w-full object-cover'/>
          </div>
        </section>
      </div>
    </>
  )
}

export default Collections
