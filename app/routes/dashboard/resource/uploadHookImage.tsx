import { ActionFunction, unstable_parseMultipartFormData} from "remix";
import {uploadHandler} from '../../../utils/uploadHandler'

export let action: ActionFunction = async ({ request }) => {
    const fileToUpload = await unstable_parseMultipartFormData(
        request,
        uploadHandler
      ); 
      console.log(fileToUpload)
      return fileToUpload
}