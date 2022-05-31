import React from 'react'
import {usePosts} from '../context/postsContext'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'



function HomePage(){

  const {posts} = usePosts()
 
  if(posts.length=== 0) return (
      <div className='flex flex-col justify-center items-center'> 
          <h2 className='text-white text-2xl '> NO hay Post !!! </h2>
          <VscEmptyWindow className='w-40 h-40 text-white  '></VscEmptyWindow>
      </div>
  )
 
    return(
        <>
           <h2 className='text-white'>Home Pages</h2> 
           <div className='text-white'>
            <Link to='/new'> Creat new Post</Link>
           {posts.map(post =>(
               <div key={post._id}>{post.title}</div>
           ))}
           </div>
        </>
    )
}
export {HomePage}