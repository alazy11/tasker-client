import LoginForm from './component/LoginForm';
import './style/style.css';


export default function Login({params}) {
   
   return (
      <main className="main-container relative overflow-hidden">

<div className="login-page-new__main-bg ">

</div>

         <div className="inner-container">
            <LoginForm lang={params.lang} />
         </div>
      </main>
   );
}
