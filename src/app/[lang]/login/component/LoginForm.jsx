import getDictionary from "../../../_dictionaries/dictionaries";
import Link from 'next/link';
import Form from "./Form";

export default async function LoginForm({ lang }) {

   const dic = await getDictionary(lang);

   return (
      <div className="form-container">
         <div className="inner-form-container">
            <div className="form-wrap">
            <div className="form-title">
               <h1>{dic.login.title}</h1>
               <p>{dic.login.note}</p>
            </div>
            <div className="form-cont">
               <Form dic={dic} />
               <div className="regester-page">
               {dic.login.register} 
               <Link href={`/${lang}/register`} className="register-link">
                  {dic.login.registerLink}
               </Link>
               </div>
            </div>
         </div>
         </div>
      </div>
   );
}
