import Nav from "./Nav"

function Hero({ scrollRef, navDropRef, inHero }) {
  function handleScroll() {
    scrollRef.current.lastElementChild.scrollIntoView()
  }

  return (
    <div
      className="bg-mobile-hero h-[38rem] bg-adjust bg-cover bg-no-repeat  lg:h-screen md:bg-desktop-hero lg:bg-adjust lg:bg-cover"
      ref={navDropRef}
    >
      <Nav inHero={inHero} />
      <div className="wrapper flex flex-col items-center gap-10">
        <h1 className="text-5xl uppercase text-white font-fraunces font-extrabold  text-center mt-24">
          We are creatives
        </h1>

        <ArrowDown handleScroll={handleScroll} />
      </div>
    </div>
  )
}

export default Hero

function ArrowDown({ handleScroll }) {
  return (
    <svg
      width="36"
      height="114"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow cursor-pointer"
      onClick={handleScroll}
    >
      <g
        stroke="#FFF"
        strokeWidth="6"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 3v100M3 95.484l15 15 15-15" />
      </g>
    </svg>
  )
}
