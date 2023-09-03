import React from "react"

function Hamburger({ setIsOpen, isOpen }) {
  return (
    <button
      id="menu-btn"
      type="button"
      className={`z-40 block hamburger md:hidden focus:outline-none ${
        isOpen && "open"
      } `}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  )
}

export default Hamburger
