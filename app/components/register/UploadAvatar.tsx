import Avatar from '../../components/Misc/Avatar'
import { Form } from 'remix'
import { useRef, useState } from 'react'


type Props = {}

function UploadAvatar({}: Props) {
  const [preview, setPreview] = useState<string>("https://api.lorem.space/image/face?hash=92310")
  const imgUploadRef: any = useRef()
    

    const handlePreviewClick = async (e: any) => {
      e?.preventDefault()
      if (imgUploadRef.current.files.length === 1) {
        let previewImage = await URL.createObjectURL(imgUploadRef.current.files[0])
        setPreview(previewImage)
      } 
    }
  return (
      <div className="container p-2 flex ring-offset-2 ring-2">

        <div>
      <Avatar image={preview} />
      </div>


      <input type="file" id="myFile" name="avatar" ref={imgUploadRef} accept="image/png, image/jpeg" />
      <button value="avatarButton" className="btn btn-glass" onClick={(e) => handlePreviewClick(e)}>Preview</button>

    </div>

  )
}

export default UploadAvatar