import React from "react"

function Testimonial({ image, name, position, children }) {
  return (
    <div className="flex flex-col gap-6 items-center text-center  ">
      <img
        src={image}
        alt="Emilies image"
        className="rounded-full h-20 mb-3 md:mb-6  "
      />
      <p className="text-grey-text  max-w-xs">{children}</p>

      <div className="">
        <h1 className="font-bold font-fraunces mb-1">{name}</h1>
        <p className="text-gray-text ">{position}</p>
      </div>
    </div>
  )
}

export default Testimonial
