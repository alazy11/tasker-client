"use client";


export default function SettingModel({children,layout='absolute',height='h-full',top='top-0',setSetting,setSettingClose,settingClose}) {


    return (
        <div className={`${layout} ${top} ltr:right-0 ltr:left-auto rtl:left-0 rtl:right-auto z-50 w-80 ${height} border-top-e8eaed border-left-e8eaed setting-model ${settingClose && "setting-model-close"} `} style={{ zIndex: 500,height:height, top:top }}>
            <button className="w-8 h-8 p-0 hover:bg-[var(--cu-background-main-hover-strong)] text-base absolute z-30 ltr:right-3 rtl:left-3 top-3 rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{

    setSettingClose(true);

    setTimeout(() => {
       setSetting(false);
       setSettingClose(false);
    }, 500);

            }}>
                <div className="w-4 h-4 flex items-center text-base justify-center text-2a2e34">
                    <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 20 20 4" />
                        <path d="M20 20 4 4" />
                    </svg>
                </div>
            </button>

            {children}

        </div>
    );

}