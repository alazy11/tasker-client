
import PageProject from "./component/ProjectPage";
// import { cookies } from 'next/headers';

async function getCompany() {
  let user;
  try {
    // const cookiesData = cookies().get('token').value;
    const res = await fetch(`${process.env.BACKEND_URL}/en/company`, {
      credentials: 'include',
      headers: {
        // authorization: `Bearer ${cookiesData}`,
        'cache-control': 'no-store',
      },
    });
    const data = await res.json();
    user = data.data;
  } catch (err) {
    console.log(err);
  }

  return user;

}

export default async function Member({params}) {


   let spaceID = params.spaceID;
   let projectID = params.projectID;
   let user = await getCompany();


   return (
      <>
      <PageProject user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
