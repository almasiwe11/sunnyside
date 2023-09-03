import React from "react"
import milk from "../../images/desktop/image-gallery-milkbottles.jpg"
import milkmb from "../../images/mobile/image-gallery-milkbottles.jpg"
import cone from "../../images/desktop/image-gallery-cone.jpg"
import conemb from "../../images/mobile/image-gallery-cone.jpg"
import sugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg"
import sugarcubesmb from "../../images/mobile/image-gallery-sugar-cubes.jpg"
import orange from "../../images/desktop/image-gallery-orange.jpg"
import orangemb from "../../images/mobile/image-gallery-orange.jpg"
import RespImage from "./RespImage"
function Images() {
  return (
    <div className="grid grid-cols-2 md:flex mt-20 md:mt-24">
      <RespImage desktop={milk} mobile={milkmb} />
      <RespImage desktop={orange} mobile={orangemb} />
      <RespImage desktop={cone} mobile={conemb} />
      <RespImage desktop={sugarcubes} mobile={sugarcubesmb} />
    </div>
  )
}

export default Images
