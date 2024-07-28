
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
import TaskPage from './components/TaskPage';
import {getUser} from '@/_util/userHandler';

export default async function Space() {

   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   return(
    <div className='flex flex-col h-full'>
         <TopInlineNav link={
   [
      {
         link:`/en/user/tasks`,
         name:"Tasks"
      }
   ]
} />

      <TaskPage user={user} />
      </div>
   )
}