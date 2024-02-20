// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer';
import Try from './Components/Try';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="Navbar" element={<Navbar/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Signup" element={<Signup/>}></Route>
        <Route path="Footer" element={<Footer/>}></Route>
        <Route path="Try" element={<Try/>}></Route>
     
      </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
