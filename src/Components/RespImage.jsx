import React from "react"

function RespImage({ mobile, desktop, style }) {
  return (
    <picture>
      <source srcSet={desktop} media={"(min-width:768px)"} />
      <source srcSet={mobile} />
      <img
        src={mobile}
        alt=""
        className={`object-cover h-full ${style} w-full`}
      />
    </picture>
  )
}

export default RespImage
