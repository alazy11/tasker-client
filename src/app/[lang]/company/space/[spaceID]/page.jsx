
// import TopMiddleNav from './component/TopMiddleNav';
// import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'

import SpaceIDPage from "./SpaceContainerId";

export default function SpaceID({params}) {

   let spaceID = params.spaceID;

   return (
      <SpaceIDPage spaceID={spaceID} /> 
   );
}