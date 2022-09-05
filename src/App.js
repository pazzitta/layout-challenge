import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/MyHome/myHome';
import LandingPages from './pages/LandingPages/landingPages';
import Homes from './pages/Homes/homes';
import Details from './pages/Detail/details';
import Forms from './pages/Forms/forms';
import Cards from './pages/Cards/cards';
import BackgroundVideo from './components/landingsPages/BackgroundVideo/layoutBackgroundVideo';
import InConstruction from './components/myHome/Portfolio/inConstruction';
// import OrganicShapes from './components/landingsPages/layoutsToReplicate/OrganicShapes';
// import Promotional from './components/landingsPages/layoutsToReplicate/Promotional'
// import PeopleCard from './components/Cards/allCards/People';
// import NewsCard from './components/Cards/allCards/News';
// import DigitalNewspaper from './components/homes/AllHomes/DigitalNewspaper';
// import ContactUsForm from './components/forms/ContactUs/contactUsForm';
// import CheckOutForm from './components/forms/CheckOut/checkOutForm';
// import ProfileDetail from './components/details/Profile/Profile';
// import NewsDetail from './components/details/News/News';

// CAMBIAR TODOS LO GREY POR GRAY

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
        <Route path='/pruebas' element= {<BackgroundVideo/>}/>
        <Route path='/inConstruction' element= {<InConstruction/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
