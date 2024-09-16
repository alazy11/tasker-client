
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
import TaskPage from './components/TaskPage';

export default async function Space() {

   return(
    <div className='flex flex-col h-full'>
         <TopInlineNav link={
   [
      {
         link:`/en/company/requests`,
         name:"Tasks"
      }
   ]
} />

      <TaskPage />
      </div>
   )
}