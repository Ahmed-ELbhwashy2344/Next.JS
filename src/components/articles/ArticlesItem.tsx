import {Article} from '@/utils/types'
import Link from 'next/link'


interface ArticlesItemProps 
{
    article:Article,
}
export default function Articles({article}:ArticlesItemProps) {
  return (
      <div className="w-1/4 border-2 border-black m-2 p-3 flex flex-col items-center  " >
       <h1 className=' line-clamp-1'>{article.title}</h1>
       <p className=" font-bold line-clamp-3">{article.body}</p>
       <Link className=' bg-blue-500 font-bold text-2xl text-white mt-5 p-2 rounded-2xl ' href={`/articles/${article.id}`}>Read More</Link>
      </div>
  )
}
