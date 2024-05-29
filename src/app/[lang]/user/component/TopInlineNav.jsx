


export default function TopInlineNav({children}) {
   return (
      <div>
         <div className="h-12 w-full flex items-center justify-between border-b border-solid border-b-gray-200">
            {children}
         </div>
      </div>
   );
}