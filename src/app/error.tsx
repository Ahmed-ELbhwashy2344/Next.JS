// "use client";
// import Link from "next/link";

// export default function Error() {
//   return (
//     <>
//       <div className=" container mx-auto text-4xl text-center mt-20 font-bold">
//         <div className="text-red-500">Something went wrong</div>
//         <h1 className="mt-10">
//           <Link  href="/">
//             Return To Home
//           </Link>
//         </h1>
//       </div>
//     </>
//   );
// }
"use client";
import Link from "next/link";
interface ErrorPageProps
{
    error:Error;
    reset: ()=> void;
}

export default function Error({error , reset}:ErrorPageProps) {
    
  return (
    <div className="container mx-auto text-4xl text-center font-bold mt-10">
      <p className="text-red-500 ">Something went wrong</p>

      <button
        onClick={() => reset()}
        className=" text-white bg-blue-600 p-5 cursor-pointer rounded-2xl mt-4"
      >
        Try Again
      </button>
      <h1 className="mt-5">Error Massage: {error.message}</h1>

      <Link href="/" className="block text-blue-500 underline mt-10">
        Return To Home
      </Link>
    </div>
  );
}
