

export default function TableSkeleton({length}) {

   const array = Array(length).fill('');

   return (
      <>
      {
          array.map((item,index)=>{
            return (
               <div
               className={`border-bottom-f0f1f3 w-full flex items-center h-6`}
               key={index+1}
               >
               <div style={{width:'5%',justifyContent:'center'}} className="table-grid-body_row-cell justify-center" >
                  <span className="relative overflow-hidden block w-4 h-4 rounded-sm back-skeleton justify-center">
                  </span>
               </div>
               <div style={{width:'18%'}} className="table-grid-body_row-cell">
                  <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell" >
               <span className=" relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell" >
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell" >
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'12%'}} className="table-grid-body_row-cell">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
               <div style={{width:'5%',justifyContent:'center'}} className="table-grid-body_row-cell justify-center">
               <span className="relative overflow-hidden block w-5/6 h-4 rounded-sm back-skeleton">
                  </span>
               </div>
            </div>
            )
         })
      }
      </>
   );

}