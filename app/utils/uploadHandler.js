import {dbClient} from './supabaseClient'


export const uploadHandler = async ({ name, stream, filename }) => {
    console.log(name, stream, filename);

    if (name !== "my-file") {
      stream.resume();
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