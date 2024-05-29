"use client";
import { useState } from "react";

export default function ErrorMessage({errorText,errorMessage,seterrorText}) {

   return(
      <div className="server-error-message">
         <div className="ms-container">
         <span className="icon">
         <svg focusable="false" aria-hidden="true" fill="#ffffff" width="25" height="25" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
         </span>
         <p>{errorText}</p>
         </div>
         <button onClick={(e)=>{
            errorMessage(false);
            seterrorText('')
         }}>
            <svg width={25} height={25} focusable="false" fill='#ffffff' aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
         </button>
      </div>
   );

}