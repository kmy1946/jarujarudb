import Image from "next/image"

export default function MyImage(props) {
  let fname = './' + props.fname
  let size = props.size + 'px'

  return (
    <Image width={size} border='1' src={fname} alt=""/>
  )
}