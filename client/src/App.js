import { HomePage, NotFound, PostForm } from './pages'
import { Route, Routes } from 'react-router-dom'
import { PostContainer } from './context/postsContext'
function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10  container m-auto'>
        
        <PostContainer>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new' element={<PostForm></PostForm>} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
        </PostContainer>

      </div>
    </div>

  );
}

export default App;
