import React from "react";

 const Auth=({children})=>{
    return(
   <div>
        <label htmlFor=""> User name</label>
        <input type="text" />
        <label htmlFor="">password</label>
        <button>Submit</button>
   </div>
    )
}

export default Auth;