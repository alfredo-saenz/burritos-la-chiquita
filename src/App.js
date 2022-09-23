import './App.css';
import Home from './Components/Home'
import Menu from './Components/Menu'
import Location from './Components/Location';
import Gallery from './Components/Gallery'
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <main className='main'>
     
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/menu" element={<Menu/>}></Route>
<Route path="/location" element={<Location/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
</Routes>
</main>

	);

}

export default App;
