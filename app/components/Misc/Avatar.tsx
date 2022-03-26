type Props = {
    image: string,
    username: string

}

function Avatar({image, username}: Props) {
let placeholder = username.charAt(0).concat(username.charAt(1))

  return (
 
<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    {image.length >= 5 ? <img src={image} alt="user"/> : <span className="bg-neutral-focus text-neutral-content rounded-full w-24 ">{placeholder}</span>}
  </div>
</div>


  )
}

export default Avatar