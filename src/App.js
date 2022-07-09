import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/myHome';
import LandingPages from './pages/landinPages';
import Homes from './pages/homes';
import Details from './pages/details';
import Forms from './pages/forms';
import Cards from './pages/cards';

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
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
