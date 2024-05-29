
import ProjectListPanal from './component/ProjectListPanal';
import ProjectListOption from './component/ProjectListOption';
import NewProjectModel from './component/NewProjectModel'
import TopInlineNav from '../component/TopInlineNav';

export default function Project() {
   
   return (
      <div className={'flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full'}>
         <ProjectListOption />
         <div class="overlay bg-black/60 z-[5] w-full h-full rounded-md absolute hidden false"></div>
         <ProjectListPanal />
         {/* <NewProjectModel /> */}
      </div>
   );

}