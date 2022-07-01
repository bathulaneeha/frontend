import Home from "./components.js/Home"
import Room from "./components.js/rooms"
import Cusines from "./components.js/cusines"
import Events from "./components.js/events"
import About from "./components.js/aboutus"
import Footer from "./components.js/footer"
import Login from "./components.js/login"
import Signup from "./components.js/signup"
import Navbar from "./components.js/navbar"
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App" style={{backgroundColor:'#EEF2FF'}}>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/rooms" element={<Room/>}/>
          <Route path="/cusines" element={<Cusines/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
