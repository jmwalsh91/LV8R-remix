import Avatar from '../Misc/Avatar'
import { ActionFunction, Form, useFetcher, unstable_parseMultipartFormData} from 'remix'
import { useEffect, useRef, useState } from 'react'
import {uploadHandler} from '../../utils/uploadHandler'


type Props = {}
/* export let action: ActionFunction = async ({request}) => {
  const fileToUpload = await unstable_parseMultipartFormData(
    request,
    uploadHandler 
  ); 
  console.log(fileToUpload)
} */
function UploadHookImg({}: Props) {
  const [preview, setPreview] = useState<string>("https://api.lorem.space/image/face?hash=92310")
  const [newHookImg, setNewHookImg] = useState("")
  const imgUploadRef: any = useRef()


/* useEffect(() => {
  const fileToUpload = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  ); 
}, [newHookImg])
     */



    const handlePreviewClick = async (event: any) => {
      event.preventDefault()
      if (imgUploadRef.current.files.length === 1) {
        let previewImage = await URL.createObjectURL(imgUploadRef.current.files[0])
        setPreview(previewImage)
        setNewHookImg(imgUploadRef.current.files[0])
      } 
    }
  return (
      <div className="glass w-80  lg:w-[40rem]">
        <input type="hidden" name="newHookImg" value={newHookImg}></input>


        <div>
      <img src={preview} alt="Hook Preview" />
      </div>

hello
      <input type="file" id="myFile" name="hookImg" ref={imgUploadRef} accept="image/png, image/jpeg" />

      <button className="btn btn-glass" onClick={(e) => handlePreviewClick(e)}>Preview</button>


    </div>

  )
}

export default UploadHookImg