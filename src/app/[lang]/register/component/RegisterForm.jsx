import getDictionary from "../../../_dictionaries/dictionaries";
import Link from 'next/link';
// import PersonalForm from "./PersonalForm";
// import CompanyForm from "./CompanyForm";
import TapForm from './TapForm';

export default async function RegisterForm({ lang }) {
   
   const dic = await getDictionary(lang);

   return (
      <div className="form-container">
         <span style={{position:"fixed",top:"10px",left:'50%',backgroundColor:'#eee',zIndex:"1000"}}>asdkj dfm;lf</span>
         <div className="inner-form-container">
            <div className="form-wrap">
            <div className="form-title">
               <h1>{dic.register.title}</h1>
               <p>{dic.register.note}</p>
            </div>
            <div className="form-cont">
               {/* <div className="tap-container">
                  <button className="active">
                     Personal Account
                  </button>
                  <button>
                     Company Account
                  </button>
               </div>
               <div className="form-tap-container">
                  <PersonalForm dic={dic} classn={"active"} />
                  <CompanyForm dic={dic} />
               </div> */}
               <TapForm dic={dic}/>
               <div className="regester-page">
               {dic.register.login} 
               <Link href={`/${lang}/login`} className="register-link">
                  {dic.register.loginLink}
               </Link>
               </div>
            </div>
         </div>
         </div>
      </div>
   );
}
