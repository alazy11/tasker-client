

export default function TableSkeleton({length}) {

   const array = Array(length).fill('');

   return (
      <>
      {
          array.map((item,index)=>{
            return (
               <tr
               className={`border-bottom-f0f1f3`}
               key={index+1}
               >
               <td >
                  <span className="relative overflow-hidden block w-4 h-4 rounded-sm back-skeleton"></span>
               </td>
               <td className="">
                  <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </td>
               <td className="">
                  <span
                     className={`relative overflow-hidden block w-5 h-5 rounded-full back-skeleton`}
                  >
                  </span>
               </td>
               <td className="">
               <span className=" relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </td>
               <td className="">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </td>
               <td className="text-center">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </td>
            </tr>
            )
         })
      }
      </>
   );

}