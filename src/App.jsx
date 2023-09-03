import { useRef, useState } from "react"

import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info"
import Testimonials from "./Components/Testimonials"
import Images from "./Components/Images"
import Footer from "./Components/Footer"
function App() {
  const scrollRef = useRef(null)
  return (
    <div className="font-barlow ">
      <Hero scrollRef={scrollRef} />
      <Info scrollRef={scrollRef} />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  )
}

export default App
