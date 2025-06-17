import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './page/Header';
import { Footer } from './page/Footer';
import { Sidebar } from './page/sidebar';
import { Creatpost } from './page/Creatpost';
import { PostList } from './page/PostList';


function App() {

  return (
    <>
      <div className='app-container'>
        <Sidebar/>
        <div className='content'>
          <Header/>
          <Creatpost/>
          <PostList/>
          <Footer/>
      </div>
      </div>
    </>
  )
}

export default App
