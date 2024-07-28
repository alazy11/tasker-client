import Connection from './component/Connection';
// import { headers } from "next/headers";
import TopInlineNav from './component/TopInlineNav';


export default function Company() {
   return(
      <div>

<TopInlineNav link={
   [
      {
         link:`/en/company`,
         name:"Home"
      }
   ]
} />

      <p>heloo</p>
      <Connection />
      </div>
   )
}