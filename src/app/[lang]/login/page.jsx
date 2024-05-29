import LoginForm from './component/LoginForm';
import './style/style.css';


export default function Login({params}) {
   
   return (
      <main className="main-container">
         <div className="inner-container">
            <LoginForm lang={params.lang} />
         </div>
      </main>
   );
}
