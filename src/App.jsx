import { useRef, useEffect, useState } from "react"

import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info"
import Testimonials from "./Components/Testimonials"
import Images from "./Components/Images"
import Footer from "./Components/Footer"
function App() {
  const scrollRef = useRef(null)
  const navDropRef = useRef(null)
  const [inHero, setInHero] = useState(true)
  console.log(inHero)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setInHero(entry.isIntersecting)
    })
    const here = navDropRef.current

    observer.observe(here)

    return () => {
      observer.unobserve(here)
    }
  }, [])
  return (
    <div className="font-barlow ">
      <Hero scrollRef={scrollRef} navDropRef={navDropRef} inHero={inHero} />
      <Info scrollRef={scrollRef} />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  )
}

export default App
