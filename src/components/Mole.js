import { useEffect } from "react"
import moleImg from '../mole.png'

function Mole(props) {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
  })

  return (
    <div>
            <img style={{'width': '13vw'}}
            src={moleImg}
            onClick={props.handleClick} />
     </div>
  )
}

export default Mole