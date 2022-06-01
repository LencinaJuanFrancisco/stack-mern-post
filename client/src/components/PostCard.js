import toast from 'react-hot-toast'
import {usePosts} from '../context/postsContext'
import {useNavigate} from 'react-router-dom'


export function PostCard({ post }) {
const {deletePost} = usePosts()
const navigate = useNavigate()
const handelDelete=(id,title)=> {
    toast((t)=>(
        <div>
            <p className='text-white'>Realmente quieres eliminar el post - <strong>{title}</strong></p>
            <div className='flex justify-around py-2'>
                <button className='bg-red-600 hover:bg-red-400 px-3 py-2 mx-2 rounded-sm text-white text-sm' onClick={()=>{
                    deletePost(id)
                    toast.dismiss(t.id)
                    }}>Delete</button>
                <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2 text-sm' onClick={()=> toast.dismiss(t.id)}>Cancel</button>
            </div>
        </div>
    ),{
        style:{
            background:"#202020"
        },
        icon: '🎃',
    },
   
    )
}

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer " onClick={()=> navigate(`/posts/${post._id}`)}>
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3 className="text-blue-500">{post.title}</h3>
          <button className="bg-red-600 text-sm px-2 py-1 rounded-sm" onClick={()=>handelDelete(post._id,post.title)}>
            Delete
          </button>
        </div>
        <p className="text-blue-300">{post.description}</p>
      </div>
    </div>
  );
}
