import egg from "../../images/desktop/image-transform.jpg"
import eggmb from "../../images/mobile/image-transform.jpg"
import glass from "../../images/desktop/image-stand-out.jpg"
import glassmb from "../../images/mobile/image-stand-out.jpg"
import cherry from "../../images/desktop/image-graphic-design.jpg"
import cherrymb from "../../images/mobile/image-graphic-design.jpg"
import orange from "../../images/desktop/image-photography.jpg"
import orangemb from "../../images/mobile/image-photography.jpg"

import RespImage from "./RespImage"

function Info({ scrollRef, pointRef }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="order-0">
        <RespImage
          desktop={egg}
          mobile={eggmb}
          style={"lg:max-h-[38rem] max-h-96 "}
        />
      </div>
      <div className="flex-center md:-order-1" ref={scrollRef}>
        <div className="lg:w-[65%] w-[85%] mx-auto text-center md:text-left flex flex-col justify-center items-center  gap-5  max-h-96 h-[20rem] sm:h-[24rem] md:items-start  ">
          <div
            className="font-extrabold text-3xl font-fraunces text-black-h1"
            ref={pointRef}
            id="point"
          >
            Transform your <br /> brand
          </div>
          <p className="max-w-lg mx-auto md:mx-0 text-gray-text  ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href="#"
            className=" max-w-max md:text-lg font-bold relative after:absolute after:-bottom-0 after:-z-10 after:-left-1  after:w-[110%] after:bg-yellow-light hover:after:bg-yellow after:duration-300 after:ease-in-out after:rounded-full after:h-2"
          >
            Learn More
          </a>
        </div>
      </div>
      <div>
        <RespImage
          desktop={glass}
          mobile={glassmb}
          style={"lg:max-h-[38rem] max-h-96 "}
        />
      </div>
      <div className="flex-center">
        <div className="lg:w-[65%] w-[85%] mx-auto text-center md:text-left flex flex-col justify-center items-center gap-5  max-h-96 h-[20rem] sm:h-[24rem] md:items-start  ">
          <div className="font-extrabold text-3xl font-fraunces text-black-h1 max-w-[17rem]">
            Stand out to the right audience
          </div>
          <p className="max-w-lg mx-auto md:mx-0 text-gray-text  ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            href="#"
            className=" max-w-max md:text-lg font-bold relative after:absolute after:-bottom-0 after:-z-10 after:-left-1  after:w-[110%] after:bg-pink-light hover:after:bg-pink after:duration-300 after:ease-in-out after:rounded-full after:h-2"
          >
            Learn More
          </a>
        </div>
      </div>
      {/*  */}
      <div className="lg:max-h-[40rem] lg:h-auto h-[40rem] relative w-full">
        <picture>
          <source srcSet={cherry} media={"(min-width:768px)"} />
          <source srcSet={cherrymb} />
          <img
            src={cherrymb}
            className="w-full  lg:max-h-[40rem] h-full object-cover object-cherry cherry:object-cherry-md "
          />
          <div className="absolute bottom-12 left-[50%] translate-x-[-50%] max-w-sm w-[80%] text-center flex flex-col gap-4 ">
            <h1 className="font-fraunces text-black-h1 text-2xl font-extrabold">
              Graphic Design
            </h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </picture>
      </div>

      {/*  */}
      <div className="lg:max-h-[40rem] lg:h-auto h-[40rem] relative w-full">
        <picture>
          <source srcSet={orange} media={"(min-width:768px)"} />
          <source srcSet={orangemb} />
          <img
            src={orangemb}
            className="w-full  lg:max-h-[40rem] h-full object-cover object-cherry cherry:object-cherry-md "
          />
          <div className="absolute bottom-12 left-[50%] translate-x-[-50%] max-w-sm w-[80%] text-center flex flex-col gap-4 ">
            <h1 className="font-fraunces text-black-h1 text-2xl font-extrabold">
              Graphic Design
            </h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </picture>
      </div>
    </div>
  )
}

export default Info
