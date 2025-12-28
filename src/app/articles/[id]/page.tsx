import { Article } from '@/utils/types';
import React from 'react'
interface PageProps
{
    params : {id: string}
}
export default async function page({params} : PageProps) {
    
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if(!response.ok)
    {
        throw new Error("Failed To Fetch")
    }
    const data: Article = await response.json();
  return (
    <div>
        {data.title}
        {data.body}
        

    </div>
  )
}
