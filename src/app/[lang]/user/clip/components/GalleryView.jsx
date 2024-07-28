"use Client";
import screen from "@/public/project-image/screen-recording.jpg"
import Image from "next/image";

export default function GalleryView ({clip}) {

    return (
        <div className="p-12 pt-4">

        <div _nghost-ng-c1185353688="">

            {
                clip?.map((item, index)=>{

                    return (

            <div _nghost-ng-c734340672="" key={item.clip_id + index}>

            <div className="cu-clip-card__content ">
                <a href={`/en/user/clip/${item.clip_id}`} className="cu-clip-card__link ">
                <Image src={screen} alt="cover clip" width={"100%"} height={"100%"} className="object-cover" />
                </a>

                <div className="cu-clip-card__overlay"></div>

                <div className="cu-clip-card__actions">
                    <div>
                        <button className="btn-normal clip-copy-button ">
                            <div _nghost-ng-c4133689536="">
                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                            <path fill-rule="evenodd" d="M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55Zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6Zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></path>
                            </svg>
                            </div>

                        </button>
                    </div>
                    <div>
                        <button className="btn-normal clip-copy-button ">
                            <div _nghost-ng-c4133689536="">
                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                            <path d="M19.2 13.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" ></path>
                            </svg>
                            </div>
                        </button>
                    </div>

                </div>

            </div>

            <div className="cu-clip-card__footer">

                <div className="cu-clip-card__editable-title">
                    <a href={`/en/user/clip/${item.clip_id}`} className="cu-clip-card__title">
                    {item.title}
                    </a>
                </div>

                <span className="cu-clip-card__date">
                {item.create_date}
                </span>

            </div>

        </div>

                    );

                })
            }

        </div>

    </div>
        
    )

}