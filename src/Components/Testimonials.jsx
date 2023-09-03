import Testimonial from "./Testimonial"
import first from "../../images/image-emily.jpg"
import third from "../../images/image-jennie.jpg"
import second from "../../images/image-thomas.jpg"

function Testimonials() {
  return (
    <div>
      <h1 className="uppercase text-xl text-gray-text   text-center mt-24">
        Client testimonials
      </h1>

      <div className="flex-flex gap-16 md:gap-6 max-w-6xl mx-auto  justify-between w-[90%] mt-16">
        <Testimonial
          image={first}
          name={"Emily R."}
          position={"Marketing Director"}
        >
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </Testimonial>

        <Testimonial
          image={second}
          name={"Thomas S."}
          position={"Chief Operating Officer"}
        >
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </Testimonial>

        <Testimonial
          image={third}
          name={"Jennie F."}
          position={"Business Owner"}
        >
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </Testimonial>
      </div>
    </div>
  )
}

export default Testimonials
