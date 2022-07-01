import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/myHome';
import LandingPages from './pages/landinPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exat path='/' element={<MyHome/>} />
        <Route path='/landinPages' element={<LandingPages/>}/>
        
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
