import RegisterForm from './component/RegisterForm'
import './style/style.css';


export default function Register({params}) {
   return (
      <main className="main-container">
         <div className="inner-container">
            <RegisterForm lang={params.lang} />
         </div>
      </main>
   );
}