import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './page/Header';
import { Footer } from './page/Footer';
import { Sidebar } from './page/sidebar';
import { Creatpost } from './page/Creatpost';
import { PostList } from './page/PostList';
import { useState } from 'react';
import { PostListProvider } from './store/Post-list-store';


function App() {
const [selectedtab,setSelectedtab] = useState('')
  return (
    <>

      <PostListProvider >
        <div className='app-container'>
        <Sidebar selectedTab={selectedtab} setSelectedTab={setSelectedtab}></Sidebar>
        <div className='content'>
          <Header></Header>
          {selectedtab === 'Home'?(<PostList/>):(<Creatpost/>)}
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
 
    </>
  )
}

export default App
