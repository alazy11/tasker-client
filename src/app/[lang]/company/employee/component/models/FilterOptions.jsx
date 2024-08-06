"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";

export default function FilterOptions({setFilterOptions,top,left}) {

    return(
        <DropDownModel setShowIcon={setFilterOptions}>
        <div
           className="h-full m-auto relative w-full"
        >
           <div
            //   className="absolute z-2700 ltr:right-3 rtl:left-3 drop-menu-shadow bg-white rounded-md min-w-40 overflow-y-auto flex flex-col pt-2 pb-2"
              className={`cu-dropdown__menu cu-dropdown__menu-filter top-[${top}] overflow-hidden left-[${left}]`}
           >
            <div>
                <div className="cu-search-input__inner_filter">
                    <input type="text" placeholder="Search..." autoComplete="off" className="cu-search-input__input" />
                    <div className="cu-search-input__icon">
                    <svg className="w-full h-full block" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M15.59 15.924a6.889 6.889 0 1 1 .334-.334 1.002 1.002 0 0 0-.334.334zm.837 1.918a8.889 8.889 0 1 1 1.414-1.414l3.755 3.754a1 1 0 0 1-1.414 1.414l-3.755-3.754z" clipRule="evenodd"></path>
                    </svg>
                    </div>
                </div>
            </div>

            <div className="h-[277px] scroll-bar my-2 overflow-auto contain-strict will-change-scroll block relative">
                <div className="min-w-full min-h-full">
                    <div className="px-2 flex flex-col">
                        <div className="cu-filter-value-add-dropdown-list__item">
                            status
                        </div>
                        <div className="cu-filter-value-add-dropdown-list__item">
                            status
                        </div>
                        <div className="cu-filter-value-add-dropdown-list__item">
                            status
                        </div>
                        <div className="cu-filter-value-add-dropdown-list__item">
                            status
                        </div>
                    </div>
                </div>
            </div>

           </div>
           </div>
           </DropDownModel>
    )

}