type Props = {
    image: string,

}

function Avatar(props: Props) {
  return (
 
<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={props.image} alt="user wtftftftfname"/>
  </div>
</div>


  )
}

export default Avatar