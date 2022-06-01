import { HomePage, NotFound, PostForm } from './pages'
import { Route, Routes } from 'react-router-dom'
import { PostsProvider } from './context/postsContext'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className='bg-neutral-500 min-h-screen flex items-center'>
      <div className='px-10  container m-auto'>
        
        <PostsProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new' element={<PostForm></PostForm>} />
            <Route path='/posts/:id' element={<PostForm></PostForm>} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
          <Toaster

          ></Toaster>
        </PostsProvider>

      </div>
    </div>

  );
}

export default App;
