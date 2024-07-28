import notfoundroom from "@/public/project-image/notfoundroom.svg";
import Image from "next/image";


export default function NotFoundRoom({spaceID}) {

    return (
        <div className="h-full w-full fixed top-0 left-0 cont-meet ">
        <div className="flex items-center justify-center h-full w-full">
            <div className="">
                <div className="notfountroom-img relative">
                    <Image src={notfoundroom} alt="not found room" className="w-full h-auto " fill />
                </div>

                <div className="text-xl font-semibold text-center ">
                    This Room Not Exist. 
                </div>

                <div className="text-xl font-semibold text-center ">
                    <button className="btn-normal m-auto mt-3">
                    <a href={`/en/company/space/${spaceID}`}>
                            go back
                        </a>
                    </button>
                </div>

            </div>
        </div>
        </div>

    );

}