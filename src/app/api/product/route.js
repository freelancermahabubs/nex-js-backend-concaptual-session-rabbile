import {NextResponse} from "next/server";
import {cookies, headers} from "next/headers";
import {redirect} from "next/navigation";
// import { handler } from "../auth/[...nextauth]/route";
// import {NextRequest} from "next/server";

// export async function GET(req, res) {
//   return NextResponse.json({msg: "Im a GET"});
//   //   try {
//   //     const {searchParams} = new URL(req.url);
//   //     console.log(searchParams);
//   //     let id = searchParams.get("id");
//   //     return NextResponse.json({msg: id});
//   //   } catch (eror) {
//   //     console.log(eror.message);
//   //   }
// }

// POST
// export async function POST(req, res) {
//   const {searchParams} = new URL(req.url);
//   let id = searchParams.get("id");
//   let name = searchParams.get("name");
//   let city = searchParams.get("city");

//   return NextResponse.json({id: id, name: name, city: city});
// }

// JSON
// POST
// export async function POST(req, res) {
//   const reqBody = await req.json();
//   let name = reqBody["name"];
//   let city = reqBody["city"];
//   let age = reqBody["age"];

//   return NextResponse.json({msg: age});
// }
// Form Data
// POST
// export async function POST(req, res) {
//   const reqBody = await req.formData();
//   let name = reqBody.get("name");
//   let city = reqBody.get("city");
//   let country = reqBody.get("country");

// calculation
// business logic
// model
// Databse Opration
// Neavy Execution
// Security
//   return NextResponse.json({country: country, name: name, city: city});
// }

// headers
// export async function POST(req, res) {

// let headList = headers()
// let Token = headList.get('Auth-Token')
//   return NextResponse.json({msg: Token});
// }

// cookies
// export async function POST(req, res) {
//   let csrf_token = req.cookies.get("csrf_token");
//   return NextResponse.json({msg: csrf_token});
// }

// respons headers and status code
// export async function POST(req, res) {
//   return NextResponse.json([
//     {
//       name: "mahabub",
//       age: 21,
//       city: "Mymenshingh",
//     },
//     {
//       name: "mahabub",
//       age: 21,
//       city: "Mymenshingh",
//     },
//     {
//       name: "mahabub",
//       age: 21,
//       city: "Mymenshingh",
//     },
//   ], {status: 201,
//   headers: {'token': "XYZ-ABC-123"}});
// }

// set respons cookies
export async function POST(req, res) {
  return NextResponse.json(
    [
      {
        name: "mahabub",
        age: 21,
        city: "Mymenshingh",
      },
      {
        name: "mahabub",
        age: 21,
        city: "Mymenshingh",
      },
      {
        name: "mahabub",
        age: 21,
        city: "Mymenshingh",
      },
    ],
    {status: 201, headers: {"Set-Cookie": "token=122;path=/"}}
  );
}

// redirect
export async function GET(req, res) {
  redirect("/");
}
