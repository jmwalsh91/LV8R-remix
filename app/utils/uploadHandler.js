import {dbClient} from './supabaseClient'

{/* 
this goes in component route 


<div className="container p-2 flex ring-offset-2 ring-2">
            <div>
              <Avatar image={preview} />
            </div>

            <input
              type="file"
              id="myFile"
              name="avatar"
              ref={imgUploadRef}
              accept="image/png, image/jpeg"
            />
            <button
              value="avatarButton"
              className="btn btn-glass"
              onClick={(e) => handlePreviewClick(e)}
            >
              Preview
            </button>
          </div>


/////////////////
AND THIS
goes in action

   const fileToUpload = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  ); 




  and this goes in component


  const [preview, setPreview] = useState<string>(
    "https://api.lorem.space/image/face?hash=92310"
  );
  const imgUploadRef: any = useRef();

  const handlePreviewClick = async (e: any) => {
    e?.preventDefault();
    if (imgUploadRef.current.files.length === 1) {
      let previewImage = await URL.createObjectURL(
        imgUploadRef.current.files[0]
      );
      setPreview(previewImage);
    }
  };
 */}

export const uploadHandler = async ({ name, stream, filename }) => {
    console.log(name, stream, filename);

    if (!name ) {
      stream.resume();
      console.log("stream")
      console.log(stream)
      return;
    } else {
      console.log(name, filename);
    }

    // Get the file as a buffer
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    const buffer = Buffer.concat(chunks);

    // call supabase function for uploading to bucket
    const { data, error } = await dbClient.storage
      .from("userbucket")
      .upload(filename, buffer);
    if (error) {
      throw error;
    }

    // return information up uploaded file
 JSON.stringify({ data });
  }

  

/* 
  // get file info back after image upload
  const form = await unstable_parseMultipartFormData(request, uploadHandler);

  //convert it to an object to padd back as actionData
  const fileInfo = JSON.parse(form.get("my-file"));

  // this is response from upload handler
  console.log("the form", form.get("my-file"));

  // return success action data
  return fileInfo;
} catch (e) {
  // return error action data
  return { error: e };
}
 */