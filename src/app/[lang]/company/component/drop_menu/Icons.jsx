export default function Icons({ setIcon, SetActiveIcon, setTextIcon }) {
   return (
      <ul>
         <ul role="list" aria-label="Avatar Options">
            <li role="listitem">
               <button
                  role="button"
                  attrdata-test="avatar-initial-icon"
                  class="cu-avatar-picker__icons-item cu-avatar-picker__icons-item_selected ng-star-inserted"
                  aria-pressed="true"
               >
                  <span class="cu-avatar-picker__letter">M</span>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__address-book"
                  aria-pressed="false"
                  aria-label="address-book"
                  onClick={(e) => {
                     setIcon(e.currentTarget.innerHTML);
                     SetActiveIcon("active-icon");
                     setTextIcon(null);
                  }}
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="address-book"
                        class="svg-inline--fa fa-address-book fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bug"
                  aria-pressed="false"
                  aria-label="bug"
                  onClick={(e) => {
                     setIcon(e.currentTarget.innerHTML);
                     SetActiveIcon("active-icon");
                     setTextIcon(null);
                  }}
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bug"
                        class="svg-inline--fa fa-bug fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>

            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__desktop"
                  aria-pressed="false"
                  aria-label="desktop"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="desktop"
                        class="svg-inline--fa fa-desktop fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__globe"
                  aria-pressed="false"
                  aria-label="globe"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="globe"
                        class="svg-inline--fa fa-globe fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-days"
                  aria-pressed="false"
                  aria-label="calendar-days"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-days"
                        class="svg-inline--fa fa-calendar-days fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user"
                  aria-pressed="false"
                  aria-label="user"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user"
                        class="svg-inline--fa fa-user fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__landmark"
                  aria-pressed="false"
                  aria-label="landmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="landmark"
                        class="svg-inline--fa fa-landmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__clipboard-list"
                  aria-pressed="false"
                  aria-label="clipboard-list"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clipboard-list"
                        class="svg-inline--fa fa-clipboard-list fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__mug-saucer"
                  aria-pressed="false"
                  aria-label="mug-saucer"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="mug-saucer"
                        class="svg-inline--fa fa-mug-saucer fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__eye"
                  aria-pressed="false"
                  aria-label="eye"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        class="svg-inline--fa fa-eye fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__power-off"
                  aria-pressed="false"
                  aria-label="power-off"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="power-off"
                        class="svg-inline--fa fa-power-off fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__folder"
                  aria-pressed="false"
                  aria-label="folder"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="folder"
                        class="svg-inline--fa fa-folder fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-lines"
                  aria-pressed="false"
                  aria-label="file-lines"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-lines"
                        class="svg-inline--fa fa-file-lines fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pizza-slice"
                  aria-pressed="false"
                  aria-label="pizza-slice"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pizza-slice"
                        class="svg-inline--fa fa-pizza-slice fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wifi"
                  aria-pressed="false"
                  aria-label="wifi"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wifi"
                        class="svg-inline--fa fa-wifi fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__camera"
                  aria-pressed="false"
                  aria-label="camera"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="camera"
                        class="svg-inline--fa fa-camera fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__comment"
                  aria-pressed="false"
                  aria-label="comment"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comment"
                        class="svg-inline--fa fa-comment fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__envelope"
                  aria-pressed="false"
                  aria-label="envelope"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        class="svg-inline--fa fa-envelope fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__gift"
                  aria-pressed="false"
                  aria-label="gift"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="gift"
                        class="svg-inline--fa fa-gift fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__info"
                  aria-pressed="false"
                  aria-label="info"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="info"
                        class="svg-inline--fa fa-info fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__image"
                  aria-pressed="false"
                  aria-label="image"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="image"
                        class="svg-inline--fa fa-image fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__key"
                  aria-pressed="false"
                  aria-label="key"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="key"
                        class="svg-inline--fa fa-key fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__lock"
                  aria-pressed="false"
                  aria-label="lock"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lock"
                        class="svg-inline--fa fa-lock fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__lightbulb"
                  aria-pressed="false"
                  aria-label="lightbulb"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lightbulb"
                        class="svg-inline--fa fa-lightbulb fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__music"
                  aria-pressed="false"
                  aria-label="music"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="music"
                        class="svg-inline--fa fa-music fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paperclip"
                  aria-pressed="false"
                  aria-label="paperclip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paperclip"
                        class="svg-inline--fa fa-paperclip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__plus"
                  aria-pressed="false"
                  aria-label="plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        class="svg-inline--fa fa-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__share-nodes"
                  aria-pressed="false"
                  aria-label="share-nodes"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="share-nodes"
                        class="svg-inline--fa fa-share-nodes fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-user"
                  aria-pressed="false"
                  aria-label="circle-user"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-user"
                        class="svg-inline--fa fa-circle-user fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-secret"
                  aria-pressed="false"
                  aria-label="user-secret"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-secret"
                        class="svg-inline--fa fa-user-secret fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__snowflake"
                  aria-pressed="false"
                  aria-label="snowflake"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="snowflake"
                        class="svg-inline--fa fa-snowflake fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__accessible-icon"
                  aria-pressed="false"
                  aria-label="accessible-icon"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="accessible-icon"
                        class="svg-inline--fa fa-accessible-icon fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rectangle-ad"
                  aria-pressed="false"
                  aria-label="rectangle-ad"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rectangle-ad"
                        class="svg-inline--fa fa-rectangle-ad fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__address-card"
                  aria-pressed="false"
                  aria-label="address-card"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="address-card"
                        class="svg-inline--fa fa-address-card fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-half-stroke"
                  aria-pressed="false"
                  aria-label="circle-half-stroke"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-half-stroke"
                        class="svg-inline--fa fa-circle-half-stroke fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hands-asl-interpreting"
                  aria-pressed="false"
                  aria-label="hands-asl-interpreting"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hands-asl-interpreting"
                        class="svg-inline--fa fa-hands-asl-interpreting fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M156.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L13.5 189.4C4.6 207.2 0 226.8 0 246.7V256c0 70.7 57.3 128 128 128h72 8v-.3c35.2-2.7 65.4-22.8 82.1-51.7c8.8-15.3 3.6-34.9-11.7-43.7s-34.9-3.6-43.7 11.7c-7 12-19.9 20-34.7 20c-22.1 0-40-17.9-40-40s17.9-40 40-40c14.8 0 27.7 8 34.7 20c8.8 15.3 28.4 20.5 43.7 11.7s20.5-28.4 11.7-43.7c-12.8-22.1-33.6-39.1-58.4-47.1l80.8-22c17-4.6 27.1-22.2 22.5-39.3s-22.2-27.1-39.3-22.5L194.9 124.6l81.6-68c13.6-11.3 15.4-31.5 4.1-45.1S249.1-3.9 235.5 7.4L133.6 92.3l23-46zM483.4 465.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l85.9-171.7c8.9-17.8 13.5-37.4 13.5-57.2V256c0-70.7-57.3-128-128-128H440h-8v.3c-35.2 2.7-65.4 22.8-82.1 51.7c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c7-12 19.9-20 34.7-20c22.1 0 40 17.9 40 40s-17.9 40-40 40c-14.8 0-27.7-8-34.7-20c-8.9-15.3-28.4-20.5-43.7-11.7s-20.5 28.4-11.7 43.7c12.8 22.1 33.6 39.1 58.4 47.1l-80.8 22c-17.1 4.7-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5l100.7-27.5-81.6 68c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1l101.9-84.9-23 46z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__angular"
                  aria-pressed="false"
                  aria-label="angular"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="angular"
                        class="svg-inline--fa fa-angular fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__apple-whole"
                  aria-pressed="false"
                  aria-label="apple-whole"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="apple-whole"
                        class="svg-inline--fa fa-apple-whole fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__box-archive"
                  aria-pressed="false"
                  aria-label="box-archive"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="box-archive"
                        class="svg-inline--fa fa-box-archive fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__archway"
                  aria-pressed="false"
                  aria-label="archway"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="archway"
                        class="svg-inline--fa fa-archway fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H96h64V352c0-53 43-96 96-96s96 43 96 96V480h64 64c17.7 0 32-14.3 32-32s-14.3-32-32-32V128H32V416z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ear-listen"
                  aria-pressed="false"
                  aria-label="ear-listen"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ear-listen"
                        class="svg-inline--fa fa-ear-listen fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M398.3 3.4c-15.8-7.9-35-1.5-42.9 14.3c-7.9 15.8-1.5 34.9 14.2 42.9l.4 .2c.4 .2 1.1 .6 2.1 1.2c2 1.2 5 3 8.7 5.6c7.5 5.2 17.6 13.2 27.7 24.2C428.5 113.4 448 146 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32c0-66-28.5-113.4-56.5-143.7C441.6 33.2 427.7 22.2 417.3 15c-5.3-3.7-9.7-6.4-13-8.3c-1.6-1-3-1.7-4-2.2c-.5-.3-.9-.5-1.2-.7l-.4-.2-.2-.1-.1 0 0 0c0 0 0 0-14.3 28.6L398.3 3.4zM128.7 227.5c6.2-56 53.7-99.5 111.3-99.5c61.9 0 112 50.1 112 112c0 29.3-11.2 55.9-29.6 75.9c-17 18.4-34.4 45.1-34.4 78V400c0 26.5-21.5 48-48 48c-17.7 0-32 14.3-32 32s14.3 32 32 32c61.9 0 112-50.1 112-112v-6.1c0-9.8 5.4-21.7 17.4-34.7C398.3 327.9 416 286 416 240c0-97.2-78.8-176-176-176C149.4 64 74.8 132.5 65.1 220.5c-1.9 17.6 10.7 33.4 28.3 35.3s33.4-10.7 35.3-28.3zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0zM208 240c0-17.7 14.3-32 32-32s32 14.3 32 32c0 13.3 10.7 24 24 24s24-10.7 24-24c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__at"
                  aria-pressed="false"
                  aria-label="at"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="at"
                        class="svg-inline--fa fa-at fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__book-atlas"
                  aria-pressed="false"
                  aria-label="book-atlas"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="book-atlas"
                        class="svg-inline--fa fa-book-atlas fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2 4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5 22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7 27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65.9zM368 192a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65.9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4 65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2 56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__audio-description"
                  aria-pressed="false"
                  aria-label="audio-description"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="audio-description"
                        class="svg-inline--fa fa-audio-description fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM213.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-9.4-18.9H150.9l-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zm-.4 106.6L192 237.7l-21.1 42.2h42.2zM304 184c0-13.3 10.7-24 24-24h56c53 0 96 43 96 96s-43 96-96 96H328c-13.3 0-24-10.7-24-24V184zm48 24v96h32c26.5 0 48-21.5 48-48s-21.5-48-48-48H352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__baby"
                  aria-pressed="false"
                  aria-label="baby"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="baby"
                        class="svg-inline--fa fa-baby fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__baby-carriage"
                  aria-pressed="false"
                  aria-label="baby-carriage"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="baby-carriage"
                        class="svg-inline--fa fa-baby-carriage fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 192H.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192zm128-32c0-35.3 28.7-64 64-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0v64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3s-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6s-51.9-23.8-72.7-41.6s-37.3-39-48.6-62.3S0 249.2 0 224l224 0 160 0V160zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm240 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__backward"
                  aria-pressed="false"
                  aria-label="backward"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="backward"
                        class="svg-inline--fa fa-backward fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bacon"
                  aria-pressed="false"
                  aria-label="bacon"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bacon"
                        class="svg-inline--fa fa-bacon fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4c-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7L37.9 435.2 9.4 406.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5C136.1 296.2 180.9 231 223.3 169.3l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9c33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1c27.5-24.3 63.4-45.2 117.3-60.6l0 0 .2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2c-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2C327.8 365.9 275.5 442 142.3 508.6c-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__scale-balanced"
                  aria-pressed="false"
                  aria-label="scale-balanced"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="scale-balanced"
                        class="svg-inline--fa fa-scale-balanced fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__scale-unbalanced"
                  aria-pressed="false"
                  aria-label="scale-unbalanced"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="scale-unbalanced"
                        class="svg-inline--fa fa-scale-unbalanced fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M522.1 62.4c16.8-5.6 25.8-23.7 20.2-40.5S518.6-3.9 501.9 1.6l-113 37.7C375 15.8 349.3 0 320 0c-44.2 0-80 35.8-80 80c0 3 .2 5.9 .5 8.8L117.9 129.6c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2V480c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V153.3c21-9.2 37.2-27 44.2-49l125.9-42zM439.6 288L512 163.8 584.4 288H439.6zM512 384c62.9 0 115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L536.1 109.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L392.7 273.1c-5.7 9.8-9.3 21.1-6.7 32.1C396.8 350 449.1 384 512 384zM129.2 291.8L201.6 416H56.7l72.4-124.2zM3.2 433.1C14 478 66.3 512 129.2 512s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L153.2 237.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L9.9 401.1c-5.7 9.8-9.3 21.1-6.7 32.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__scale-unbalanced-flip"
                  aria-pressed="false"
                  aria-label="scale-unbalanced-flip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="scale-unbalanced-flip"
                        class="svg-inline--fa fa-scale-unbalanced-flip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L366.4 145.2c-4.5 3.2-9.3 5.9-14.4 8.2V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-21-9.2-37.2-27-44.2-49l-125.9-42zM200.4 288L128 163.8 55.6 288H200.4zM128 384C65.1 384 12.8 350 2 305.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C243.2 350 190.9 384 128 384zm382.8-92.2L438.4 416H583.3L510.8 291.8zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ban"
                  aria-pressed="false"
                  aria-label="ban"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ban"
                        class="svg-inline--fa fa-ban fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__barcode"
                  aria-pressed="false"
                  aria-label="barcode"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="barcode"
                        class="svg-inline--fa fa-barcode fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__baseball"
                  aria-pressed="false"
                  aria-label="baseball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="baseball"
                        class="svg-inline--fa fa-baseball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M62.7 223.4c-4.8 .4-9.7 .6-14.7 .6c-15.6 0-30.8-2-45.2-5.9C19.2 107.1 107.1 19.2 218.1 2.8C222 17.2 224 32.4 224 48c0 4.9-.2 9.8-.6 14.7c-.7 8.8 5.8 16.5 14.6 17.3s16.5-5.8 17.3-14.6c.5-5.7 .7-11.5 .7-17.3c0-16.5-1.9-32.6-5.6-47.9c1.8 0 3.7-.1 5.6-.1C397.4 0 512 114.6 512 256c0 1.9 0 3.7-.1 5.6c-15.4-3.6-31.4-5.6-47.9-5.6c-5.8 0-11.6 .2-17.3 .7c-8.8 .7-15.4 8.5-14.6 17.3s8.5 15.4 17.3 14.6c4.8-.4 9.7-.6 14.7-.6c15.6 0 30.8 2 45.2 5.9C492.8 404.9 404.9 492.8 293.9 509.2C290 494.8 288 479.6 288 464c0-4.9 .2-9.8 .6-14.7c.7-8.8-5.8-16.5-14.6-17.3s-16.5 5.8-17.3 14.6c-.5 5.7-.7 11.5-.7 17.3c0 16.5 1.9 32.6 5.6 47.9c-1.8 0-3.7 .1-5.6 .1C114.6 512 0 397.4 0 256c0-1.9 0-3.7 .1-5.6C15.4 254.1 31.5 256 48 256c5.8 0 11.6-.2 17.3-.7c8.8-.7 15.4-8.5 14.6-17.3s-8.5-15.4-17.3-14.6zM121.3 208c-8 3.7-11.6 13.2-7.9 21.2s13.2 11.6 21.2 7.9c45.2-20.8 81.7-57.2 102.5-102.5c3.7-8 .2-17.5-7.9-21.2s-17.5-.2-21.2 7.9c-17.6 38.3-48.5 69.2-86.7 86.7zm277.2 74.7c-3.7-8-13.2-11.6-21.2-7.9c-45.2 20.8-81.7 57.2-102.5 102.5c-3.7 8-.2 17.5 7.9 21.2s17.5 .2 21.2-7.9c17.6-38.3 48.5-69.2 86.7-86.7c8-3.7 11.6-13.2 7.9-21.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__basketball"
                  aria-pressed="false"
                  aria-label="basketball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basketball"
                        class="svg-inline--fa fa-basketball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bath"
                  aria-pressed="false"
                  aria-label="bath"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bath"
                        class="svg-inline--fa fa-bath fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__battery-empty"
                  aria-pressed="false"
                  aria-label="battery-empty"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="battery-empty"
                        class="svg-inline--fa fa-battery-empty fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 160c-8.8 0-16 7.2-16 16V336c0 8.8 7.2 16 16 16H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80zM0 176c0-44.2 35.8-80 80-80H464c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__battery-full"
                  aria-pressed="false"
                  aria-label="battery-full"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="battery-full"
                        class="svg-inline--fa fa-battery-full fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm368 96H96V320H448V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__battery-half"
                  aria-pressed="false"
                  aria-label="battery-half"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="battery-half"
                        class="svg-inline--fa fa-battery-half fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm208 96H96V320H288V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__battery-quarter"
                  aria-pressed="false"
                  aria-label="battery-quarter"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="battery-quarter"
                        class="svg-inline--fa fa-battery-quarter fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm112 96H96V320h96V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__battery-three-quarters"
                  aria-pressed="false"
                  aria-label="battery-three-quarters"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="battery-three-quarters"
                        class="svg-inline--fa fa-battery-three-quarters fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm272 96H96V320H352V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bed"
                  aria-pressed="false"
                  aria-label="bed"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bed"
                        class="svg-inline--fa fa-bed fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bell"
                  aria-pressed="false"
                  aria-label="bell"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell"
                        class="svg-inline--fa fa-bell fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bell-slash"
                  aria-pressed="false"
                  aria-label="bell-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell-slash"
                        class="svg-inline--fa fa-bell-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6c.5-1.7 .7-3.5 .7-5.4c0-27.6-11-54.1-30.5-73.7L512 320c-20.5-20.5-32-48.3-32-77.3V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM160 242.7c0 29-11.5 56.8-32 77.3l-1.5 1.5C107 341 96 367.5 96 395.2c0 11.5 9.3 20.8 20.8 20.8H406.2L160 222.1v20.7zM384 448H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bezier-curve"
                  aria-pressed="false"
                  aria-label="bezier-curve"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bezier-curve"
                        class="svg-inline--fa fa-bezier-curve fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M296 136V88h48v48H296zM288 32c-26.5 0-48 21.5-48 48v4H121.6C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36h66.9c-58.9 39.6-98.9 105-104 180H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-3.3c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1h64c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1H496c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-4.5c-5-75-45.1-140.4-104-180h66.9c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36H400V80c0-26.5-21.5-48-48-48H288zM88 376h48v48H88V376zm416 48V376h48v48H504z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bicycle"
                  aria-pressed="false"
                  aria-label="bicycle"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bicycle"
                        class="svg-inline--fa fa-bicycle fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-biking"
                  aria-pressed="false"
                  aria-label="person-biking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-biking"
                        class="svg-inline--fa fa-person-biking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cake-candles"
                  aria-pressed="false"
                  aria-label="cake-candles"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cake-candles"
                        class="svg-inline--fa fa-cake-candles fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bitcoin"
                  aria-pressed="false"
                  aria-label="bitcoin"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="bitcoin"
                        class="svg-inline--fa fa-bitcoin fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-walking-with-cane"
                  aria-pressed="false"
                  aria-label="person-walking-with-cane"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-walking-with-cane"
                        class="svg-inline--fa fa-person-walking-with-cane fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8.4 32c-36.4 0-69.6 20.5-85.9 53.1L35.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L128 231.6v43.2c0 17 6.7 33.3 18.7 45.3L224 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V390.6c0-12.7-5.1-24.9-14.1-33.9L224 306.7V213.3l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8L268.8 166.4C250.7 142.2 222.2 128 192 128H167.6zM128.3 346.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zM450.8 505.1c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3c-5 3.8-10.5 6.4-16.2 7.9L450.8 505.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__blog"
                  aria-pressed="false"
                  aria-label="blog"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="blog"
                        class="svg-inline--fa fa-blog fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bluetooth"
                  aria-pressed="false"
                  aria-label="bluetooth"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="bluetooth"
                        class="svg-inline--fa fa-bluetooth fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bluetooth-b"
                  aria-pressed="false"
                  aria-label="bluetooth-b"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="bluetooth-b"
                        class="svg-inline--fa fa-bluetooth-b fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bone"
                  aria-pressed="false"
                  aria-label="bone"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bone"
                        class="svg-inline--fa fa-bone fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__book"
                  aria-pressed="false"
                  aria-label="book"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="book"
                        class="svg-inline--fa fa-book fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bookmark"
                  aria-pressed="false"
                  aria-label="bookmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bookmark"
                        class="svg-inline--fa fa-bookmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bowling-ball"
                  aria-pressed="false"
                  aria-label="bowling-ball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bowling-ball"
                        class="svg-inline--fa fa-bowling-ball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__box"
                  aria-pressed="false"
                  aria-label="box"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="box"
                        class="svg-inline--fa fa-box fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__boxes-stacked"
                  aria-pressed="false"
                  aria-label="boxes-stacked"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="boxes-stacked"
                        class="svg-inline--fa fa-boxes-stacked fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bread-slice"
                  aria-pressed="false"
                  aria-label="bread-slice"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bread-slice"
                        class="svg-inline--fa fa-bread-slice fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64V432c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__briefcase"
                  aria-pressed="false"
                  aria-label="briefcase"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="briefcase"
                        class="svg-inline--fa fa-briefcase fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tower-broadcast"
                  aria-pressed="false"
                  aria-label="tower-broadcast"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tower-broadcast"
                        class="svg-inline--fa fa-tower-broadcast fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80.3 44C69.8 69.9 64 98.2 64 128s5.8 58.1 16.3 84c6.6 16.4-1.3 35-17.7 41.7s-35-1.3-41.7-17.7C7.4 202.6 0 166.1 0 128S7.4 53.4 20.9 20C27.6 3.6 46.2-4.3 62.6 2.3S86.9 27.6 80.3 44zM555.1 20C568.6 53.4 576 89.9 576 128s-7.4 74.6-20.9 108c-6.6 16.4-25.3 24.3-41.7 17.7S489.1 228.4 495.7 212c10.5-25.9 16.3-54.2 16.3-84s-5.8-58.1-16.3-84C489.1 27.6 497 9 513.4 2.3s35 1.3 41.7 17.7zM352 128c0 23.7-12.9 44.4-32 55.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V183.4c-19.1-11.1-32-31.7-32-55.4c0-35.3 28.7-64 64-64s64 28.7 64 64zM170.6 76.8C163.8 92.4 160 109.7 160 128s3.8 35.6 10.6 51.2c7.1 16.2-.3 35.1-16.5 42.1s-35.1-.3-42.1-16.5c-10.3-23.6-16-49.6-16-76.8s5.7-53.2 16-76.8c7.1-16.2 25.9-23.6 42.1-16.5s23.6 25.9 16.5 42.1zM464 51.2c10.3 23.6 16 49.6 16 76.8s-5.7 53.2-16 76.8c-7.1 16.2-25.9 23.6-42.1 16.5s-23.6-25.9-16.5-42.1c6.8-15.6 10.6-32.9 10.6-51.2s-3.8-35.6-10.6-51.2c-7.1-16.2 .3-35.1 16.5-42.1s35.1 .3 42.1 16.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__brush"
                  aria-pressed="false"
                  aria-label="brush"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="brush"
                        class="svg-inline--fa fa-brush fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__btc"
                  aria-pressed="false"
                  aria-label="btc"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="btc"
                        class="svg-inline--fa fa-btc fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M310.204 242.638c27.73-14.18 45.377-39.39 41.28-81.3-5.358-57.351-52.458-76.573-114.85-81.929V0h-48.528v77.203c-12.605 0-25.525.315-38.444.63V0h-48.528v79.409c-17.842.539-38.622.276-97.37 0v51.678c38.314-.678 58.417-3.14 63.023 21.427v217.429c-2.925 19.492-18.524 16.685-53.255 16.071L3.765 443.68c88.481 0 97.37.315 97.37.315V512h48.528v-67.06c13.234.315 26.154.315 38.444.315V512h48.528v-68.005c81.299-4.412 135.647-24.894 142.895-101.467 5.671-61.446-23.32-88.862-69.326-99.89zM150.608 134.553c27.415 0 113.126-8.507 113.126 48.528 0 54.515-85.71 48.212-113.126 48.212v-96.74zm0 251.776V279.821c32.772 0 133.127-9.138 133.127 53.255-.001 60.186-100.355 53.253-133.127 53.253z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__building"
                  aria-pressed="false"
                  aria-label="building"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="building"
                        class="svg-inline--fa fa-building fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bullhorn"
                  aria-pressed="false"
                  aria-label="bullhorn"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bullhorn"
                        class="svg-inline--fa fa-bullhorn fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bullseye"
                  aria-pressed="false"
                  aria-label="bullseye"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bullseye"
                        class="svg-inline--fa fa-bullseye fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fire-flame-simple"
                  aria-pressed="false"
                  aria-label="fire-flame-simple"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fire-flame-simple"
                        class="svg-inline--fa fa-fire-flame-simple fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M372.5 256.5l-.7-1.9C337.8 160.8 282 76.5 209.1 8.5l-3.3-3C202.1 2 197.1 0 192 0s-10.1 2-13.8 5.5l-3.3 3C102 76.5 46.2 160.8 12.2 254.6l-.7 1.9C3.9 277.3 0 299.4 0 321.6C0 426.7 86.8 512 192 512s192-85.3 192-190.4c0-22.2-3.9-44.2-11.5-65.1zm-90.8 49.5c4.1 9.3 6.2 19.4 6.2 29.5c0 53-43 96.5-96 96.5s-96-43.5-96-96.5c0-10.1 2.1-20.3 6.2-29.5l1.9-4.3c15.8-35.4 37.9-67.7 65.3-95.1l8.9-8.9c3.6-3.6 8.5-5.6 13.6-5.6s10 2 13.6 5.6l8.9 8.9c27.4 27.4 49.6 59.7 65.3 95.1l1.9 4.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bus"
                  aria-pressed="false"
                  aria-label="bus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bus"
                        class="svg-inline--fa fa-bus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bus-simple"
                  aria-pressed="false"
                  aria-label="bus-simple"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bus-simple"
                        class="svg-inline--fa fa-bus-simple fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 0C348.8 0 448 35.2 448 80V96 416c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32V96 80C0 35.2 99.2 0 224 0zM64 128V256c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__business-time"
                  aria-pressed="false"
                  aria-label="business-time"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="business-time"
                        class="svg-inline--fa fa-business-time fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calculator"
                  aria-pressed="false"
                  aria-label="calculator"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calculator"
                        class="svg-inline--fa fa-calculator fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar"
                  aria-pressed="false"
                  aria-label="calendar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar"
                        class="svg-inline--fa fa-calendar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-check"
                  aria-pressed="false"
                  aria-label="calendar-check"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-check"
                        class="svg-inline--fa fa-calendar-check fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-day"
                  aria-pressed="false"
                  aria-label="calendar-day"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-day"
                        class="svg-inline--fa fa-calendar-day fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-minus"
                  aria-pressed="false"
                  aria-label="calendar-minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-minus"
                        class="svg-inline--fa fa-calendar-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 0c17.7 0 32 14.3 32 32V64H320V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H32V112c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32zM32 192H480V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V192zM344 376c13.3 0 24-10.7 24-24s-10.7-24-24-24H168c-13.3 0-24 10.7-24 24s10.7 24 24 24H344z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-plus"
                  aria-pressed="false"
                  aria-label="calendar-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-plus"
                        class="svg-inline--fa fa-calendar-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 32V64H80c-26.5 0-48 21.5-48 48v48H480V112c0-26.5-21.5-48-48-48H384V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H192V32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 192H32V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V192zM256 248c13.3 0 24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V376H176c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V272c0-13.3 10.7-24 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-xmark"
                  aria-pressed="false"
                  aria-label="calendar-xmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-xmark"
                        class="svg-inline--fa fa-calendar-xmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 0c17.7 0 32 14.3 32 32V64H320V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H32V112c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32zM32 192H480V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V192zM337 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__calendar-week"
                  aria-pressed="false"
                  aria-label="calendar-week"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-week"
                        class="svg-inline--fa fa-calendar-week fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__camera-retro"
                  aria-pressed="false"
                  aria-label="camera-retro"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="camera-retro"
                        class="svg-inline--fa fa-camera-retro fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__candy-cane"
                  aria-pressed="false"
                  aria-label="candy-cane"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="candy-cane"
                        class="svg-inline--fa fa-candy-cane fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M348.8 131.5c3.7-2.3 7.9-3.5 12.2-3.5c12.7 0 23 10.3 23 23v5.6c0 9.9-5.1 19.1-13.5 24.3L30.1 393.7C.1 412.5-9 451.9 9.7 481.9s58.2 39.1 88.2 20.4L438.4 289.5c45.8-28.6 73.6-78.8 73.6-132.8V151C512 67.6 444.4 0 361 0c-28.3 0-56 8-80.1 23L254.1 39.7c-30 18.7-39.1 58.2-20.4 88.2s58.2 39.1 88.2 20.4l26.8-16.8zM298.4 49.8c9.2-5.7 19.1-10.1 29.4-13.1L348 97.5c-5.7 1.4-11.2 3.7-16.3 6.8l-12.6 7.9L298.4 49.8zm88.5 52.7l46.2-46.2c8.5 6.5 16.1 14.1 22.6 22.6l-46.2 46.2c-5.1-9.6-13-17.5-22.6-22.6zm28.9 59.3l61.6 20.5c-2.2 10.5-5.8 20.7-10.5 30.2l-62-20.7c6.2-8.8 10.1-19.1 11-30.1zm-86.1 82.5l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zm-107.2 67l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zM119.3 375.7l60.4 37.7-30.2 18.9L89.1 394.6l30.2-18.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__car"
                  aria-pressed="false"
                  aria-label="car"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="car"
                        class="svg-inline--fa fa-car fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__carrot"
                  aria-pressed="false"
                  aria-label="carrot"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="carrot"
                        class="svg-inline--fa fa-carrot fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cart-arrow-down"
                  aria-pressed="false"
                  aria-label="cart-arrow-down"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-arrow-down"
                        class="svg-inline--fa fa-cart-arrow-down fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cart-plus"
                  aria-pressed="false"
                  aria-label="cart-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-plus"
                        class="svg-inline--fa fa-cart-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cash-register"
                  aria-pressed="false"
                  aria-label="cash-register"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cash-register"
                        class="svg-inline--fa fa-cash-register fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C46.3 0 32 14.3 32 32V96c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1C.4 368.8 0 373.6 0 378.4V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V378.4c0-4.8-.4-9.6-1.1-14.4L488.2 214.4C483.5 183.1 456.6 160 425 160H208V128h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H64zM96 48H256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 432c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm120-24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM160 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM424 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM352 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__certificate"
                  aria-pressed="false"
                  aria-label="certificate"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="certificate"
                        class="svg-inline--fa fa-certificate fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chalkboard"
                  aria-pressed="false"
                  aria-label="chalkboard"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chalkboard"
                        class="svg-inline--fa fa-chalkboard fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chalkboard-user"
                  aria-pressed="false"
                  aria-label="chalkboard-user"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chalkboard-user"
                        class="svg-inline--fa fa-chalkboard-user fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chart-area"
                  aria-pressed="false"
                  aria-label="chart-area"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chart-area"
                        class="svg-inline--fa fa-chart-area fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chart-bar"
                  aria-pressed="false"
                  aria-label="chart-bar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chart-bar"
                        class="svg-inline--fa fa-chart-bar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chart-line"
                  aria-pressed="false"
                  aria-label="chart-line"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chart-line"
                        class="svg-inline--fa fa-chart-line fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__chart-pie"
                  aria-pressed="false"
                  aria-label="chart-pie"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chart-pie"
                        class="svg-inline--fa fa-chart-pie fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cheese"
                  aria-pressed="false"
                  aria-label="cheese"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cheese"
                        class="svg-inline--fa fa-cheese fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 240.2V256H0c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7C418.8 32 512 125.2 512 240.2zm0 47.8V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V288H512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__child"
                  aria-pressed="false"
                  aria-label="child"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="child"
                        class="svg-inline--fa fa-child fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle"
                  aria-pressed="false"
                  aria-label="circle"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle"
                        class="svg-inline--fa fa-circle fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__city"
                  aria-pressed="false"
                  aria-label="city"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="city"
                        class="svg-inline--fa fa-city fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__clipboard"
                  aria-pressed="false"
                  aria-label="clipboard"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clipboard"
                        class="svg-inline--fa fa-clipboard fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__clipboard-check"
                  aria-pressed="false"
                  aria-label="clipboard-check"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clipboard-check"
                        class="svg-inline--fa fa-clipboard-check fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__clone"
                  aria-pressed="false"
                  aria-label="clone"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clone"
                        class="svg-inline--fa fa-clone fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__closed-captioning"
                  aria-pressed="false"
                  aria-label="closed-captioning"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="closed-captioning"
                        class="svg-inline--fa fa-closed-captioning fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cloud-meatball"
                  aria-pressed="false"
                  aria-label="cloud-meatball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cloud-meatball"
                        class="svg-inline--fa fa-cloud-meatball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 224c0 53 43 96 96 96h44.7c9.5-23.5 32.5-40 59.3-40c2 0 3.9 .1 5.8 .3C217.6 265.5 235.7 256 256 256s38.4 9.5 50.2 24.3c1.9-.2 3.9-.3 5.8-.3c26.9 0 49.9 16.5 59.3 40H416c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 1 .1 2.1 .1 3.1c-.7-.8-1.4-1.6-2.1-2.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c.7 .7 1.5 1.4 2.3 2.1c-1-.1-2.1-.1-3.1-.1c-17.7 0-32 14.3-32 32s14.3 32 32 32c1 0 2.1-.1 3.1-.1c-.8 .7-1.6 1.3-2.3 2.1c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0c.7-.7 1.4-1.5 2.1-2.3c-.1 1-.1 2.1-.1 3.1c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1-.1-2.1-.1-3.1c.7 .8 1.3 1.6 2.1 2.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3c-.7-.7-1.5-1.4-2.3-2.1c1 .1 2.1 .1 3.1 .1c17.7 0 32-14.3 32-32s-14.3-32-32-32c-1 0-2.1 .1-3.1 .1c.8-.7 1.6-1.3 2.3-2.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-.7 .7-1.4 1.5-2.1 2.3c.1-1 .1-2.1 .1-3.1zM48 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm416 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__martini-glass-citrus"
                  aria-pressed="false"
                  aria-label="martini-glass-citrus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="martini-glass-citrus"
                        class="svg-inline--fa fa-martini-glass-citrus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__code"
                  aria-pressed="false"
                  aria-label="code"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="code"
                        class="svg-inline--fa fa-code fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__code-branch"
                  aria-pressed="false"
                  aria-label="code-branch"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="code-branch"
                        class="svg-inline--fa fa-code-branch fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__coins"
                  aria-pressed="false"
                  aria-label="coins"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="coins"
                        class="svg-inline--fa fa-coins fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__table-columns"
                  aria-pressed="false"
                  aria-label="table-columns"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="table-columns"
                        class="svg-inline--fa fa-table-columns fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__message"
                  aria-pressed="false"
                  aria-label="message"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="message"
                        class="svg-inline--fa fa-message fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__comment-dollar"
                  aria-pressed="false"
                  aria-label="comment-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comment-dollar"
                        class="svg-inline--fa fa-comment-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zm20-312v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V344c0 11-9 20-20 20s-20-9-20-20V329.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V136c0-11 9-20 20-20s20 9 20 20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__comment-slash"
                  aria-pressed="false"
                  aria-label="comment-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comment-slash"
                        class="svg-inline--fa fa-comment-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512.9 376.7C552.2 340.2 576 292.3 576 240C576 125.1 461.4 32 320 32c-67.7 0-129.3 21.4-175.1 56.3L38.8 5.1zM64 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c37 0 72.3-6.4 104-17.9L82.9 161.3C70.7 185.6 64 212.2 64 240z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__comments"
                  aria-pressed="false"
                  aria-label="comments"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comments"
                        class="svg-inline--fa fa-comments fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__comments-dollar"
                  aria-pressed="false"
                  aria-label="comments-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comments-dollar"
                        class="svg-inline--fa fa-comments-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.2 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9l0 0 0 0 .2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zM231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2 0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129zM228 72c0-11-9-20-20-20s-20 9-20 20V86c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V280c0 11 9 20 20 20s20-9 20-20V266.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V72z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__compass"
                  aria-pressed="false"
                  aria-label="compass"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="compass"
                        class="svg-inline--fa fa-compass fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__compress"
                  aria-pressed="false"
                  aria-label="compress"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="compress"
                        class="svg-inline--fa fa-compress fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__minimize"
                  aria-pressed="false"
                  aria-label="minimize"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="minimize"
                        class="svg-inline--fa fa-minimize fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bell-concierge"
                  aria-pressed="false"
                  aria-label="bell-concierge"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell-concierge"
                        class="svg-inline--fa fa-bell-concierge fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cookie"
                  aria-pressed="false"
                  aria-label="cookie"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cookie"
                        class="svg-inline--fa fa-cookie fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M247.2 17c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9L388.9 57.5c-16.1-15.6-36.6-25.6-58.7-28.7L247.2 17zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__copy"
                  aria-pressed="false"
                  aria-label="copy"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="copy"
                        class="svg-inline--fa fa-copy fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__copyright"
                  aria-pressed="false"
                  aria-label="copyright"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="copyright"
                        class="svg-inline--fa fa-copyright fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__credit-card"
                  aria-pressed="false"
                  aria-label="credit-card"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="credit-card"
                        class="svg-inline--fa fa-credit-card fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__crop"
                  aria-pressed="false"
                  aria-label="crop"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="crop"
                        class="svg-inline--fa fa-crop fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__crop-simple"
                  aria-pressed="false"
                  aria-label="crop-simple"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="crop-simple"
                        class="svg-inline--fa fa-crop-simple fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H128V32zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-256c0-35.3-28.7-64-64-64L160 64v64l224 0 0 352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__crosshairs"
                  aria-pressed="false"
                  aria-label="crosshairs"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="crosshairs"
                        class="svg-inline--fa fa-crosshairs fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__css3-alt"
                  aria-pressed="false"
                  aria-label="css3-alt"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="css3-alt"
                        class="svg-inline--fa fa-css3-alt fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__scissors"
                  aria-pressed="false"
                  aria-label="scissors"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="scissors"
                        class="svg-inline--fa fa-scissors fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__database"
                  aria-pressed="false"
                  aria-label="database"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="database"
                        class="svg-inline--fa fa-database fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__dice"
                  aria-pressed="false"
                  aria-label="dice"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dice"
                        class="svg-inline--fa fa-dice fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__dice-five"
                  aria-pressed="false"
                  aria-label="dice-five"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dice-five"
                        class="svg-inline--fa fa-dice-five fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__dolly"
                  aria-pressed="false"
                  aria-label="dolly"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dolly"
                        class="svg-inline--fa fa-dolly fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64H32C14.3 64 0 49.7 0 32zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cart-flatbed"
                  aria-pressed="false"
                  aria-label="cart-flatbed"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-flatbed"
                        class="svg-inline--fa fa-cart-flatbed fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64H48c8.8 0 16 7.2 16 16V368c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H450.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80C128 35.8 92.2 0 48 0H32zM192 80V272c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H464V176c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V32H240c-26.5 0-48 21.5-48 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-dollar-to-slot"
                  aria-pressed="false"
                  aria-label="circle-dollar-to-slot"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-dollar-to-slot"
                        class="svg-inline--fa fa-circle-dollar-to-slot fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__door-closed"
                  aria-pressed="false"
                  aria-label="door-closed"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="door-closed"
                        class="svg-inline--fa fa-door-closed fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 64c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 144 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96V64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__door-open"
                  aria-pressed="false"
                  aria-label="door-open"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="door-open"
                        class="svg-inline--fa fa-door-open fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__download"
                  aria-pressed="false"
                  aria-label="download"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="download"
                        class="svg-inline--fa fa-download fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__compass-drafting"
                  aria-pressed="false"
                  aria-label="compass-drafting"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="compass-drafting"
                        class="svg-inline--fa fa-compass-drafting fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__draw-polygon"
                  aria-pressed="false"
                  aria-label="draw-polygon"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="draw-polygon"
                        class="svg-inline--fa fa-draw-polygon fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 151.4V360.6c9.7 5.6 17.8 13.7 23.4 23.4H328.6c0-.1 .1-.2 .1-.3l-4.5-7.9-32-56 0 0c-1.4 .1-2.8 .1-4.2 .1c-35.3 0-64-28.7-64-64s28.7-64 64-64c1.4 0 2.8 0 4.2 .1l0 0 32-56 4.5-7.9-.1-.3H119.4c-5.6 9.7-13.7 17.8-23.4 23.4zM384.3 352c35.2 .2 63.7 28.7 63.7 64c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V151.4C12.9 140.4 0 119.7 0 96C0 60.7 28.7 32 64 32c23.7 0 44.4 12.9 55.4 32H328.6c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 35.3-28.5 63.8-63.7 64l-4.5 7.9-32 56-2.3 4c4.2 8.5 6.5 18 6.5 28.1s-2.3 19.6-6.5 28.1l2.3 4 32 56 4.5 7.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__drum"
                  aria-pressed="false"
                  aria-label="drum"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="drum"
                        class="svg-inline--fa fa-drum fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M501.2 76.1c11.1-7.3 14.2-22.1 6.9-33.2s-22.1-14.2-33.2-6.9L370.2 104.5C335.8 98.7 297 96 256 96C114.6 96 0 128 0 208V368c0 31.3 27.4 58.8 72 78.7V344c0-13.3 10.7-24 24-24s24 10.7 24 24V463.4c33 8.9 71.1 14.5 112 16.1V376c0-13.3 10.7-24 24-24s24 10.7 24 24V479.5c40.9-1.6 79-7.2 112-16.1V344c0-13.3 10.7-24 24-24s24 10.7 24 24V446.7c44.6-19.9 72-47.4 72-78.7V208c0-41.1-30.2-69.5-78.8-87.4l67.9-44.5zM307.4 145.6l-64.6 42.3c-11.1 7.3-14.2 22.1-6.9 33.2s22.1 14.2 33.2 6.9l111.1-72.8c14.7 3.2 27.9 7 39.4 11.5C458.4 181.8 464 197.4 464 208c0 .8-2.7 17.2-46 35.9C379.1 260.7 322 272 256 272s-123.1-11.3-162-28.1C50.7 225.2 48 208.8 48 208c0-10.6 5.6-26.2 44.4-41.3C130.6 151.9 187.8 144 256 144c18 0 35.1 .5 51.4 1.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__drum-steelpan"
                  aria-pressed="false"
                  aria-label="drum-steelpan"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="drum-steelpan"
                        class="svg-inline--fa fa-drum-steelpan fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 32c159.1 0 288 48 288 128V352c0 80-128.9 128-288 128S0 432 0 352V160C0 80 128.9 32 288 32zM528 160c0-9.9-8-29.9-55-49.8c-18.6-7.9-40.9-14.4-66-19.4l-27.8 43.6c-7.3 11.5-11.2 24.8-11.2 38.4c0 17.5 6.4 34.4 18.1 47.5l9.8 11c29.8-5.2 55.9-12.5 77.2-21.5c47.1-19.9 55-39.9 55-49.8zM349.2 237.3c-8-26.2-32.4-45.3-61.2-45.3s-53.3 19.1-61.2 45.3c19.4 1.7 39.9 2.7 61.2 2.7s41.8-.9 61.2-2.7zM169 90.8c-25.2 5-47.4 11.6-66 19.4C56 130.1 48 150.1 48 160s8 29.9 55 49.8c21.3 9 47.4 16.3 77.2 21.5l9.8-11c11.6-13.1 18.1-30 18.1-47.5c0-13.6-3.9-26.9-11.2-38.4L169 90.8zm56.3-8C224.5 87 224 91.5 224 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-4.5-.5-9-1.4-13.2C330.8 81 309.8 80 288 80s-42.8 1-62.6 2.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__drumstick-bite"
                  aria-pressed="false"
                  aria-label="drumstick-bite"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="drumstick-bite"
                        class="svg-inline--fa fa-drumstick-bite fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__dumbbell"
                  aria-pressed="false"
                  aria-label="dumbbell"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dumbbell"
                        class="svg-inline--fa fa-dumbbell fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen-to-square"
                  aria-pressed="false"
                  aria-label="pen-to-square"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen-to-square"
                        class="svg-inline--fa fa-pen-to-square fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__egg"
                  aria-pressed="false"
                  aria-label="egg"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="egg"
                        class="svg-inline--fa fa-egg fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__eject"
                  aria-pressed="false"
                  aria-label="eject"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eject"
                        class="svg-inline--fa fa-eject fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__envelope-open"
                  aria-pressed="false"
                  aria-label="envelope-open"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope-open"
                        class="svg-inline--fa fa-envelope-open fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__envelope-open-text"
                  aria-pressed="false"
                  aria-label="envelope-open-text"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope-open-text"
                        class="svg-inline--fa fa-envelope-open-text fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-envelope"
                  aria-pressed="false"
                  aria-label="square-envelope"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-envelope"
                        class="svg-inline--fa fa-square-envelope fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__eraser"
                  aria-pressed="false"
                  aria-label="eraser"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eraser"
                        class="svg-inline--fa fa-eraser fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ethereum"
                  aria-pressed="false"
                  aria-label="ethereum"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="ethereum"
                        class="svg-inline--fa fa-ethereum fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ethernet"
                  aria-pressed="false"
                  aria-label="ethernet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ethernet"
                        class="svg-inline--fa fa-ethernet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 224V416c0 17.7 14.3 32 32 32H96V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H448V160c0-17.7-14.3-32-32-32H384V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__exclamation"
                  aria-pressed="false"
                  aria-label="exclamation"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="exclamation"
                        class="svg-inline--fa fa-exclamation fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-exclamation"
                  aria-pressed="false"
                  aria-label="circle-exclamation"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-exclamation"
                        class="svg-inline--fa fa-circle-exclamation fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__triangle-exclamation"
                  aria-pressed="false"
                  aria-label="triangle-exclamation"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        class="svg-inline--fa fa-triangle-exclamation fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__expand"
                  aria-pressed="false"
                  aria-label="expand"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="expand"
                        class="svg-inline--fa fa-expand fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__maximize"
                  aria-pressed="false"
                  aria-label="maximize"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="maximize"
                        class="svg-inline--fa fa-maximize fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__eye-dropper"
                  aria-pressed="false"
                  aria-label="eye-dropper"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye-dropper"
                        class="svg-inline--fa fa-eye-dropper fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__eye-slash"
                  aria-pressed="false"
                  aria-label="eye-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye-slash"
                        class="svg-inline--fa fa-eye-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__facebook"
                  aria-pressed="false"
                  aria-label="facebook"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        class="svg-inline--fa fa-facebook fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__backward-fast"
                  aria-pressed="false"
                  aria-label="backward-fast"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="backward-fast"
                        class="svg-inline--fa fa-backward-fast fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__forward-fast"
                  aria-pressed="false"
                  aria-label="forward-fast"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="forward-fast"
                        class="svg-inline--fa fa-forward-fast fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fax"
                  aria-pressed="false"
                  aria-label="fax"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fax"
                        class="svg-inline--fa fa-fax fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-dress"
                  aria-pressed="false"
                  aria-label="person-dress"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-dress"
                        class="svg-inline--fa fa-person-dress fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file"
                  aria-pressed="false"
                  aria-label="file"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file"
                        class="svg-inline--fa fa-file fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-audio"
                  aria-pressed="false"
                  aria-label="file-audio"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-audio"
                        class="svg-inline--fa fa-file-audio fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zm2 226.3c37.1 22.4 62 63.1 62 109.7s-24.9 87.3-62 109.7c-7.6 4.6-17.4 2.1-22-5.4s-2.1-17.4 5.4-22C269.4 401.5 288 370.9 288 336s-18.6-65.5-46.5-82.3c-7.6-4.6-10-14.4-5.4-22s14.4-10 22-5.4zm-91.9 30.9c6 2.5 9.9 8.3 9.9 14.8V400c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L113.4 376H80c-8.8 0-16-7.2-16-16V312c0-8.8 7.2-16 16-16h33.4l35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5zm51 34.9c6.6-5.9 16.7-5.3 22.6 1.3C249.8 304.6 256 319.6 256 336s-6.2 31.4-16.3 42.7c-5.9 6.6-16 7.1-22.6 1.3s-7.1-16-1.3-22.6c5.1-5.7 8.1-13.1 8.1-21.3s-3.1-15.7-8.1-21.3c-5.9-6.6-5.3-16.7 1.3-22.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-code"
                  aria-pressed="false"
                  aria-label="file-code"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-code"
                        class="svg-inline--fa fa-file-code fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-invoice"
                  aria-pressed="false"
                  aria-label="file-invoice"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-invoice"
                        class="svg-inline--fa fa-file-invoice fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-invoice-dollar"
                  aria-pressed="false"
                  aria-label="file-invoice-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-invoice-dollar"
                        class="svg-inline--fa fa-file-invoice-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__file-video"
                  aria-pressed="false"
                  aria-label="file-video"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="file-video"
                        class="svg-inline--fa fa-file-video fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fill"
                  aria-pressed="false"
                  aria-label="fill"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fill"
                        class="svg-inline--fa fa-fill fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3L122.7 136 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L168 90.7 86.6 9.4zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L429.1 234.3c3.1 3.1 3.1 8.2 0 11.3L386.7 288H67.5c1.4-5.4 4.2-10.4 8.4-14.6L168 181.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fill-drip"
                  aria-pressed="false"
                  aria-label="fill-drip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fill-drip"
                        class="svg-inline--fa fa-fill-drip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__film"
                  aria-pressed="false"
                  aria-label="film"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="film"
                        class="svg-inline--fa fa-film fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__filter"
                  aria-pressed="false"
                  aria-label="filter"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="filter"
                        class="svg-inline--fa fa-filter fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fire-flame-curved"
                  aria-pressed="false"
                  aria-label="fire-flame-curved"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fire-flame-curved"
                        class="svg-inline--fa fa-fire-flame-curved fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fire-extinguisher"
                  aria-pressed="false"
                  aria-label="fire-extinguisher"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fire-extinguisher"
                        class="svg-inline--fa fa-fire-extinguisher fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M500.3 7.3C507.7 13.3 512 22.4 512 32v96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32C301.5 124.9 292 115.7 289 104H224v34.8c37.8 18 64 56.5 64 101.2V384H64V240c0-44.7 26.2-83.2 64-101.2V110c-36.2 11.1-66 36.9-82.3 70.5c-5.8 11.9-20.2 16.9-32.1 11.1S-3.3 171.4 2.5 159.5C26.7 109.8 72.7 72.6 128 60.4V32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V56h65c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM288 416v32c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V416H288zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__fish"
                  aria-pressed="false"
                  aria-label="fish"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="fish"
                        class="svg-inline--fa fa-fish fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__folder-minus"
                  aria-pressed="false"
                  aria-label="folder-minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="folder-minus"
                        class="svg-inline--fa fa-folder-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__folder-open"
                  aria-pressed="false"
                  aria-label="folder-open"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="folder-open"
                        class="svg-inline--fa fa-folder-open fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__folder-plus"
                  aria-pressed="false"
                  aria-label="folder-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="folder-plus"
                        class="svg-inline--fa fa-folder-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__football"
                  aria-pressed="false"
                  aria-label="football"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="football"
                        class="svg-inline--fa fa-football fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M247.5 25.4c-13.5 3.3-26.4 7.2-38.6 11.7C142.9 61.6 96.7 103.6 66 153.6c-18.3 29.8-30.9 62.3-39.2 95.4L264.5 486.6c13.5-3.3 26.4-7.2 38.6-11.7c66-24.5 112.2-66.5 142.9-116.5c18.3-29.8 30.9-62.3 39.1-95.3L247.5 25.4zM495.2 205.3c6.1-56.8 1.4-112.2-7.7-156.4c-2.7-12.9-13-22.9-26.1-25.1c-58.2-9.7-109.9-12-155.6-7.9L495.2 205.3zM206.1 496L16.8 306.7c-6.1 56.8-1.4 112.2 7.7 156.4c2.7 12.9 13 22.9 26.1 25.1c58.2 9.7 109.9 12 155.6 7.9zm54.6-331.3c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6zm-48 48c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6zm-48 48c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__forward"
                  aria-pressed="false"
                  aria-label="forward"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="forward"
                        class="svg-inline--fa fa-forward fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__face-frown"
                  aria-pressed="false"
                  aria-label="face-frown"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="face-frown"
                        class="svg-inline--fa fa-face-frown fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__filter-circle-dollar"
                  aria-pressed="false"
                  aria-label="filter-circle-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="filter-circle-dollar"
                        class="svg-inline--fa fa-filter-circle-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7V288c0-8.8-7.2-16-16-16s-16 7.2-16 16v9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6l0 0 0 0c7 2.3 15.1 4.8 23.7 6.6v11.4c0 8.8 7.2 16 16 16s16-7.2 16-16V438.7c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5l0-.1c-.1-1.9 .3-2.9 .8-3.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__futbol"
                  aria-pressed="false"
                  aria-label="futbol"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="futbol"
                        class="svg-inline--fa fa-futbol fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__gas-pump"
                  aria-pressed="false"
                  aria-label="gas-pump"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="gas-pump"
                        class="svg-inline--fa fa-gas-pump fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__gem"
                  aria-pressed="false"
                  aria-label="gem"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="gem"
                        class="svg-inline--fa fa-gem fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__martini-glass-empty"
                  aria-pressed="false"
                  aria-label="martini-glass-empty"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="martini-glass-empty"
                        class="svg-inline--fa fa-martini-glass-empty fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM256 210.7L109.3 64H402.7L256 210.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__martini-glass"
                  aria-pressed="false"
                  aria-label="martini-glass"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="martini-glass"
                        class="svg-inline--fa fa-martini-glass fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM173.3 128l-64-64H402.7l-64 64H173.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__glasses"
                  aria-pressed="false"
                  aria-label="glasses"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="glasses"
                        class="svg-inline--fa fa-glasses fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__earth-africa"
                  aria-pressed="false"
                  aria-label="earth-africa"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="earth-africa"
                        class="svg-inline--fa fa-earth-africa fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__earth-americas"
                  aria-pressed="false"
                  aria-label="earth-americas"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="earth-americas"
                        class="svg-inline--fa fa-earth-americas fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__earth-asia"
                  aria-pressed="false"
                  aria-label="earth-asia"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="earth-asia"
                        class="svg-inline--fa fa-earth-asia fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__earth-europe"
                  aria-pressed="false"
                  aria-label="earth-europe"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="earth-europe"
                        class="svg-inline--fa fa-earth-europe fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.7-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__golf-ball-tee"
                  aria-pressed="false"
                  aria-label="golf-ball-tee"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="golf-ball-tee"
                        class="svg-inline--fa fa-golf-ball-tee fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 192c0 66.8-34.1 125.6-85.8 160H85.8C34.1 317.6 0 258.8 0 192C0 86 86 0 192 0S384 86 384 192zM242.1 256.6c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zm-52.3-49.3c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4c0 18.5-15 33.5-33.5 33.5zm113.5-17.5c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zM96 416c0-17.7 14.3-32 32-32h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H240c-8.8 0-16 7.2-16 16v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V464c0-8.8-7.2-16-16-16H128c-17.7 0-32-14.3-32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__google-wallet"
                  aria-pressed="false"
                  aria-label="google-wallet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google-wallet"
                        class="svg-inline--fa fa-google-wallet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__guitar"
                  aria-pressed="false"
                  aria-label="guitar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="guitar"
                        class="svg-inline--fa fa-guitar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__burger"
                  aria-pressed="false"
                  aria-label="burger"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="burger"
                        class="svg-inline--fa fa-burger fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hand-holding-dollar"
                  aria-pressed="false"
                  aria-label="hand-holding-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hand-holding-dollar"
                        class="svg-inline--fa fa-hand-holding-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__handshake"
                  aria-pressed="false"
                  aria-label="handshake"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="handshake"
                        class="svg-inline--fa fa-handshake fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__helmet-safety"
                  aria-pressed="false"
                  aria-label="helmet-safety"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="helmet-safety"
                        class="svg-inline--fa fa-helmet-safety fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hashtag"
                  aria-pressed="false"
                  aria-label="hashtag"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hashtag"
                        class="svg-inline--fa fa-hashtag fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hard-drive"
                  aria-pressed="false"
                  aria-label="hard-drive"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hard-drive"
                        class="svg-inline--fa fa-hard-drive fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V280.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4V96zM64 288H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__headphones"
                  aria-pressed="false"
                  aria-label="headphones"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="headphones"
                        class="svg-inline--fa fa-headphones fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__headphones-simple"
                  aria-pressed="false"
                  aria-label="headphones-simple"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="headphones-simple"
                        class="svg-inline--fa fa-headphones-simple fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__heart"
                  aria-pressed="false"
                  aria-label="heart"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart"
                        class="svg-inline--fa fa-heart fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__heart-pulse"
                  aria-pressed="false"
                  aria-label="heart-pulse"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart-pulse"
                        class="svg-inline--fa fa-heart-pulse fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__highlighter"
                  aria-pressed="false"
                  aria-label="highlighter"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="highlighter"
                        class="svg-inline--fa fa-highlighter fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5l0 0V248.3c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5H224l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-hiking"
                  aria-pressed="false"
                  aria-label="person-hiking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-hiking"
                        class="svg-inline--fa fa-person-hiking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hockey-puck"
                  aria-pressed="false"
                  aria-label="hockey-puck"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hockey-puck"
                        class="svg-inline--fa fa-hockey-puck fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 256C114.6 256 0 213 0 160s114.6-96 256-96s256 43 256 96s-114.6 96-256 96zm192.3 1.8c24.7-9.3 46.9-21 63.7-35.6V352c0 53-114.6 96-256 96S0 405 0 352V222.3c16.8 14.6 39 26.3 63.7 35.6C114.5 276.9 182.5 288 256 288s141.5-11.1 192.3-30.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hot-tub-person"
                  aria-pressed="false"
                  aria-label="hot-tub-person"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hot-tub-person"
                        class="svg-inline--fa fa-hot-tub-person fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M272 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L295.8 82.8C280.7 69.1 272 49.7 272 29.2V24zM0 320v16V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H277.3c-13.8 0-27.3-4.5-38.4-12.8l-85.3-64C137 166.7 116.8 160 96 160c-53 0-96 43-96 96v64zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm112 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM360 0c-13.3 0-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L407.8 82.8C392.7 69.1 384 49.7 384 29.2V24c0-13.3-10.7-24-24-24zM64 128A64 64 0 1 0 64 0a64 64 0 1 0 0 128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hotdog"
                  aria-pressed="false"
                  aria-label="hotdog"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hotdog"
                        class="svg-inline--fa fa-hotdog fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M488.6 23.4c31.2 31.2 31.2 81.9 0 113.1l-352 352c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l352-352c31.2-31.2 81.9-31.2 113.1 0zM443.3 92.7c-6.2-6.2-16.4-6.2-22.6 0c-12.5 12.5-23.8 15.1-37.5 17.6l-2.5 .4c-13.8 2.5-31.6 5.6-48 22c-16.7 16.7-20.9 36-24.1 50.9l0 0v0l-.2 1c-3.4 15.6-6 26.4-15.7 36.1s-20.5 12.3-36.1 15.7l-1 .2c-14.9 3.2-34.2 7.4-50.9 24.1s-20.9 36-24.1 50.9l-.2 1c-3.4 15.6-6 26.4-15.7 36.1c-9.2 9.2-18 10.8-32.7 13.4l0 0-.9 .2c-15.6 2.8-34.9 6.9-54.4 26.4c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0c12.5-12.5 23.8-15.1 37.5-17.6l2.5-.4c13.8-2.5 31.6-5.6 48-22c16.7-16.7 20.9-36 24.1-50.9l.2-1c3.4-15.6 6-26.4 15.7-36.1s20.5-12.3 36.1-15.7l1-.2c14.9-3.2 34.2-7.4 50.9-24.1s20.9-36 24.1-50.9l.2-1c3.4-15.6 6-26.4 15.7-36.1c9.2-9.2 18-10.8 32.7-13.4l.9-.2c15.6-2.8 34.9-6.9 54.4-26.4c6.2-6.2 6.2-16.4 0-22.6zM191.2 479.2l288-288L495 207c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L289 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17l-15.8-15.8zM17 305C6.1 294.1 0 279.4 0 264s6.1-30.1 17-41L223 17C233.9 6.1 248.6 0 264 0s30.1 6.1 41 17l15.8 15.8-288 288L17 305z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__hotel"
                  aria-pressed="false"
                  aria-label="hotel"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hotel"
                        class="svg-inline--fa fa-hotel fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__js"
                  aria-pressed="false"
                  aria-label="js"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="js"
                        class="svg-inline--fa fa-js fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ice-cream"
                  aria-pressed="false"
                  aria-label="ice-cream"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ice-cream"
                        class="svg-inline--fa fa-ice-cream fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H368c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288H96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__icons"
                  aria-pressed="false"
                  aria-label="icons"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="icons"
                        class="svg-inline--fa fa-icons fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__id-badge"
                  aria-pressed="false"
                  aria-label="id-badge"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="id-badge"
                        class="svg-inline--fa fa-id-badge fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm96 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__id-card"
                  aria-pressed="false"
                  aria-label="id-card"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="id-card"
                        class="svg-inline--fa fa-id-card fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__id-card-clip"
                  aria-pressed="false"
                  aria-label="id-card-clip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="id-card-clip"
                        class="svg-inline--fa fa-id-card-clip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 0h64c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM64 64H192v48c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64zM176 437.3c0 5.9 4.8 10.7 10.7 10.7H389.3c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3H229.3c-29.5 0-53.3 23.9-53.3 53.3zM288 352a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__images"
                  aria-pressed="false"
                  aria-label="images"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="images"
                        class="svg-inline--fa fa-images fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__inbox"
                  aria-pressed="false"
                  aria-label="inbox"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="inbox"
                        class="svg-inline--fa fa-inbox fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__industry"
                  aria-pressed="false"
                  aria-label="industry"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="industry"
                        class="svg-inline--fa fa-industry fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__infinity"
                  aria-pressed="false"
                  aria-label="infinity"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="infinity"
                        class="svg-inline--fa fa-infinity fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-info"
                  aria-pressed="false"
                  aria-label="circle-info"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-info"
                        class="svg-inline--fa fa-circle-info fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__instagram"
                  aria-pressed="false"
                  aria-label="instagram"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        class="svg-inline--fa fa-instagram fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__keyboard"
                  aria-pressed="false"
                  aria-label="keyboard"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="keyboard"
                        class="svg-inline--fa fa-keyboard fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__language"
                  aria-pressed="false"
                  aria-label="language"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="language"
                        class="svg-inline--fa fa-language fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__laptop"
                  aria-pressed="false"
                  aria-label="laptop"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="laptop"
                        class="svg-inline--fa fa-laptop fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__laptop-code"
                  aria-pressed="false"
                  aria-label="laptop-code"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="laptop-code"
                        class="svg-inline--fa fa-laptop-code fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__layer-group"
                  aria-pressed="false"
                  aria-label="layer-group"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="layer-group"
                        class="svg-inline--fa fa-layer-group fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__lemon"
                  aria-pressed="false"
                  aria-label="lemon"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lemon"
                        class="svg-inline--fa fa-lemon fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 96c0-35.3-28.7-64-64-64c-6.6 0-13 1-19 2.9c-22.5 7-48.1 14.9-71 9c-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71C1 403 0 409.4 0 416c0 35.3 28.7 64 64 64c6.6 0 13-1 19.1-2.9c22.5-7 48.1-14.9 71-9c75.2 19.1 156.4-11 213.7-68.3s87.5-138.5 68.3-213.7c-5.8-22.9 2-48.4 9-71c1.9-6 2.9-12.4 2.9-19.1zM212.5 127.4c-54.6 16-101.1 62.5-117.1 117.1C92.9 253 84 257.8 75.5 255.4S62.2 244 64.6 235.5c19.1-65.1 73.7-119.8 138.9-138.9c8.5-2.5 17.4 2.4 19.9 10.9s-2.4 17.4-10.9 19.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__linkedin"
                  aria-pressed="false"
                  aria-label="linkedin"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin"
                        class="svg-inline--fa fa-linkedin fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__lock-open"
                  aria-pressed="false"
                  aria-label="lock-open"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lock-open"
                        class="svg-inline--fa fa-lock-open fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cart-flatbed-suitcase"
                  aria-pressed="false"
                  aria-label="cart-flatbed-suitcase"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-flatbed-suitcase"
                        class="svg-inline--fa fa-cart-flatbed-suitcase fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32C0 14.3 14.3 0 32 0H48c44.2 0 80 35.8 80 80V368c0 8.8 7.2 16 16 16H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H541.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32zM432 96V56c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8V96h96zM288 96V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56V96 320H288V96zM512 320V96h16c26.5 0 48 21.5 48 48V272c0 26.5-21.5 48-48 48H512zM240 96h16V320H240c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wand-magic"
                  aria-pressed="false"
                  aria-label="wand-magic"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wand-magic"
                        class="svg-inline--fa fa-wand-magic fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__envelopes-bulk"
                  aria-pressed="false"
                  aria-label="envelopes-bulk"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelopes-bulk"
                        class="svg-inline--fa fa-envelopes-bulk fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person"
                  aria-pressed="false"
                  aria-label="person"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person"
                        class="svg-inline--fa fa-person fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__map"
                  aria-pressed="false"
                  aria-label="map"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map"
                        class="svg-inline--fa fa-map fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__map-location"
                  aria-pressed="false"
                  aria-label="map-location"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-location"
                        class="svg-inline--fa fa-map-location fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__map-location-dot"
                  aria-pressed="false"
                  aria-label="map-location-dot"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-location-dot"
                        class="svg-inline--fa fa-map-location-dot fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__location-pin"
                  aria-pressed="false"
                  aria-label="location-pin"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="location-pin"
                        class="svg-inline--fa fa-location-pin fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__location-dot"
                  aria-pressed="false"
                  aria-label="location-dot"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="location-dot"
                        class="svg-inline--fa fa-location-dot fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__marker"
                  aria-pressed="false"
                  aria-label="marker"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="marker"
                        class="svg-inline--fa fa-marker fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M481 31C445.1-4.8 386.9-4.8 351 31l-15 15L322.9 33C294.8 4.9 249.2 4.9 221.1 33L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L255 66.9c9.4-9.4 24.6-9.4 33.9 0L302.1 80 186.3 195.7 316.3 325.7 481 161c35.9-35.9 35.9-94.1 0-129.9zM293.7 348.3L163.7 218.3 99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l64.2-64.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__face-meh"
                  aria-pressed="false"
                  aria-label="face-meh"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="face-meh"
                        class="svg-inline--fa fa-face-meh fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__memory"
                  aria-pressed="false"
                  aria-label="memory"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="memory"
                        class="svg-inline--fa fa-memory fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320H576V248.6c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zM576 352H0v64c0 17.7 14.3 32 32 32H80V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h48c17.7 0 32-14.3 32-32V352zM192 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__microchip"
                  aria-pressed="false"
                  aria-label="microchip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="microchip"
                        class="svg-inline--fa fa-microchip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__microphone"
                  aria-pressed="false"
                  aria-label="microphone"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="microphone"
                        class="svg-inline--fa fa-microphone fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__microphone-lines"
                  aria-pressed="false"
                  aria-label="microphone-lines"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="microphone-lines"
                        class="svg-inline--fa fa-microphone-lines fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__microphone-lines-slash"
                  aria-pressed="false"
                  aria-label="microphone-lines-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="microphone-lines-slash"
                        class="svg-inline--fa fa-microphone-lines-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24 16c0 21.2-5.1 41.1-14.2 58.7L416 300.8V256H358.9l-34.5-27c2.9-3.1 7-5 11.6-5h80V192H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__microphone-slash"
                  aria-pressed="false"
                  aria-label="microphone-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="microphone-slash"
                        class="svg-inline--fa fa-microphone-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__minus"
                  aria-pressed="false"
                  aria-label="minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="minus"
                        class="svg-inline--fa fa-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-minus"
                  aria-pressed="false"
                  aria-label="circle-minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-minus"
                        class="svg-inline--fa fa-circle-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-minus"
                  aria-pressed="false"
                  aria-label="square-minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-minus"
                        class="svg-inline--fa fa-square-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__mobile"
                  aria-pressed="false"
                  aria-label="mobile"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="mobile"
                        class="svg-inline--fa fa-mobile fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__mobile-screen-button"
                  aria-pressed="false"
                  aria-label="mobile-screen-button"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="mobile-screen-button"
                        class="svg-inline--fa fa-mobile-screen-button fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-bill"
                  aria-pressed="false"
                  aria-label="money-bill"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-bill"
                        class="svg-inline--fa fa-money-bill fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-bill-1"
                  aria-pressed="false"
                  aria-label="money-bill-1"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-bill-1"
                        class="svg-inline--fa fa-money-bill-1 fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-bill-wave"
                  aria-pressed="false"
                  aria-label="money-bill-wave"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-bill-wave"
                        class="svg-inline--fa fa-money-bill-wave fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-bill-1-wave"
                  aria-pressed="false"
                  aria-label="money-bill-1-wave"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-bill-1-wave"
                        class="svg-inline--fa fa-money-bill-1-wave fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-check"
                  aria-pressed="false"
                  aria-label="money-check"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-check"
                        class="svg-inline--fa fa-money-check fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zM376 160h80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__money-check-dollar"
                  aria-pressed="false"
                  aria-label="money-check-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-check-dollar"
                        class="svg-inline--fa fa-money-check-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__monument"
                  aria-pressed="false"
                  aria-label="monument"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="monument"
                        class="svg-inline--fa fa-monument fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.1 5.8 4.6 9.3l40.2 322H55.9L96.1 94c.4-3.5 2-6.8 4.6-9.3l80-80zM152 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__napster"
                  aria-pressed="false"
                  aria-label="napster"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="napster"
                        class="svg-inline--fa fa-napster fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                     >
                        <path
                           fill="currentColor"
                           d="M298.3 373.6c-14.2 13.6-31.3 24.1-50.4 30.5-19-6.4-36.2-16.9-50.3-30.5h100.7zm44-199.6c20-16.9 43.6-29.2 69.6-36.2V299c0 219.4-328 217.6-328 .3V137.7c25.9 6.9 49.6 19.6 69.5 36.4 56.8-40 132.5-39.9 188.9-.1zm-208.8-58.5c64.4-60 164.3-60.1 228.9-.2-7.1 3.5-13.9 7.3-20.6 11.5-58.7-30.5-129.2-30.4-187.9.1-6.3-4-13.9-8.2-20.4-11.4zM43.8 93.2v69.3c-58.4 36.5-58.4 121.1.1 158.3 26.4 245.1 381.7 240.3 407.6 1.5l.3-1.7c58.7-36.3 58.9-121.7.2-158.2V93.2c-17.3.5-34 3-50.1 7.4-82-91.5-225.5-91.5-307.5.1-16.3-4.4-33.1-7-50.6-7.5zM259.2 352s36-.3 61.3-1.5c10.2-.5 21.1-4 25.5-6.5 26.3-15.1 25.4-39.2 26.2-47.4-79.5-.6-99.9-3.9-113 55.4zm-135.5-55.3c.8 8.2-.1 32.3 26.2 47.4 4.4 2.5 15.2 6 25.5 6.5 25.3 1.1 61.3 1.5 61.3 1.5-13.2-59.4-33.7-56.1-113-55.4zm169.1 123.4c-3.2-5.3-6.9-7.3-6.9-7.3-24.8 7.3-52.2 6.9-75.9 0 0 0-2.9 1.5-6.4 6.6-2.8 4.1-3.7 9.6-3.7 9.6 29.1 17.6 67.1 17.6 96.2 0-.1-.1-.3-4-3.3-8.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__newspaper"
                  aria-pressed="false"
                  aria-label="newspaper"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="newspaper"
                        class="svg-inline--fa fa-newspaper fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__object-group"
                  aria-pressed="false"
                  aria-label="object-group"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="object-group"
                        class="svg-inline--fa fa-object-group fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32H456.6C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V392.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V119.4zM456.6 96H119.4c-5.6 9.7-13.7 17.8-23.4 23.4V392.6c9.7 5.6 17.8 13.7 23.4 23.4H456.6c5.6-9.7 13.7-17.8 23.4-23.4V119.4c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM256 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V320z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__object-ungroup"
                  aria-pressed="false"
                  aria-label="object-ungroup"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="object-ungroup"
                        class="svg-inline--fa fa-object-ungroup fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32H328.6C339.6 12.9 360.3 0 384 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V232.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V119.4zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4V232.6c9.7 5.6 17.8 13.7 23.4 23.4H328.6c5.6-9.7 13.7-17.8 23.4-23.4V119.4c-9.7-5.6-17.8-13.7-23.4-23.4H119.4zm192 384c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V352h64v40.6c9.7 5.6 17.8 13.7 23.4 23.4H520.6c5.6-9.7 13.7-17.8 23.4-23.4V279.4c-9.7-5.6-17.8-13.7-23.4-23.4h-46c-5.4-15.4-14.6-28.9-26.5-39.6V192h72.6c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V392.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H311.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paintbrush"
                  aria-pressed="false"
                  aria-label="paintbrush"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paintbrush"
                        class="svg-inline--fa fa-paintbrush fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paint-roller"
                  aria-pressed="false"
                  aria-label="paint-roller"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paint-roller"
                        class="svg-inline--fa fa-paint-roller fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__palette"
                  aria-pressed="false"
                  aria-label="palette"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="palette"
                        class="svg-inline--fa fa-palette fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pallet"
                  aria-pressed="false"
                  aria-label="pallet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pallet"
                        class="svg-inline--fa fa-pallet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H64v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 320 544h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H576V384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H544 320 96 32zm96 64H288v64H128V384zm224 0H512v64H352V384z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paper-plane"
                  aria-pressed="false"
                  aria-label="paper-plane"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        class="svg-inline--fa fa-paper-plane fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paragraph"
                  aria-pressed="false"
                  aria-label="paragraph"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paragraph"
                        class="svg-inline--fa fa-paragraph fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-parking"
                  aria-pressed="false"
                  aria-label="square-parking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-parking"
                        class="svg-inline--fa fa-square-parking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__passport"
                  aria-pressed="false"
                  aria-label="passport"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="passport"
                        class="svg-inline--fa fa-passport fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8h39.1c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5h47.1c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8h39.1c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8H279.6zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5H200.5c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8H129.3c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__paste"
                  aria-pressed="false"
                  aria-label="paste"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paste"
                        class="svg-inline--fa fa-paste fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V256H416c-17.7 0-32-14.3-32-32V128H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm256 88v96h96l-96-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pause"
                  aria-pressed="false"
                  aria-label="pause"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pause"
                        class="svg-inline--fa fa-pause fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-pause"
                  aria-pressed="false"
                  aria-label="circle-pause"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-pause"
                        class="svg-inline--fa fa-circle-pause fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen"
                  aria-pressed="false"
                  aria-label="pen"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen"
                        class="svg-inline--fa fa-pen fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen-clip"
                  aria-pressed="false"
                  aria-label="pen-clip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen-clip"
                        class="svg-inline--fa fa-pen-clip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1 0 0-1-1 0 0-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen-fancy"
                  aria-pressed="false"
                  aria-label="pen-fancy"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen-fancy"
                        class="svg-inline--fa fa-pen-fancy fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen-nib"
                  aria-pressed="false"
                  aria-label="pen-nib"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen-nib"
                        class="svg-inline--fa fa-pen-nib fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-pen"
                  aria-pressed="false"
                  aria-label="square-pen"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-pen"
                        class="svg-inline--fa fa-square-pen fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pencil"
                  aria-pressed="false"
                  aria-label="pencil"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil"
                        class="svg-inline--fa fa-pencil fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pen-ruler"
                  aria-pressed="false"
                  aria-label="pen-ruler"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pen-ruler"
                        class="svg-inline--fa fa-pen-ruler fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__people-carry-box"
                  aria-pressed="false"
                  aria-label="people-carry-box"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="people-carry-box"
                        class="svg-inline--fa fa-people-carry-box fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm64 193.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7V186.6c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5V160c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32v76.2l10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6v88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51V241.7l-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8H256.7c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm77.9 348.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pepper-hot"
                  aria-pressed="false"
                  aria-label="pepper-hot"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pepper-hot"
                        class="svg-inline--fa fa-pepper-hot fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__percent"
                  aria-pressed="false"
                  aria-label="percent"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="percent"
                        class="svg-inline--fa fa-percent fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__percent"
                  aria-pressed="false"
                  aria-label="percent"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="percent"
                        class="svg-inline--fa fa-percent fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-booth"
                  aria-pressed="false"
                  aria-label="person-booth"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-booth"
                        class="svg-inline--fa fa-person-booth fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V192h64V32zm320 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM224 512c17.7 0 32-14.3 32-32V320H192V480c0 17.7 14.3 32 32 32zM320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM112 80A48 48 0 1 0 16 80a48 48 0 1 0 96 0zm0 261.3V269.3l4.7 4.7c9 9 21.2 14.1 33.9 14.1H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H157.3l-41.6-41.6c-14.3-14.3-33.8-22.4-54-22.4C27.6 160 0 187.6 0 221.6v55.7l0 .9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384l32 42.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V421.3c0-10.4-3.4-20.5-9.6-28.8L112 341.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__pinterest"
                  aria-pressed="false"
                  aria-label="pinterest"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="pinterest"
                        class="svg-inline--fa fa-pinterest fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                     >
                        <path
                           fill="currentColor"
                           d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__phone"
                  aria-pressed="false"
                  aria-label="phone"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone"
                        class="svg-inline--fa fa-phone fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__phone-flip"
                  aria-pressed="false"
                  aria-label="phone-flip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-flip"
                        class="svg-inline--fa fa-phone-flip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__phone-slash"
                  aria-pressed="false"
                  aria-label="phone-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-slash"
                        class="svg-inline--fa fa-phone-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M228.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C76.1 30.2 64 46 64 64c0 107.4 37.8 206 100.8 283.1L9.2 469.1c-10.4 8.2-12.3 23.3-4.1 33.7s23.3 12.3 33.7 4.1l592-464c10.4-8.2 12.3-23.3 4.1-33.7s-23.3-12.3-33.7-4.1L253 278c-17.8-21.5-32.9-45.2-45-70.7L257.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96zm96.8 319l-91.3 72C310.7 476 407.1 512 512 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L368.7 368c-15-7.1-29.3-15.2-43-24.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-phone"
                  aria-pressed="false"
                  aria-label="square-phone"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-phone"
                        class="svg-inline--fa fa-square-phone fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-phone-flip"
                  aria-pressed="false"
                  aria-label="square-phone-flip"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-phone-flip"
                        class="svg-inline--fa fa-square-phone-flip fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2L280 231.7c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3l-44-12z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__phone-volume"
                  aria-pressed="false"
                  aria-label="phone-volume"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-volume"
                        class="svg-inline--fa fa-phone-volume fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__photo-film"
                  aria-pressed="false"
                  aria-label="photo-film"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="photo-film"
                        class="svg-inline--fa fa-photo-film fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 0H576c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H552c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128h96V384v32c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V384H512v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V312c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H72zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H424c-8.8 0-16 7.2-16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__piggy-bank"
                  aria-pressed="false"
                  aria-label="piggy-bank"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="piggy-bank"
                        class="svg-inline--fa fa-piggy-bank fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__plane"
                  aria-pressed="false"
                  aria-label="plane"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plane"
                        class="svg-inline--fa fa-plane fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__plane-arrival"
                  aria-pressed="false"
                  aria-label="plane-arrival"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plane-arrival"
                        class="svg-inline--fa fa-plane-arrival fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__plane-departure"
                  aria-pressed="false"
                  aria-label="plane-departure"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plane-departure"
                        class="svg-inline--fa fa-plane-departure fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__play"
                  aria-pressed="false"
                  aria-label="play"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="play"
                        class="svg-inline--fa fa-play fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-play"
                  aria-pressed="false"
                  aria-label="circle-play"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-play"
                        class="svg-inline--fa fa-circle-play fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__plug"
                  aria-pressed="false"
                  aria-label="plug"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plug"
                        class="svg-inline--fa fa-plug fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-plus"
                  aria-pressed="false"
                  aria-label="circle-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-plus"
                        class="svg-inline--fa fa-circle-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-plus"
                  aria-pressed="false"
                  aria-label="square-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-plus"
                        class="svg-inline--fa fa-square-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__podcast"
                  aria-pressed="false"
                  aria-label="podcast"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="podcast"
                        class="svg-inline--fa fa-podcast fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-poll-vertical"
                  aria-pressed="false"
                  aria-label="square-poll-vertical"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-poll-vertical"
                        class="svg-inline--fa fa-square-poll-vertical fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-poll-horizontal"
                  aria-pressed="false"
                  aria-label="square-poll-horizontal"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-poll-horizontal"
                        class="svg-inline--fa fa-square-poll-horizontal fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__poo"
                  aria-pressed="false"
                  aria-label="poo"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="poo"
                        class="svg-inline--fa fa-poo fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80H160c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48H104c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72H440c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72H394.3c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64h-5.5c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3H339.7c6.8 0 12.3 5.5 12.3 12.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__image-portrait"
                  aria-pressed="false"
                  aria-label="image-portrait"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="image-portrait"
                        class="svg-inline--fa fa-image-portrait fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-praying"
                  aria-pressed="false"
                  aria-label="person-praying"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-praying"
                        class="svg-inline--fa fa-person-praying fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432H72c-22.1 0-40 17.9-40 40s17.9 40 40 40H280c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354l45-90z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__print"
                  aria-pressed="false"
                  aria-label="print"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="print"
                        class="svg-inline--fa fa-print fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__diagram-project"
                  aria-pressed="false"
                  aria-label="diagram-project"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="diagram-project"
                        class="svg-inline--fa fa-diagram-project fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__react"
                  aria-pressed="false"
                  aria-label="react"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="react"
                        class="svg-inline--fa fa-react fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__qrcode"
                  aria-pressed="false"
                  aria-label="qrcode"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="qrcode"
                        class="svg-inline--fa fa-qrcode fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__question"
                  aria-pressed="false"
                  aria-label="question"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="question"
                        class="svg-inline--fa fa-question fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-question"
                  aria-pressed="false"
                  aria-label="circle-question"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-question"
                        class="svg-inline--fa fa-circle-question fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__broom-ball"
                  aria-pressed="false"
                  aria-label="broom-ball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="broom-ball"
                        class="svg-inline--fa fa-broom-ball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M566.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-192 192 34.7 34.7c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H364.3L256 211.7V182.6c0-12.5 10.1-22.6 22.6-22.6c6 0 11.8 2.4 16 6.6l34.7 34.7 192-192c12.5-12.5 32.8-12.5 45.3 0zm-344 225.5L341.1 353.4c3.7 42.7-11.7 85.2-42.3 115.8C271.4 496.6 234.2 512 195.5 512L22.1 512C9.9 512 0 502.1 0 489.9c0-6.3 2.7-12.3 7.3-16.5L133.7 359.7c4.2-3.7-.4-10.4-5.4-7.9L77.2 377.4c-6.1 3-13.2-1.4-13.2-8.2c0-31.5 12.5-61.7 34.8-84l8-8c30.6-30.6 73.1-45.9 115.8-42.3zM464 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__quote-left"
                  aria-pressed="false"
                  aria-label="quote-left"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="quote-left"
                        class="svg-inline--fa fa-quote-left fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__quote-right"
                  aria-pressed="false"
                  aria-label="quote-right"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="quote-right"
                        class="svg-inline--fa fa-quote-right fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__radiation"
                  aria-pressed="false"
                  aria-label="radiation"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="radiation"
                        class="svg-inline--fa fa-radiation fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M216 186.7c-23.9 13.8-40 39.7-40 69.3L32 256C14.3 256-.2 241.6 2 224.1C10.7 154 47.8 92.7 101.3 52c14.1-10.7 33.8-5.3 42.7 10l72 124.7zM256 336c14.6 0 28.2-3.9 40-10.7l72 124.8c8.8 15.3 3.7 35.1-12.6 41.9c-30.6 12.9-64.2 20-99.4 20s-68.9-7.1-99.4-20c-16.3-6.9-21.4-26.6-12.6-41.9l72-124.8c11.8 6.8 25.4 10.7 40 10.7zm224-80l-144 0c0-29.6-16.1-55.5-40-69.3L368 62c8.8-15.3 28.6-20.7 42.7-10c53.6 40.7 90.6 102 99.4 172.1c2.2 17.5-12.4 31.9-30 31.9zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-radiation"
                  aria-pressed="false"
                  aria-label="circle-radiation"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-radiation"
                        class="svg-inline--fa fa-circle-radiation fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200 256c0-20.7 11.3-38.8 28-48.5l-36-62.3c-8.8-15.3-28.7-20.8-42-9c-25.6 22.6-43.9 53.3-50.9 88.1C95.7 241.5 110.3 256 128 256l72 0zm28 48.5l-36 62.4c-8.8 15.3-3.6 35.2 13.1 40.8c16 5.4 33.1 8.3 50.9 8.3s34.9-2.9 50.9-8.3c16.7-5.6 21.9-25.5 13.1-40.8l-36-62.4c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l72 0c17.7 0 32.3-14.5 28.8-31.8c-7-34.8-25.3-65.5-50.9-88.1c-13.2-11.7-33.1-6.3-42 9l-36 62.3c16.7 9.7 28 27.8 28 48.5zm-56 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__shuffle"
                  aria-pressed="false"
                  aria-label="shuffle"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shuffle"
                        class="svg-inline--fa fa-shuffle fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__receipt"
                  aria-pressed="false"
                  aria-label="receipt"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="receipt"
                        class="svg-inline--fa fa-receipt fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__arrow-rotate-right"
                  aria-pressed="false"
                  aria-label="arrow-rotate-right"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-rotate-right"
                        class="svg-inline--fa fa-arrow-rotate-right fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rotate-right"
                  aria-pressed="false"
                  aria-label="rotate-right"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rotate-right"
                        class="svg-inline--fa fa-rotate-right fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__registered"
                  aria-pressed="false"
                  aria-label="registered"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="registered"
                        class="svg-inline--fa fa-registered fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V264 152zm48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H208v64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__restroom"
                  aria-pressed="false"
                  aria-label="restroom"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="restroom"
                        class="svg-inline--fa fa-restroom fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V325.2c-8.1 9.2-21.1 13.2-33.5 9.4c-16.9-5.3-26.3-23.2-21-40.1l30.9-99.1C44.9 155.3 82 128 124 128h8c42 0 79.1 27.3 91.6 67.4l30.9 99.1c5.3 16.9-4.1 34.8-21 40.1c-12.4 3.9-25.4-.2-33.5-9.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H120zM320 0c13.3 0 24 10.7 24 24V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24zM464 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM440 480V384H422.2c-10.9 0-18.6-10.7-15.2-21.1l9-26.9c-3.2 0-6.4-.5-9.5-1.5c-16.9-5.3-26.3-23.2-21-40.1l29.7-95.2C428.4 156.9 467.6 128 512 128s83.6 28.9 96.8 71.2l29.7 95.2c5.3 16.9-4.1 34.8-21 40.1c-3.2 1-6.4 1.5-9.5 1.5l9 26.9c3.5 10.4-4.3 21.1-15.2 21.1H584v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H504v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__retweet"
                  aria-pressed="false"
                  aria-label="retweet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="retweet"
                        class="svg-inline--fa fa-retweet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rss"
                  aria-pressed="false"
                  aria-label="rss"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rss"
                        class="svg-inline--fa fa-rss fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__square-rss"
                  aria-pressed="false"
                  aria-label="square-rss"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square-rss"
                        class="svg-inline--fa fa-square-rss fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ruler-combined"
                  aria-pressed="false"
                  aria-label="ruler-combined"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ruler-combined"
                        class="svg-inline--fa fa-ruler-combined fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ruler-horizontal"
                  aria-pressed="false"
                  aria-label="ruler-horizontal"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ruler-horizontal"
                        class="svg-inline--fa fa-ruler-horizontal fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 336c0 26.5 21.5 48 48 48l544 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0c-26.5 0-48 21.5-48 48L0 336z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ruler-vertical"
                  aria-pressed="false"
                  aria-label="ruler-vertical"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ruler-vertical"
                        class="svg-inline--fa fa-ruler-vertical fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 48C0 21.5 21.5 0 48 0H208c26.5 0 48 21.5 48 48V96H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-running"
                  aria-pressed="false"
                  aria-label="person-running"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-running"
                        class="svg-inline--fa fa-person-running fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__satellite"
                  aria-pressed="false"
                  aria-label="satellite"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="satellite"
                        class="svg-inline--fa fa-satellite fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M233 7c-9.4-9.4-24.6-9.4-33.9 0l-96 96c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4-15.5 15.5C152.3 230.4 124.9 224 96 224c-31.7 0-61.5 7.7-87.8 21.2c-9 4.7-10.3 16.7-3.1 23.8L112.7 376.7 96.3 393.1c-2.6-.7-5.4-1.1-8.3-1.1c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32c0-2.9-.4-5.6-1.1-8.3l16.4-16.4L242.9 506.9c7.2 7.2 19.2 5.9 23.8-3.1C280.3 477.5 288 447.7 288 416c0-28.9-6.4-56.3-17.8-80.9l15.5-15.5L375 409c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4 55-55c12.5-12.5 12.5-32.8 0-45.3l-48-48c-12.5-12.5-32.8-12.5-45.3 0l-55 55L233 7zm159 351l-72.4-72.4 62.1-62.1L454.1 296 392 358.1zM226.3 192.4L153.9 120 216 57.9l72.4 72.4-62.1 62.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__satellite-dish"
                  aria-pressed="false"
                  aria-label="satellite-dish"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="satellite-dish"
                        class="svg-inline--fa fa-satellite-dish fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__floppy-disk"
                  aria-pressed="false"
                  aria-label="floppy-disk"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="floppy-disk"
                        class="svg-inline--fa fa-floppy-disk fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__sd-card"
                  aria-pressed="false"
                  aria-label="sd-card"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sd-card"
                        class="svg-inline--fa fa-sd-card fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 0H141.3C124.3 0 108 6.7 96 18.7L18.7 96C6.7 108 0 124.3 0 141.3V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 88v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24zm80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24zm80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__magnifying-glass-dollar"
                  aria-pressed="false"
                  aria-label="magnifying-glass-dollar"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass-dollar"
                        class="svg-inline--fa fa-magnifying-glass-dollar fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__magnifying-glass-location"
                  aria-pressed="false"
                  aria-label="magnifying-glass-location"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass-location"
                        class="svg-inline--fa fa-magnifying-glass-location fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__seedling"
                  aria-pressed="false"
                  aria-label="seedling"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="seedling"
                        class="svg-inline--fa fa-seedling fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__server"
                  aria-pressed="false"
                  aria-label="server"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="server"
                        class="svg-inline--fa fa-server fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__share"
                  aria-pressed="false"
                  aria-label="share"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="share"
                        class="svg-inline--fa fa-share fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__share-from-square"
                  aria-pressed="false"
                  aria-label="share-from-square"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="share-from-square"
                        class="svg-inline--fa fa-share-from-square fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__shield-halved"
                  aria-pressed="false"
                  aria-label="shield-halved"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shield-halved"
                        class="svg-inline--fa fa-shield-halved fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__truck-fast"
                  aria-pressed="false"
                  aria-label="truck-fast"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="truck-fast"
                        class="svg-inline--fa fa-truck-fast fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__shoe-prints"
                  aria-pressed="false"
                  aria-label="shoe-prints"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shoe-prints"
                        class="svg-inline--fa fa-shoe-prints fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bag-shopping"
                  aria-pressed="false"
                  aria-label="bag-shopping"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bag-shopping"
                        class="svg-inline--fa fa-bag-shopping fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__basket-shopping"
                  aria-pressed="false"
                  aria-label="basket-shopping"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="basket-shopping"
                        class="svg-inline--fa fa-basket-shopping fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cart-shopping"
                  aria-pressed="false"
                  aria-label="cart-shopping"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-shopping"
                        class="svg-inline--fa fa-cart-shopping fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__shower"
                  aria-pressed="false"
                  aria-label="shower"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shower"
                        class="svg-inline--fa fa-shower fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__van-shuttle"
                  aria-pressed="false"
                  aria-label="van-shuttle"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="van-shuttle"
                        class="svg-inline--fa fa-van-shuttle fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8zm482 88L465.1 96H384v96H546zm-226 0V96H224v96h96zM592 384H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104C0 64.2 32.2 32 72 32H192 352 465.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48zm-64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__right-to-bracket"
                  aria-pressed="false"
                  aria-label="right-to-bracket"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="right-to-bracket"
                        class="svg-inline--fa fa-right-to-bracket fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__right-from-bracket"
                  aria-pressed="false"
                  aria-label="right-from-bracket"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="right-from-bracket"
                        class="svg-inline--fa fa-right-from-bracket fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__signal"
                  aria-pressed="false"
                  aria-label="signal"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="signal"
                        class="svg-inline--fa fa-signal fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__sim-card"
                  aria-pressed="false"
                  aria-label="sim-card"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sim-card"
                        class="svg-inline--fa fa-sim-card fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0H242.7c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM96 192c-17.7 0-32 14.3-32 32v32h64V192H96zM64 352h80 96 80V288H240 144 64v64zM320 224c0-17.7-14.3-32-32-32H256v64h64V224zM160 192v64h64V192H160zM288 448c17.7 0 32-14.3 32-32V384H256v64h32zM160 384v64h64V384H160zM64 416c0 17.7 14.3 32 32 32h32V384H64v32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__sitemap"
                  aria-pressed="false"
                  aria-label="sitemap"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sitemap"
                        class="svg-inline--fa fa-sitemap fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-skating"
                  aria-pressed="false"
                  aria-label="person-skating"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-skating"
                        class="svg-inline--fa fa-person-skating fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 128c0-17.7 14.3-32 32-32H319.4c43.6 0 64.6 53.4 32.8 83.1l-74.4 69.4 60.2 60.2c9 9 14.1 21.2 14.1 33.9V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V349.3l-77.9-77.8c-26.6-26.6-24.6-70.3 4.3-94.4l20.4-17H160c-17.7 0-32-14.3-32-32zM81.4 353.4l86.9-86.9c4.6 10 11 19.3 19.3 27.5l21.8 21.8-82.7 82.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3zm322.5 95.1c8.6 2.1 13.8 10.8 11.6 19.4l-.4 1.7c-6.2 24.9-28.6 42.4-54.3 42.4H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h88.8c11 0 20.6-7.5 23.3-18.2l.4-1.7c2.1-8.6 10.8-13.8 19.4-11.6zM135.2 478.3l-6.2 3.1c-21.6 10.8-47.6 6.6-64.6-10.5L4.7 411.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l59.6 59.6c7.3 7.3 18.5 9.1 27.7 4.5l6.2-3.1c7.9-4 17.5-.7 21.5 7.2s.7 17.5-7.2 21.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-skiing"
                  aria-pressed="false"
                  aria-label="person-skiing"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-skiing"
                        class="svg-inline--fa fa-person-skiing fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M380.7 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L232.7 361.3l46.2-69.2-75.1-75.1c-14.6-14.6-20.4-33.9-18.4-52.1l108.8 52 39.3 39.3c16.2 16.2 18.7 41.5 6 60.6L289.8 391l128.7 66.8c13.6 7.1 29.8 7.2 43.6 .3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7L12.9 301.3C1.2 295.2-3.4 280.7 2.7 268.9zM118.9 65.6L137 74.2l8.7-17.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-8.5 16.9 54.7 26.2c1.5-.7 3.1-1.4 4.7-2.1l83.4-33.4c34.2-13.7 72.8 4.2 84.5 39.2l17.1 51.2 52.1 26.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-58.1-29c-11.4-5.7-20-15.7-24.1-27.8l-5.8-17.3-27.3 12.1-6.8 3-6.7-3.2L151.5 116.7l-9.2 18.4c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l9-18-17.6-8.4c-8-3.8-11.3-13.4-7.5-21.3s13.4-11.3 21.3-7.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-skiing-nordic"
                  aria-pressed="false"
                  aria-label="person-skiing-nordic"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-skiing-nordic"
                        class="svg-inline--fa fa-person-skiing-nordic fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M336 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM227.2 160c1.9 0 3.8 .1 5.6 .3L201.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9L291.3 464H202.8l41.1-88.1-32.4-20.3c-7.8-4.9-14.7-10.7-20.6-17.3L132.2 464H99.7l54.2-257.6c4.6-1.5 9-4.1 12.7-7.8l23.1-23.1c9.9-9.9 23.4-15.5 37.5-15.5zM121.4 198.6c.4 .4 .8 .8 1.3 1.2L67 464H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H159.3c.4 0 .9 0 1.3 0H319.3c.5 0 1 0 1.4 0H504c39.8 0 72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 13.3-10.7 24-24 24H434.6l27.6-179.3c10.5-5.2 17.8-16.1 17.8-28.7c0-17.7-14.3-32-32-32H426.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3l-23.1 23.1c-12.5 12.5-12.5 32.8 0 45.3zm308 89.4L402.3 464H357.8l21.6-75.6c5.9-20.6-2.6-42.6-20.7-53.9L302 299l30.9-82.4 5.1 12.3C353 264.7 387.9 288 426.7 288h2.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__skull-crossbones"
                  aria-pressed="false"
                  aria-label="skull-crossbones"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="skull-crossbones"
                        class="svg-inline--fa fa-skull-crossbones fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M368 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V234.4c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__sliders"
                  aria-pressed="false"
                  aria-label="sliders"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sliders"
                        class="svg-inline--fa fa-sliders fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__face-smile"
                  aria-pressed="false"
                  aria-label="face-smile"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="face-smile"
                        class="svg-inline--fa fa-face-smile fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__smoking"
                  aria-pressed="false"
                  aria-label="smoking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="smoking"
                        class="svg-inline--fa fa-smoking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M448 32V43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v11c0 17.7-14.3 32-32 32s-32-14.3-32-32V245c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43V32c0-17.7 14.3-32 32-32s32 14.3 32 32zM576 256V245c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V32c0-17.7 14.3-32 32-32s32 14.3 32 32V43c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1v11c0 17.7-14.3 32-32 32s-32-14.3-32-32zM0 416c0-35.3 28.7-64 64-64H416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V416zm224 0v32H384V416H224zm288-64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ban-smoking"
                  aria-pressed="false"
                  aria-label="ban-smoking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ban-smoking"
                        class="svg-inline--fa fa-ban-smoking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32H384v32H333.3zm32 32H400c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H269.3L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48H304c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM229.5 320l-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H229.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__snapchat"
                  aria-pressed="false"
                  aria-label="snapchat"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="snapchat"
                        class="svg-inline--fa fa-snapchat fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-snowboarding"
                  aria-pressed="false"
                  aria-label="person-snowboarding"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-snowboarding"
                        class="svg-inline--fa fa-person-snowboarding fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M209.7 3.4c15.8-7.9 35-1.5 42.9 14.3l25 50 42.4 8.5c19.5 3.9 37.8 12.3 53.5 24.5l126.1 98.1c14 10.9 16.5 31 5.6 44.9s-31 16.5-44.9 5.6l-72.1-56.1-71.5 31.8 33.1 27.6c23.2 19.3 33.5 50 26.7 79.4l-17.4 75.2c-2.2 9.4-8.2 16.8-16.1 21l86.5 33.1c4.6 1.8 9.4 2.6 14.3 2.6H472c13.3 0 24 10.7 24 24s-10.7 24-24 24H443.8c-10.8 0-21.4-2-31.5-5.8L60.1 371.3c-11.5-4.4-22-11.2-30.8-20L7 329c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.4 22.4c4 4 8.7 7.1 14 9.1l22.4 8.6c-.8-1.6-1.5-3.2-2.1-4.9c-5.6-16.8 3.5-34.9 20.2-40.5L192 264.9l0-53.2c0-24.2 13.7-46.4 35.4-57.2l45.2-22.6-7.5-1.5c-19.4-3.9-35.9-16.5-44.7-34.1l-25-50c-7.9-15.8-1.5-35 14.3-42.9zM139 350.1l159 60.9c-2.1-5.6-2.6-11.9-1.1-18.2l17.4-75.2c1.4-5.9-.7-12-5.3-15.9l-52.8-44 0 18.8c0 20.7-13.2 39-32.8 45.5L139 350.1zM432 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__socks"
                  aria-pressed="false"
                  aria-label="socks"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="socks"
                        class="svg-inline--fa fa-socks fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M175.2 476.6c-9.7-18-15.2-38.7-15.2-60.6c0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6V96H128V240c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2zM128 64H288V48c0-14.5 3.9-28.2 10.7-39.9C291 3 281.9 0 272 0H176c-26.5 0-48 21.5-48 48V64zM320 96V240c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304V96H320zM512 64V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48V64H512z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__soundcloud"
                  aria-pressed="false"
                  aria-label="soundcloud"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="soundcloud"
                        class="svg-inline--fa fa-soundcloud fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__spa"
                  aria-pressed="false"
                  aria-label="spa"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="spa"
                        class="svg-inline--fa fa-spa fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__splotch"
                  aria-pressed="false"
                  aria-label="splotch"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="splotch"
                        class="svg-inline--fa fa-splotch fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M208.5 62.3l28.1-36.9C248.8 9.4 267.8 0 288 0c28.5 0 53.6 18.7 61.8 46l17.8 59.4c10.3 34.4 36.1 62 69.8 74.6l39.8 14.9c20.9 7.9 34.8 27.9 34.8 50.2c0 16.9-7.9 32.8-21.5 42.9l-67.3 50.5c-24.3 18.2-37.2 47.9-33.8 78.1l2.5 22.7c4.3 38.7-26 72.6-65 72.6c-14.8 0-29.3-5.1-40.8-14.3l-55.4-44.3c-4.5-3.6-9.3-6.7-14.5-9.2c-15.8-7.9-33.7-10.4-51-7.3L82.4 451.9C47.8 458.2 16 431.6 16 396.5c0-13.2 4.7-26 13.1-36.2l11.2-13.4c14.6-17.4 22.6-39.4 22.6-62.1c0-18.8-5.5-37.2-15.8-53L8.8 173.5C3.1 164.7 0 154.4 0 143.9c0-33.4 30.1-58.8 63-53.2l51.3 8.7c35.9 6.1 72.2-8.2 94.2-37.1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__spotify"
                  aria-pressed="false"
                  aria-label="spotify"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="spotify"
                        class="svg-inline--fa fa-spotify fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                     >
                        <path
                           fill="currentColor"
                           d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__spray-can"
                  aria-pressed="false"
                  aria-label="spray-can"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="spray-can"
                        class="svg-inline--fa fa-spray-can fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 0h64c17.7 0 32 14.3 32 32v96H96V32c0-17.7 14.3-32 32-32zM0 256c0-53 43-96 96-96H224c53 0 96 43 96 96V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__stamp"
                  aria-pressed="false"
                  aria-label="stamp"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="stamp"
                        class="svg-inline--fa fa-stamp fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8c10.7 13.8 19.9 29.6 19.9 47c0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368c0 20.9 13.4 38.7 32 45.3V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V413.3c18.6-6.6 32-24.4 32-45.3c0-61.9-50.1-112-112-112H366.2c-29.9 0-54.2-24.3-54.2-54.2zM416 416v32H96V416H416z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__star"
                  aria-pressed="false"
                  aria-label="star"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        class="svg-inline--fa fa-star fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__star-half"
                  aria-pressed="false"
                  aria-label="star-half"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star-half"
                        class="svg-inline--fa fa-star-half fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0zM429.9 512c1.1 .1 2.1 .1 3.2 0h-3.2z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__star-half-stroke"
                  aria-pressed="false"
                  aria-label="star-half-stroke"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star-half-stroke"
                        class="svg-inline--fa fa-star-half-stroke fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__backward-step"
                  aria-pressed="false"
                  aria-label="backward-step"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="backward-step"
                        class="svg-inline--fa fa-backward-step fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__forward-step"
                  aria-pressed="false"
                  aria-label="forward-step"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="forward-step"
                        class="svg-inline--fa fa-forward-step fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__note-sticky"
                  aria-pressed="false"
                  aria-label="note-sticky"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="note-sticky"
                        class="svg-inline--fa fa-note-sticky fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__stop"
                  aria-pressed="false"
                  aria-label="stop"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="stop"
                        class="svg-inline--fa fa-stop fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__circle-stop"
                  aria-pressed="false"
                  aria-label="circle-stop"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle-stop"
                        class="svg-inline--fa fa-circle-stop fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__bars-staggered"
                  aria-pressed="false"
                  aria-label="bars-staggered"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars-staggered"
                        class="svg-inline--fa fa-bars-staggered fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__street-view"
                  aria-pressed="false"
                  aria-label="street-view"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="street-view"
                        class="svg-inline--fa fa-street-view fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__stripe"
                  aria-pressed="false"
                  aria-label="stripe"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="stripe"
                        class="svg-inline--fa fa-stripe fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__stripe-s"
                  aria-pressed="false"
                  aria-label="stripe-s"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="stripe-s"
                        class="svg-inline--fa fa-stripe-s fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9 43.4 0 98.5 13.3 141.9 36.7V26.1C298.3 7.2 251.1 0 203.8 0 88.1 0 11 60.4 11 161.4c0 157.9 216.8 132.3 216.8 200.4 0 26.4-22.9 34.9-54.7 34.9-47.2 0-108.2-19.5-156.1-45.5v128.5a396.09 396.09 0 0 0 156 32.4c118.6 0 200.3-51 200.3-153.6 0-170.2-218-139.7-218-203.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__stroopwafel"
                  aria-pressed="false"
                  aria-label="stroopwafel"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="stroopwafel"
                        class="svg-inline--fa fa-stroopwafel fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__suitcase"
                  aria-pressed="false"
                  aria-label="suitcase"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="suitcase"
                        class="svg-inline--fa fa-suitcase fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__suitcase-rolling"
                  aria-pressed="false"
                  aria-label="suitcase-rolling"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="suitcase-rolling"
                        class="svg-inline--fa fa-suitcase-rolling fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72H144V56zm176 72H288V56c0-30.9-25.1-56-56-56H152C121.1 0 96 25.1 96 56v72H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32H256c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__swatchbook"
                  aria-pressed="false"
                  aria-label="swatchbook"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="swatchbook"
                        class="svg-inline--fa fa-swatchbook fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-swimming"
                  aria-pressed="false"
                  aria-label="person-swimming"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-swimming"
                        class="svg-inline--fa fa-person-swimming fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__water-ladder"
                  aria-pressed="false"
                  aria-label="water-ladder"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="water-ladder"
                        class="svg-inline--fa fa-water-ladder fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V224H384V127.7C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3h0V288H192v96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1V127.7zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__arrows-rotate"
                  aria-pressed="false"
                  aria-label="arrows-rotate"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrows-rotate"
                        class="svg-inline--fa fa-arrows-rotate fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rotate"
                  aria-pressed="false"
                  aria-label="rotate"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rotate"
                        class="svg-inline--fa fa-rotate fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__table"
                  aria-pressed="false"
                  aria-label="table"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="table"
                        class="svg-inline--fa fa-table fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__table-tennis-paddle-ball"
                  aria-pressed="false"
                  aria-label="table-tennis-paddle-ball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="table-tennis-paddle-ball"
                        class="svg-inline--fa fa-table-tennis-paddle-ball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M480 288c-50.1 0-93.6 28.8-114.6 70.8L132.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C535.8 297.6 509 288 480 288zM113.3 151.9L354.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3H357c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L152.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32c-6.3-6.3-9.7-14.9-9.4-23.8s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8c-24-24-37.5-56.6-37.5-90.5v-2.7c0-22.8 6.1-44.9 17.3-64.3zM480 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tablet"
                  aria-pressed="false"
                  aria-label="tablet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tablet"
                        class="svg-inline--fa fa-tablet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM176 432h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tablet-screen-button"
                  aria-pressed="false"
                  aria-label="tablet-screen-button"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tablet-screen-button"
                        class="svg-inline--fa fa-tablet-screen-button fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tag"
                  aria-pressed="false"
                  aria-label="tag"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tag"
                        class="svg-inline--fa fa-tag fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tags"
                  aria-pressed="false"
                  aria-label="tags"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tags"
                        class="svg-inline--fa fa-tags fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__list-check"
                  aria-pressed="false"
                  aria-label="list-check"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="list-check"
                        class="svg-inline--fa fa-list-check fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__taxi"
                  aria-pressed="false"
                  aria-label="taxi"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="taxi"
                        class="svg-inline--fa fa-taxi fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 0c-17.7 0-32 14.3-32 32V64c0 .1 0 .1 0 .2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288V432v48c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V432H416v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V432 288c0-26.7-16.4-49.6-39.6-59.2L437.2 128.3c-12.9-36.8-46.6-62-85.2-64.1c0-.1 0-.1 0-.2V32c0-17.7-14.3-32-32-32H192zM165.4 128H346.6c13.6 0 25.7 8.6 30.2 21.4L402.9 224H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__telegram"
                  aria-pressed="false"
                  aria-label="telegram"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="telegram"
                        class="svg-inline--fa fa-telegram fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                     >
                        <path
                           fill="currentColor"
                           d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__terminal"
                  aria-pressed="false"
                  aria-label="terminal"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="terminal"
                        class="svg-inline--fa fa-terminal fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__temperature-empty"
                  aria-pressed="false"
                  aria-label="temperature-empty"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="temperature-empty"
                        class="svg-inline--fa fa-temperature-empty fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM160 0C98.1 0 48 50.2 48 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__temperature-full"
                  aria-pressed="false"
                  aria-label="temperature-full"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="temperature-full"
                        class="svg-inline--fa fa-temperature-full fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__temperature-half"
                  aria-pressed="false"
                  aria-label="temperature-half"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="temperature-half"
                        class="svg-inline--fa fa-temperature-half fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__temperature-quarter"
                  aria-pressed="false"
                  aria-label="temperature-quarter"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="temperature-quarter"
                        class="svg-inline--fa fa-temperature-quarter fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__temperature-three-quarters"
                  aria-pressed="false"
                  aria-label="temperature-three-quarters"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="temperature-three-quarters"
                        class="svg-inline--fa fa-temperature-three-quarters fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__thumbs-down"
                  aria-pressed="false"
                  aria-label="thumbs-down"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="thumbs-down"
                        class="svg-inline--fa fa-thumbs-down fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__thumbs-up"
                  aria-pressed="false"
                  aria-label="thumbs-up"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="thumbs-up"
                        class="svg-inline--fa fa-thumbs-up fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__thumbtack"
                  aria-pressed="false"
                  aria-label="thumbtack"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="thumbtack"
                        class="svg-inline--fa fa-thumbtack fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__droplet"
                  aria-pressed="false"
                  aria-label="droplet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="droplet"
                        class="svg-inline--fa fa-droplet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__droplet-slash"
                  aria-pressed="false"
                  aria-label="droplet-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="droplet-slash"
                        class="svg-inline--fa fa-droplet-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 512c53.2 0 101.4-21.6 136.1-56.6l-298.3-235C140 257.1 128 292.3 128 320c0 106 86 192 192 192zM505.2 370.7c4.4-16.1 6.8-33.1 6.8-50.7c0-91.2-130.2-262.3-166.6-308.3C339.4 4.2 330.5 0 320.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7C277.8 33 240.7 81.3 205.8 136L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L505.2 370.7zM224 336c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__toggle-off"
                  aria-pressed="false"
                  aria-label="toggle-off"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="toggle-off"
                        class="svg-inline--fa fa-toggle-off fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__toggle-on"
                  aria-pressed="false"
                  aria-label="toggle-on"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="toggle-on"
                        class="svg-inline--fa fa-toggle-on fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__trademark"
                  aria-pressed="false"
                  aria-label="trademark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="trademark"
                        class="svg-inline--fa fa-trademark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128V384c0 17.7 14.3 32 32 32s32-14.3 32-32V224l86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-13.8-8.8-26-21.9-30.4s-27.5 .1-35.7 11.2L464 266.7 345.6 108.8zM0 128c0 17.7 14.3 32 32 32H96V384c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 96 0 110.3 0 128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__cable-car"
                  aria-pressed="false"
                  aria-label="cable-car"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cable-car"
                        class="svg-inline--fa fa-cable-car fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 56a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 288c0-35.3 28.7-64 64-64H232V157.5l-203.1 42c-13 2.7-25.7-5.7-28.4-18.6s5.7-25.7 18.6-28.4l232-48 232-48c13-2.7 25.7 5.7 28.4 18.6s-5.7 25.7-18.6 28.4L280 147.5V224H416c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V288zm64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H96zm112 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H352z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__trophy"
                  aria-pressed="false"
                  aria-label="trophy"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="trophy"
                        class="svg-inline--fa fa-trophy fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__truck"
                  aria-pressed="false"
                  aria-label="truck"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="truck"
                        class="svg-inline--fa fa-truck fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tty"
                  aria-pressed="false"
                  aria-label="tty"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tty"
                        class="svg-inline--fa fa-tty fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.3 241.3L15.1 200.6c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4V144c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4L76.1 255.8c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V336zm0 96c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V432zM144 320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V336zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V336zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V432c0-8.8 7.2-16 16-16zM128 432c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V432z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__tv"
                  aria-pressed="false"
                  aria-label="tv"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="tv"
                        class="svg-inline--fa fa-tv fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__twitter"
                  aria-pressed="false"
                  aria-label="twitter"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        class="svg-inline--fa fa-twitter fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__umbrella-beach"
                  aria-pressed="false"
                  aria-label="umbrella-beach"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="umbrella-beach"
                        class="svg-inline--fa fa-umbrella-beach fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__arrow-rotate-left"
                  aria-pressed="false"
                  aria-label="arrow-rotate-left"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-rotate-left"
                        class="svg-inline--fa fa-arrow-rotate-left fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rotate-left"
                  aria-pressed="false"
                  aria-label="rotate-left"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rotate-left"
                        class="svg-inline--fa fa-rotate-left fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__unlock"
                  aria-pressed="false"
                  aria-label="unlock"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="unlock"
                        class="svg-inline--fa fa-unlock fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__unlock-keyhole"
                  aria-pressed="false"
                  aria-label="unlock-keyhole"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="unlock-keyhole"
                        class="svg-inline--fa fa-unlock-keyhole fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 64c-44.2 0-80 35.8-80 80v48H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80V144C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__upload"
                  aria-pressed="false"
                  aria-label="upload"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        class="svg-inline--fa fa-upload fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-large"
                  aria-pressed="false"
                  aria-label="user-large"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-large"
                        class="svg-inline--fa fa-user-large fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-large-slash"
                  aria-pressed="false"
                  aria-label="user-large-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-large-slash"
                        class="svg-inline--fa fa-user-large-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9L38.8 5.1zM545.5 512H528L284.3 320h-59C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7H545.3l.3 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-astronaut"
                  aria-pressed="false"
                  aria-label="user-astronaut"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-astronaut"
                        class="svg-inline--fa fa-user-astronaut fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-check"
                  aria-pressed="false"
                  aria-label="user-check"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-check"
                        class="svg-inline--fa fa-user-check fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-clock"
                  aria-pressed="false"
                  aria-label="user-clock"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-clock"
                        class="svg-inline--fa fa-user-clock fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304c0-8.8-7.2-16-16-16z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-gear"
                  aria-pressed="false"
                  aria-label="user-gear"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-gear"
                        class="svg-inline--fa fa-user-gear fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-pen"
                  aria-pressed="false"
                  aria-label="user-pen"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-pen"
                        class="svg-inline--fa fa-user-pen fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-group"
                  aria-pressed="false"
                  aria-label="user-group"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-group"
                        class="svg-inline--fa fa-user-group fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-graduate"
                  aria-pressed="false"
                  aria-label="user-graduate"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-graduate"
                        class="svg-inline--fa fa-user-graduate fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-injured"
                  aria-pressed="false"
                  aria-label="user-injured"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-injured"
                        class="svg-inline--fa fa-user-injured fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M240 80H342.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM124 312.4c-9.7 3.1-19.1 7-28 11.7V512H243.7L181.5 408.2 124 312.4zm33-7.2L204.3 384H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3c-7.2 0-14.3 .4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48H223.5l57.1 95.2C303 507.2 320 487.6 320 464z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-lock"
                  aria-pressed="false"
                  aria-label="user-lock"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-lock"
                        class="svg-inline--fa fa-user-lock fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__ship"
                  aria-pressed="false"
                  aria-label="ship"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ship"
                        class="svg-inline--fa fa-ship fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 32c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V64h48c26.5 0 48 21.5 48 48V240l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48V32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160v90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__sailboat"
                  aria-pressed="false"
                  aria-label="sailboat"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sailboat"
                        class="svg-inline--fa fa-sailboat fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5V336c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-doctor"
                  aria-pressed="false"
                  aria-label="user-doctor"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-doctor"
                        class="svg-inline--fa fa-user-doctor fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-minus"
                  aria-pressed="false"
                  aria-label="user-minus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-minus"
                        class="svg-inline--fa fa-user-minus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-ninja"
                  aria-pressed="false"
                  aria-label="user-ninja"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-ninja"
                        class="svg-inline--fa fa-user-ninja fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-nurse"
                  aria-pressed="false"
                  aria-label="user-nurse"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-nurse"
                        class="svg-inline--fa fa-user-nurse fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-plus"
                  aria-pressed="false"
                  aria-label="user-plus"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-plus"
                        class="svg-inline--fa fa-user-plus fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-shield"
                  aria-pressed="false"
                  aria-label="user-shield"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-shield"
                        class="svg-inline--fa fa-user-shield fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-slash"
                  aria-pressed="false"
                  aria-label="user-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-slash"
                        class="svg-inline--fa fa-user-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-tag"
                  aria-pressed="false"
                  aria-label="user-tag"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-tag"
                        class="svg-inline--fa fa-user-tag fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-tie"
                  aria-pressed="false"
                  aria-label="user-tie"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-tie"
                        class="svg-inline--fa fa-user-tie fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__user-xmark"
                  aria-pressed="false"
                  aria-label="user-xmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-xmark"
                        class="svg-inline--fa fa-user-xmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__users"
                  aria-pressed="false"
                  aria-label="users"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="users"
                        class="svg-inline--fa fa-users fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__users-gear"
                  aria-pressed="false"
                  aria-label="users-gear"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="users-gear"
                        class="svg-inline--fa fa-users-gear fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__utensils"
                  aria-pressed="false"
                  aria-label="utensils"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="utensils"
                        class="svg-inline--fa fa-utensils fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__vector-square"
                  aria-pressed="false"
                  aria-label="vector-square"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="vector-square"
                        class="svg-inline--fa fa-vector-square fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__video"
                  aria-pressed="false"
                  aria-label="video"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="video"
                        class="svg-inline--fa fa-video fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__video-slash"
                  aria-pressed="false"
                  aria-label="video-slash"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="video-slash"
                        class="svg-inline--fa fa-video-slash fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9V192 320v5.8l-32-25.1V128c0-35.3-28.7-64-64-64H113.9L38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5V384c0 35.3 28.7 64 64 64H352c23.4 0 43.9-12.6 55-31.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__voicemail"
                  aria-pressed="false"
                  aria-label="voicemail"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="voicemail"
                        class="svg-inline--fa fa-voicemail fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm119.8 0c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144H496c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.8zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__volleyball"
                  aria-pressed="false"
                  aria-label="volleyball"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="volleyball"
                        class="svg-inline--fa fa-volleyball fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1c9.2-105.3-31.5-204.2-103.2-272.4C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4zm-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6zm-236-55.5c-2.5-90.9-41.1-172.7-101.9-231.7C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9 .1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8zm69.6 90.5c19.5 38.6 31 81.9 32.3 127.7C162.5 294.6 110.9 368.9 90.2 451C66 430.4 45.6 405.4 30.4 377.2c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7C232.2 454.6 338.1 468.8 433 441c-46 44-108.3 71-177 71z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__volume-low"
                  aria-pressed="false"
                  aria-label="volume-low"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="volume-low"
                        class="svg-inline--fa fa-volume-low fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__volume-xmark"
                  aria-pressed="false"
                  aria-label="volume-xmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="volume-xmark"
                        class="svg-inline--fa fa-volume-xmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__volume-off"
                  aria-pressed="false"
                  aria-label="volume-off"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="volume-off"
                        class="svg-inline--fa fa-volume-off fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__volume-high"
                  aria-pressed="false"
                  aria-label="volume-high"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="volume-high"
                        class="svg-inline--fa fa-volume-high fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__vuejs"
                  aria-pressed="false"
                  aria-label="vuejs"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="vuejs"
                        class="svg-inline--fa fa-vuejs fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                     >
                        <path
                           fill="currentColor"
                           d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__person-walking"
                  aria-pressed="false"
                  aria-label="person-walking"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-walking"
                        class="svg-inline--fa fa-person-walking fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wallet"
                  aria-pressed="false"
                  aria-label="wallet"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wallet"
                        class="svg-inline--fa fa-wallet fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__warehouse"
                  aria-pressed="false"
                  aria-label="warehouse"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="warehouse"
                        class="svg-inline--fa fa-warehouse fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                     >
                        <path
                           fill="currentColor"
                           d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wheelchair"
                  aria-pressed="false"
                  aria-label="wheelchair"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wheelchair"
                        class="svg-inline--fa fa-wheelchair fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM120.5 247.2c12.4-4.7 18.7-18.5 14-30.9s-18.5-18.7-30.9-14C43.1 225.1 0 283.5 0 352c0 88.4 71.6 160 160 160c61.2 0 114.3-34.3 141.2-84.7c6.2-11.7 1.8-26.2-9.9-32.5s-26.2-1.8-32.5 9.9C240 440 202.8 464 160 464C98.1 464 48 413.9 48 352c0-47.9 30.1-88.8 72.5-104.8zM259.8 176l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4h5.1c.4 0 .8 0 1.3 0h94.1c6.7 0 12.6 4.1 15 10.4L402 459.2c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9H282.2l-9.6-48H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H259.8z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__rectangle-xmark"
                  aria-pressed="false"
                  aria-label="rectangle-xmark"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rectangle-xmark"
                        class="svg-inline--fa fa-rectangle-xmark fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__window-maximize"
                  aria-pressed="false"
                  aria-label="window-maximize"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="window-maximize"
                        class="svg-inline--fa fa-window-maximize fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__window-minimize"
                  aria-pressed="false"
                  aria-label="window-minimize"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="window-minimize"
                        class="svg-inline--fa fa-window-minimize fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__window-restore"
                  aria-pressed="false"
                  aria-label="window-restore"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="window-restore"
                        class="svg-inline--fa fa-window-restore fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wine-glass"
                  aria-pressed="false"
                  aria-label="wine-glass"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wine-glass"
                        class="svg-inline--fa fa-wine-glass fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M32.1 29.3C33.5 12.8 47.4 0 64 0H256c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6V448h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H160 80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V348.4C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7H231.9l-5.3-64H93.4l-5.3 64z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__wine-glass-empty"
                  aria-pressed="false"
                  aria-label="wine-glass-empty"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="wine-glass-empty"
                        class="svg-inline--fa fa-wine-glass-empty fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                     >
                        <path
                           fill="currentColor"
                           d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V348.4c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0H64zM81.9 203.1L93.4 64H226.6l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
            <li role="listitem" class="ng-star-inserted">
               <button
                  role="button"
                  class="cu-avatar-picker__icons-item"
                  data-test="avatar-picker__icons__youtube"
                  aria-pressed="false"
                  aria-label="youtube"
               >
                  <div size="1x" class="ng-fa-icon cu-avatar-picker__font-icon">
                     <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="youtube"
                        class="svg-inline--fa fa-youtube fa-1x"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                        <path
                           fill="currentColor"
                           d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        ></path>
                     </svg>
                  </div>
               </button>
            </li>
         </ul>
      </ul>
   );
}
