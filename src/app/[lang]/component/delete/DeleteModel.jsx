"use client";

import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useState } from "react";

export default function DeleteModel({setModel,deleteFunction,deleteFunctionParams,note='note'}) {

    const[loader,setLoader] = useState(false);

    return (
        <ModelOverlay showModel={setModel} styleCss='block'>
        <div role="dialog"
        //    className={`bg-white w-[480px] cu-modal__dialog h-auto flex flex-col space-add-container rounded-xl overflow-hidden relative z-2000  ${
           className={`cu-modal__dialog `}
        >

            <div role="dialog" className="relative contents">
                <div className="overflow-hidden rounded-lg">
                    <div className="p-6 bg-[var(--cu-background-main)]">
                        <div className="relative w-fit">
                            <div className="destructive">
                            <svg _ngcontent-ng-c2340422105="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="squircle">
                            <path _ngcontent-ng-c2340422105="" strokeWidth="3" d="M38.5 20c0 7.84-1.1 12.265-3.668 14.832C32.265 37.4 27.841 38.5 20 38.5c-7.84 0-12.265-1.1-14.832-3.668C2.6 32.265 1.5 27.841 1.5 20c0-7.84 1.1-12.265 3.668-14.832C7.735 2.6 12.159 1.5 20 1.5c8.601 0 12.966 1.117 15.336 3.635 1.176 1.25 1.98 2.968 2.48 5.412.505 2.459.684 5.55.684 9.453Z" className="squircle-background"></path>
                            <path _ngcontent-ng-c2340422105="" strokeWidth="1.5" d="M39.25 20c0 7.849-1.086 12.561-3.888 15.362C32.561 38.164 27.85 39.25 20 39.25S7.439 38.164 4.637 35.362C1.836 32.561.75 27.85.75 20S1.836 7.439 4.637 4.637C7.44 1.836 12.151.75 20 .75c8.586 0 13.269 1.094 15.882 3.871 1.303 1.384 2.15 3.248 2.669 5.775.52 2.535.699 5.688.699 9.604Z" className="squircle-border"></path>
                            </svg>

                            <div className="trash-icon-delete-model">
                            <svg className="w-8 h-8 block" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M10 4h4v1h-4V4ZM8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a1 1 0 1 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 0 1 0-2h4Zm6 2H7v13h10V7h-3Zm-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z" clipRule="evenodd"></path>
                            </svg>
                            </div>

                            </div>
                        </div>

                        <h2 className="ng-star-inserted">
                        Are you sure you want to delete this {note}? 
                        </h2>

                        <p className="ng-star-inserted-p">
                        This action cannot be undone. 
                        </p>

                    </div>

                    <div className="footer-delete-model">
                        <button className="btn-normal cancel-button"  onClick={(e)=>{
                            setModel(false);
}}>
                        Cancel 
                        </button>

                        <button className="btn-normal confirm-button" onClick={(e)=>{

                            deleteFunction(setModel,setLoader,...deleteFunctionParams);
                        }}>
                        {
                            loader ? <span className="loading-circle"></span> : "Delete"
                        }
                        
                        </button>

                    </div>

                </div>
            </div>

        </div>
        </ModelOverlay>
    )

}