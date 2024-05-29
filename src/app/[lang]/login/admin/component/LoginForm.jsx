// import getDictionary from "../../../_dictionaries/dictionaries";
import getDictionary from "@/app/_dictionaries/dictionaries";
import Form from "./Form";

export default async function LoginForm({ lang }) {

   const dic = await getDictionary(lang);

   return (
      <div className="form-container">
         <div className="inner-form-container">
            <div className="form-wrap">
            <div className="form-title">
               <h1>{dic.login.admin.title}</h1>
               {/* <p>{dic.login.note}</p> */}
            </div>
            <div className="form-cont">
               <Form dic={dic} />
            </div>
         </div>
         </div>
      </div>
   );
}
