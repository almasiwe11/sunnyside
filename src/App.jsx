import { useRef, useEffect, useState } from "react"

import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info"
import Testimonials from "./Components/Testimonials"
import Images from "./Components/Images"
import Footer from "./Components/Footer"
function App() {
  const scrollRef = useRef(null)
  const navDropRef = useRef(null)
  const pointRef = useRef(null)
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      console.log(show)

      // hide dropwdown
      if (show && entry.isIntersecting) {
        setHide(true)
        setShow(false)
      }

      if (hide && show) {
        setShow(!entry.isIntersecting)
        setHide(false)
      }

      //show dropdown
      setShow(!entry.isIntersecting)
    })

    observer.observe(navDropRef.current)

    return () => {
      observer.unobserve(navDropRef.current)
    }
  }, [show, hide])

  return (
    <div className="font-barlow ">
      <Hero
        scrollRef={scrollRef}
        navDropRef={navDropRef}
        show={show}
        hide={hide}
      />
      <Info scrollRef={scrollRef} pointRef={pointRef} />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  )
}

export default App
