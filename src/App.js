import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js'
import User from './components/homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './components/nav.js'
import { BrowserRouter,Route,Routes,route } from 'react-router-dom';
import Foot from'./components/foot.js'
import Registration from './components/Registration.js';
import Hreg from './components/Hreg.js';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/home' element={[<Homepage/>,<Foot/>]}/>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/gone' element={<Foot/>}/>
        <Route path='/regi' element={[<Nav/>,<Registration/>,<Foot/>]}/>
        <Route path='/hotel' element={[<Nav/>,<Hreg/>,<Foot/>]}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
