// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer';
import Try from './Components/Try';
import { Pappu } from './Components/crud/Pappu';
import Second from './Components/crud/Second';
import Visualize from './Components/Visualize/Visualize';
import Sampul from './Components/Sampul';
import LineGraph from './Components/LineGraph/LineGraph';
import OtherC from './Components/OtherC/OtherC';
import Polar from './Components/Polar/Polar';
import Combined from './Components/Combined/Combined';
import Main from './Components/Pages/Main';
import Mainnav from './Components/Navbar/MainNav';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="Navbar" element={<Navbar/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path="Mainnav" element={<Mainnav/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Signup" element={<Signup/>}></Route>
        <Route path="Footer" element={<Footer/>}></Route>
        <Route path="Try" element={<Try/>}></Route>
        <Route path="Pappu" element={<Pappu/>}></Route>
        <Route path="Second" element={<Second/>}></Route>
        <Route path="Visualize" element={<Visualize/>}></Route>
        <Route path="Sampul" element={<Sampul/>}></Route>
        <Route path="LineGraph" element={<LineGraph/>} />
        <Route path="OtherC" element={<OtherC/>} />
        <Route path="Polar" element={<Polar/>} />
        <Route path="Combined" element={<Combined />} />


     
      </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
