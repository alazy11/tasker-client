"use client";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";



const CustomToolbar = () => (


   <div id="toolbar" className="p-2 border-none alazy">
      <span className="ql-formats">
         <select className="ql-header" >
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option selected="selected"></option>
         </select>
         <select class="ql-font"></select>
      </span>

      <span className="ql-formats">
         <button type="button" className="ql-image">
            img
         </button>
      </span>

      <span className="ql-formats">
         <button type="button" className="ql-code-block">
            code
         </button>
         <button class="ql-blockquote"></button>
      </span>

      {/* <span className="ql-formats">
         <button type="button" className="ql-divider">
            dev
         </button>
      </span> */}

      <span className="ql-formats">
         <button type="button" className="ql-bold">
            <svg viewBox="0 0 18 18">
               {" "}
               <path
                  className="ql-stroke"
                  d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
               ></path>{" "}
               <path
                  className="ql-stroke"
                  d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
               ></path>{" "}
            </svg>
         </button>
         <button type="button" className="ql-italic">
            <svg viewBox="0 0 18 18">
               {" "}
               <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>{" "}
               <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>{" "}
               <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>{" "}
            </svg>
         </button>
         <button type="button" className="ql-underline">
            <svg viewBox="0 0 18 18">
               {" "}
               <path
                  className="ql-stroke"
                  d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
               ></path>{" "}
               <rect
                  className="ql-fill"
                  height="1"
                  rx="0.5"
                  ry="0.5"
                  width="12"
                  x="3"
                  y="15"
               ></rect>{" "}
            </svg>
         </button>

         <button class="ql-strike"></button>

         <button type="button" className="ql-link">
            <svg viewBox="0 0 18 18">
               {" "}
               <line
                  className="ql-stroke"
                  x1="7"
                  x2="11"
                  y1="7"
                  y2="11"
               ></line>{" "}
               <path
                  className="ql-even ql-stroke"
                  d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
               ></path>{" "}
               <path
                  className="ql-even ql-stroke"
                  d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
               ></path>{" "}
            </svg>
         </button>
      </span>

      <span class="ql-formats">
    <select class="ql-color"></select>
    <select class="ql-background"></select>
  </span>

      <span className="ql-formats">
         <button type="button" className="ql-list" value="ordered">
            <svg viewBox="0 0 18 18">
               {" "}
               <line className="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>{" "}
               <line className="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>{" "}
               <line className="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>{" "}
               <line
                  className="ql-stroke ql-thin"
                  x1="2.5"
                  x2="4.5"
                  y1="5.5"
                  y2="5.5"
               ></line>{" "}
               <path
                  className="ql-fill"
                  d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
               ></path>{" "}
               <path
                  className="ql-stroke ql-thin"
                  d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
               ></path>{" "}
               <path
                  className="ql-stroke ql-thin"
                  d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
               ></path>{" "}
            </svg>
         </button>
         <button type="button" className="ql-list" value="bullet">
            <svg viewBox="0 0 18 18">
               {" "}
               <line className="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>{" "}
               <line className="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>{" "}
               <line className="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>{" "}
               <line className="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>{" "}
               <line className="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>{" "}
               <line className="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>{" "}
            </svg>
         </button>

         <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>

      </span>

      <span class="ql-formats">
    <button class="ql-direction" value="rtl"></button>
    <select class="ql-align"></select>
  </span>

      <span className="ql-formats">
         <button type="button" className="ql-clean">
            <svg className="" viewBox="0 0 18 18">
               {" "}
               <line className="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>{" "}
               <line className="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>{" "}
               <line className="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>{" "}
               <line className="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>{" "}
               <rect
                  className="ql-fill"
                  height="1"
                  rx="0.5"
                  ry="0.5"
                  width="7"
                  x="2"
                  y="14"
               ></rect>{" "}
            </svg>
         </button>
      </span>
   </div>
);





export default function TextEditor({desc,setDesc,phase, setValueDesc}){


   function handleChange(html) {
      setDesc(html)
   }

   return (
      <div className="h-full flex flex-col editor-grid">
      <CustomToolbar />
      <ReactQuill
      onChange={handleChange}
      placeholder={'write description.....'}
      modules={
         {
            toolbar: {
               container: "#toolbar",
            },
            clipboard: {
               matchVisual: false,
            },
         }
      }
      formats={
         [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "code-block",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "color",
            "background",
            "divider",
            "direction",
            "align"
         ]
      }
      value={desc}
      onBlur={()=>{
         // setValueDesc(prev=>{
         //    prev[phase] = desc;
         //    console.log('valueDesc.....',prev[phase])
         //    return prev;
         // });

         console.log('phase.....',phase)
         // console.log('valueDesc.....',valueDesc)
         console.log('desc.....',desc)
      }}
      theme={"snow"} // pass false to use minimal theme
   />
   </div>
   );

}