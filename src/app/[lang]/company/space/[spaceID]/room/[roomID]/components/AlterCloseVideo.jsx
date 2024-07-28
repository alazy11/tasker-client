import profile from '@/public/project-image/user-profile.jpeg';
import Image from "next/image";


export default function AlterCloseVideo({user}) {

    return(
        <div className="absolute w-full h-full top-0 left-0 z-50 p-2">
        <div className="relative w-full h-full rounded-md overflow-hidden no-camera flex items-center justify-center">

        {user.profile_path ? (

<div className="relative">
                    <div className="w-7 h-7 relative flex items-center justify-center rounded-full">
                    <Image
                       src={user.profile_path}
                       alt="profile"
                       className="w-full object-cover"
                    />
                    </div>
                </div>
                    
                 ) : (
                    <div className="relative">
                    <div className=" w-16 h-16 relative flex select-none items-center justify-center text-3xl font-normal rounded-full color-avatar uppercase " style={{backgroundColor:'rgb(123, 104, 238)'}} >
                        {user.public_name[0]}
                    </div>
                </div>
                 )}

        </div>
    </div>
    )

}