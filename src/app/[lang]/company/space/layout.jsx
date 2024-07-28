

export default function RootSpace({children}) {

   return(
      <div className='flex flex-col h-full relative overflow-x-hidden'>
      {children}
      </div>
   );
}