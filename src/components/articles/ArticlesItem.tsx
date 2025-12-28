import {Article} from '@/utils/types'
import Link from 'next/link'


interface ArticlesItemProps 
{
    article:Article,
}
export default function Articles({article}:ArticlesItemProps) {
  return (
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"> 
    <div className="border-2 border-black p-4 flex flex-col items-center h-full hover:shadow-lg transition-shadow bg-white rounded-xl">
      <h1 className="line-clamp-1 font-bold text-xl mb-2">{article.title}</h1>
      <p className="line-clamp-3 text-gray-700">{article.body}</p>
      <Link 
        className="bg-blue-500 font-bold text-xl text-white mt-auto p-2 w-full text-center rounded-2xl hover:bg-blue-600 transition-colors" 
        href={`/articles/${article.id}`}
      >
        Read More
      </Link>
    </div>
  </div>
  )
}
