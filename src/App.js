import './App.css';
import '../src/variables.css'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/MyHome/myHome';
import LandingPages from './pages/LandingPages/landingPages';
import Homes from './pages/Homes/homes';
import Details from './pages/Detail/details';
import Forms from './pages/Forms/forms';
import Cards from './pages/Cards/cards';
import InConstruction from './components/myHome/ProyectoX/inConstruction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exat path='/' element={<MyHome/>} />
        <Route path='/landingPages' element={<LandingPages/>}/>
        <Route path='/homes' element={<Homes/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/cards' element= {<Cards/>}/>
        <Route path='/inConstruction' element= {<InConstruction/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
