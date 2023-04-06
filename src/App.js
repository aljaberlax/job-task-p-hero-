import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import NotFound from './Shared/NotFound/NotFound';
import Media from './Components/Home/Media';
import Message from './Components/Home/Message';
import Footer from './Shared/Footer/Footer';
import RequireAuth from './Components/Login/RequireAuth';
import About from './Components/Home/About';
import BlogDetails from './Components/Home/BlogDetails';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/media' element={<RequireAuth><Media></Media></RequireAuth>}></Route>
        <Route path='/message' element={<RequireAuth><Message></Message></RequireAuth>}></Route>
        <Route path='/blog/:id' element={<RequireAuth><BlogDetails></BlogDetails></RequireAuth>}></Route>
        <Route path='/about' element={<RequireAuth><About></About></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
