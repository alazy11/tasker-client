
import DropDownModel from '@/app/[lang]/component/DropDownModel';
import dynamic from 'next/dynamic';
 
const Icons = dynamic(
  () => import('./Icons'),
  {
    loading: () => <p>Loading...</p>,
  }
)

const colorIcon = ['#8077f1', '#6a85ff', '#40a6e5', '#3fb1b2', '#64c6a2', '#f9be34', '#e78845', '#dc646a', '#f17ead', '#c580e6', '#bba399', '#595d66'];
// const backcolorIcon = ['cu-project-avatar__space-bg-purple', 'cu-project-avatar__space-bg-neon-blue', 'cu-project-avatar__space-bg-azure-blue', 'cu-project-avatar__space-bg-teal', 'cu-project-avatar__space-bg-mint', 'cu-project-avatar__space-bg-yellow', 'cu-project-avatar__space-bg-orange', 'cu-project-avatar__space-bg-red', 'cu-project-avatar__space-bg-pink', 'cu-project-avatar__space-bg-violet', 'cu-project-avatar__space-bg-brown', 'cu-project-avatar__space-bg-black'];

const backcolorIcon = [
   [ '#8077f1', 'cu-project-avatar__space-bg-purple' ],
   [ '#6a85ff', 'cu-project-avatar__space-bg-neon-blue' ],
   [ '#40a6e5', 'cu-project-avatar__space-bg-azure-blue' ],
   [ '#3fb1b2', 'cu-project-avatar__space-bg-teal' ],
   [ '#64c6a2', 'cu-project-avatar__space-bg-mint' ],
   [ '#f9be34', 'cu-project-avatar__space-bg-yellow' ],
   [ '#e78845', 'cu-project-avatar__space-bg-orange' ],
   [ '#dc646a', 'cu-project-avatar__space-bg-red' ],
   [ '#f17ead', 'cu-project-avatar__space-bg-pink' ],
   [ '#c580e6', 'cu-project-avatar__space-bg-violet' ],
   [ '#bba399', 'cu-project-avatar__space-bg-brown' ],
   [ '#595d66', 'cu-project-avatar__space-bg-black' ]
 ]


export default function IconSpace({setShowIcon, setSelectColor, setIcon, SetActiveIcon, inputRef, setPathIcon, setTextIcon}) {
   return (

      <DropDownModel setShowIcon={setShowIcon} >
         <div className='h-full m-auto relative' style={{width:'480px', maxWidth:'100%' }}>

<div className="absolute z-2700 left-6 drop-menu-shadow bg-white rounded-md min-w-40 overflow-y-auto " style={{ maxHeight:" calc(100vh - 20px)", top:'52%'}}>
                     <div className='block width-drop-menu relative pb-4'>
                        <div className='mt-2 mb-1 pt-2 pb-2 pe-4 ps-4 w-full'>
                           <div className='color-500 text-xs font-semibold uppercase tracking-wider' style={{fontSize:'11px'}}>
                              SPACE COLOR
                           </div>
                        </div>

                        <div className='m-4 mt-0 '>
                           <ul className='flex relative flex-wrap -m-1 '>

                              {
                                 backcolorIcon.map(color=>{
                                    return (
                                       <li key={color[0]}>
                                          {/* color-active */}
                                       <button className={`h-7 w-7 flex items-center justify-center border-none rounded-full hover:border-2 hover:border-solid hover:border-gray-300`} data-color={color[1]} style={{color:color[0]}} onClick={(e)=>{
                                          setSelectColor(e.target.dataset.color);
                                          e.currentTarget.classList.add('color-active');
                                          // SetActiveIcon('active-icon')
                                       }}>
                                          <span className='trans-color w-5 h-5 rounded-full bg-current' data-color={color[1]}>
                                          </span>
                                       </button>
                                    </li>
                                    )
                                 })
                              }
                           </ul>
                        </div>

                        <div className='pt-2.5 border-top-e8eaed'>
                           <div className='fileUload'>
                              <div>
                                 + Upload
                                 <input type="file" name="iconspace" id="" className='z-1' style={{zIndex:1}} accept='image/*' onChange={(e)=>{

                                    console.log(e.target.files[0])
                                    setPathIcon(e.target.files[0]);
                                 }} />
                              </div>
                           </div>

                           <div>
                              <div>
                                 <div className='searchicon'>
                                    <input type="text" placeholder="Search avatars" autoComplete='off' />
                                    <div className='searchi'>
                                    <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
<path d="M15.857 15.86 21 21.001"></path>
</svg>
                                    </div>
                                 </div>
                              </div>

                              <div className='icon-container scroll-bar'>
                                 <div className='inner-icon-container'>
                                    <Icons inputRef={inputRef} setIcon={setIcon} SetActiveIcon={SetActiveIcon} setTextIcon={setTextIcon} />
                                 </div>
                              </div>
                        
                           </div>

                        </div>
                     </div>
               </div>

</div>

      </DropDownModel>


      // <div className="w-full h-full fixed top-0 left-0 z-2000">
      //    <div className="relative w-full h-full top-0 left-0">
      //       <div className="absolute w-full h-full top-0 left-0 z-2000" onClick={(e)=>{
      //          setShowIcon(false);
      //       }}></div>



      //    </div>
      // </div>
   )
}