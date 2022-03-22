import {dbClient} from './supabaseClient.js'
import * as bcrypt from 'bcryptjs'

export const registerSubmit = async ({form}) => {
    let accountId
    console.log(form);
    let email = form.email
    let password1: any = form.password1
    let password2 = form.password2

    if (password1 !== password2) {
      return ;
    } else {
      let isTaken = await dbClient
        .from("Accounts")
        .select("email")
        .ilike("email", `${email}`);
      if (isTaken.data.length === 0) {
        let hashedPass = await bcrypt.hash(password1, 10);
        let createdUser = await dbClient
          .from("Accounts")
          .insert([{ email: `${email}`, password: `${hashedPass}` }]);
          let id = createdUser.data[0].id
          console.log("created user is  " + createdUser)
          return accountId = id
      } else accountId = "error"
    
    }
    return accountId;
} 
