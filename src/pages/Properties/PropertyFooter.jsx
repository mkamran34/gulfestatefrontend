import React from 'react'
import propfooter from "/assets/propfooter.svg"

function PropertyFooter() {
  return (
    <div className="lg:px-32 px-4 py-16">
      <div className="">
        <img
          src={propfooter}
          alt="Background"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}

export default PropertyFooter