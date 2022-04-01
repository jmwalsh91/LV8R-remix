import { useRef, useState } from 'react'


type Props = {}

function UploadPitchImg({}: Props) {
  const [preview, setPreview] = useState<string>("https://api.lorem.space/image/face?hash=92310")
  const [newPitchImg, setNewPitchImg] = useState<string>("")
  const imgUploadRef: any = useRef()
    

    const handlePreviewClick = async (event: any) => {
      event.preventDefault()

      if (imgUploadRef.current.files.length === 1) {
        let previewImage = await URL.createObjectURL(imgUploadRef.current.files[0])
        setPreview(previewImage)
        setNewPitchImg(imgUploadRef.current.files[0])
      } 
    }
  return (
      <div className="glass w-80  lg:w-[40rem]">
<input type="hidden" name="newPitchImg" value={newPitchImg}/>
        <div>
      <img src={preview} alt="Hook Preview" />
      </div>

hello
      <input type="file" id="myFile" name="pitchImg" ref={imgUploadRef} accept="image/png, image/jpeg" />
      <button className="btn btn-glass" onClick={(e) => handlePreviewClick(e)}>Preview</button>

    </div>

  )
}

export default UploadPitchImg