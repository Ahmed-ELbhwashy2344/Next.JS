// "use client";
// import Articles from "@/components/articles/ArticlesItem";
// import { Article } from "@/utils/types";
// import React, { useEffect, useState } from "react";

// export default function articlespage() {
//   const [myData, setMyData] = useState<Article[]>([]);
//   const datafetching = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/123posts");
//     if (!response.ok) {
//       throw new Error("failed to fetch");
//     }
//     const data: Article[] = await response.json();
//     setMyData(data);
//     // console.log(data);
//   };
//   useEffect(() => {
//     datafetching();
//   }, []);

//   return (
//     <div className=" container mx-auto flex flex-wrap items-center justify-center">
//       {myData.map((result, index) => (
//         <Articles article={result} key={index} />
//       ))}
//     </div>
//   );
// }
import Articles from "@/components/articles/ArticlesItem";
import { Article } from "@/utils/types";

export default async function ArticlesPage() {


  await new Promise((resolve) => setTimeout(resolve, 1000));


  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  const data: Article[] = await response.json();

  return (
    <div className="container fade-in mx-auto px-4 py-8 flex flex-wrap justify-start items-stretch">
    {data.map((result, index) => (
      <Articles article={result} key={index} />
    ))}
  </div>
  );
}
