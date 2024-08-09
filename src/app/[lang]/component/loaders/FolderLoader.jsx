import CircleLoader from "./CircleLoader";

export default function FolderLoader({level}) {

    return (

        <li>
        <div
           style={{ color: "#b0bac6" }}
           className={`flex relative main items-center min-h-8 cursor-pointer rounded-md hover:bg-gray-100`}
          
        >

           <div className="flex self-stretch">
              {level?.map((item, index) => {
                 return (
                    <div className="flex w-2" key={item + index}>
                       <div className="w-full h-full ltr:border-r ltr:border-solid ltr:border-r-gray-200"></div>
                    </div>
                 );
              })}
           </div>
              <div className="flex items-center self-stretch w-4"></div>
           <div
              className="flex self-stretch flex-1 items-center ps-2 pe-2 gap-2"
           >
              <div>
                 <div>
                   <CircleLoader styleClass={'w-4 h-4 flex items-center justify-center'} />
                 </div>
              </div>
              <span className="item-content-text">
                 <span className="text-2a2e34">Loading...</span>
              </span>
           </div>
        </div>
     </li>

    )

}