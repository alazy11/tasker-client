"use Client";

// import ClipOption from "./ClipOption";
import { useState } from "react";
import Clip from "./Clip";

export default function GalleryView ({clip}) {

    // const [clipOpt, setClipOpt] = useState(false);
    // const [left, setLeft] = useState('');
    // const [top, setTop] = useState('');

    return (
        <>
                <div className="p-12 pt-4 sm:px-4">

        <div _nghost-ng-c1185353688="">

            {
                clip?.map((item, index)=>{

                    return (
                        <Clip key={item.clip_id + index}
                        item={item}
                        // setClipOpt={setClipOpt}
                        // clipOpt={clipOpt}
                        // setLeft={setLeft}
                        // setTop={setTop}
                        />
                    );

                })
            }

        </div>

    </div>

    {/* {
        clipOpt && <ClipOption setClipOpt={setClipOpt}
        left={left}
        top={top}
        />
    } */}
        </>

        
    )

}