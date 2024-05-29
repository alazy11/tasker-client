



export default function Alert({type,message}) {

   return (

      <div class={`flex items-center rounded bg-${type}-light p-3.5 text-${type} dark:bg-${type}-dark-light`}>
      <span class="ltr:pr-2 rtl:pl-2"><strong class="ltr:mr-1 rtl:ml-1 capitalize">{type}!</strong>{message}</span>
      <button type="button" class="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
      </button>
      </div>

   );

}