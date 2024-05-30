import PageEmployee from './component/PageEmployee';
// import { getCompany } from '@/_util/userHandler';
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



export default async function Employee() {

   let user = await getCompany()

  return (
    <>
      <PageEmployee user={user} />
    </>
  );
}

