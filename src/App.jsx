import {Routes, Route} from 'react-router-dom';
import './App.css'
import AllPostsPage from './pages/AllPostsPage/AllPostsPage';
import Layout from './pages/Layout/Layout';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import DeletePostPage from './pages/DeletePage/DeletePostPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<AllPostsPage/>}/>
          <Route path='/:id' element={<SinglePostPage/>}/>
        </Route>
        <Route path='/add' element={<CreatePostPage/>}/>
        <Route path='delete/:id' element={<DeletePostPage/>}/>
      </Routes>
    </>
  )
}

export default App
