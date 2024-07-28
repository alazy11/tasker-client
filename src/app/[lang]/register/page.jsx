import RegisterForm from './component/RegisterForm'
import './style/style.css';


export default function Register({params}) {
   return (
      <main className="main-container register-container-page">

<div className="login-page-new__main-bg ">

</div>

         <div className="inner-container relative">
            <RegisterForm lang={params.lang} />
         </div>
      </main>
   );
}