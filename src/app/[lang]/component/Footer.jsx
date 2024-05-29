
import logo from '../../../../public/project-image/logo.svg';
import Image from 'next/image';

export default function Footer() {
   return (
      <footer className='text-black'>
         <span>
            <Image src={logo} alt="logo icon" className='natural-img footer-logo' />
         </span>
         <div>
            © 2024 Tasker, Inc. Vristo All rights reserved.
         </div>
      </footer>
   );
}