import Lamp from "./icons/Lamp"
import Star01 from "./icons/Star01"
import Star02 from "./icons/Star02"
import RandomMotion from "./RandomMotion"

export default function RoamingIcons() {
  return (
    <>
      <RandomMotion>
        <Lamp />
      </RandomMotion>
      <RandomMotion>
        <Star01 />
      </RandomMotion>
      <RandomMotion>
        <Star02 />
      </RandomMotion>
    </>
  )
}
