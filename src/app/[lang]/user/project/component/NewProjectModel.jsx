
import Editor from '@/app/[lang]/component/Editor';

export default function NewProjectModel() {
   return (
      <div id="headlessui-portal-root">
      <div data-headlessui-portal="">
         <button
            type="button"
            data-headlessui-focus-guard="true"
            aria-hidden="true"
            style={{position: "fixed", top: "1px", left: "1px", width: "1px", height: "0px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", borderWidth: "0px"}}
         ></button>
         <div>
            <div
               className="relative z-[51]"
               id="headlessui-dialog-:r0:"
               role="dialog"
               aria-modal="true"
               data-headlessui-state="open"
            >
               <div className="fixed inset-0 bg-[black]/60 opacity-100"></div>
               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center px-4 py-8">
                     <div
                        className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark opacity-100 scale-100"
                        id="headlessui-dialog-panel-:r1:"
                        data-headlessui-state="open"
                     >
                        <button
                           type="button"
                           className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                           </svg>
                        </button>
                        <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                           Add Task
                        </div>
                        <div className="p-5">
                           <form>
                              <div className="mb-5">
                                 <label for="title">Title</label>
                                 <input
                                    id="title"
                                    type="text"
                                    placeholder="Enter Task Title"
                                    className="form-input"
                                    value=""
                                 />
                              </div>
                              <div className="mb-5">
                                 <label for="assignee">Assignee</label>
                                 <select id="assignee" className="form-select">
                                    <option value="">Select Assignee</option>
                                    <option value="John Smith">
                                       John Smith
                                    </option>
                                    <option value="Kia Vega">Kia Vega</option>
                                    <option value="Sandy Doe">Sandy Doe</option>
                                    <option value="Jane Foster">
                                       Jane Foster
                                    </option>
                                    <option value="Donna Frank">
                                       Donna Frank
                                    </option>
                                 </select>
                              </div>
                              <div className="mb-5 flex justify-between gap-4">
                                 <div className="flex-1">
                                    <label for="tag">Tag</label>
                                    <select id="tag" className="form-select">
                                       <option value="">Select Tag</option>
                                       <option value="team">Team</option>
                                       <option value="update">Update</option>
                                    </select>
                                 </div>
                                 <div className="flex-1">
                                    <label for="priority">Priority</label>
                                    <select id="priority" className="form-select">
                                       <option value="">Select Priority</option>
                                       <option value="low">Low</option>
                                       <option value="medium">Medium</option>
                                       <option value="high">High</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="mb-5">
                                 <label>Description</label>
                                 <div style={{minHeight: "200px"}} className="quill ">
                                    <Editor />
                                 </div>
                              </div>
                              <div className="ltr:text-right rtl:text-left flex justify-end items-center mt-8">
                                 <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                 >
                                    Cancel
                                 </button>
                                 <button
                                    type="button"
                                    className="btn btn-primary ltr:ml-4 rtl:mr-4"
                                 >
                                    Add
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button
            type="button"
            data-headlessui-focus-guard="true"
            aria-hidden="true"
            style={{position: "fixed", top: "1px", left: "1px", width: "1px", height: "0px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", borderWidth: "0px"}}
         ></button>
      </div>
   </div>
   );
}
