import React from "react"

function Menu({ style, active }) {
  return (
    <ul className={`${style} items-center `}>
      <li className="">
        <a
          href="#"
          className={`p-2 flex-center  rounded-full px-6 duration-300 ease-in-out hover:bg-white-bg `}
        >
          About
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className={`p-2 flex-center  rounded-full px-6 duration-300 ease-in-out hover:bg-white-bg `}
        >
          Services
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className={`p-2 flex-center  rounded-full px-6 duration-300 ease-in-out hover:bg-white-bg `}
        >
          Projects
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className={`p-2 flex-center  rounded-full px-6 duration-300 ease-in-out hover:bg-white-bg ${active} uppercase`}
        >
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Menu
