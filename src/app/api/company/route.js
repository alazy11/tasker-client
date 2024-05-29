"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";


export async function POST(req) {
   const file = await req.formData();
   let img = file.get('image')
   console.log("file upload",file);
   console.log("img upload",img);
   // const arrayBuffer = await file.arrayBuffer();
   // const buffer = new Uint8Array(arrayBuffer);
 
   // await fs.writeFile(`./public/spaceIcons/${file.name}`, buffer);
 
   // revalidatePath("/");

   return Response.json({status:'seccess',data:{
      path: `/public/spaceIcons/${file.name}`,
   }});

}

// export async function uploadFile(formData: FormData) {
//   const file = formData.get("file") as File;
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = new Uint8Array(arrayBuffer);

//   await fs.writeFile(`./public/uploads/${file.name}`, buffer);

//   revalidatePath("/");
// }