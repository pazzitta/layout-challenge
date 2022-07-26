import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/myHome';
import LandingPages from './pages/landinPages';
import Homes from './pages/homes';
import Details from './pages/details';
import Forms from './pages/forms';
import Cards from './pages/cards';
// import BackgroundVideo from './components/landingsPages/layoutsToReplicate/BackgroundVideo';
// import Minimalism from './components/landingsPages/layoutsToReplicate/Minimalism';
// import OrganicShapes from './components/landingsPages/layoutsToReplicate/OrganicShapes';
// import Promotional from './components/landingsPages/layoutsToReplicate/Promotional';
// import ClothesCard from './components/Cards/allCards/Clothes';
// import FoodCard from './components/Cards/allCards/Food';
// import PeopleCard from './components/Cards/allCards/People';
// import NewsCard from './components/Cards/allCards/News';
// import PersonalPageHome from './components/homes/AllHomes/PersonalPage';
// import EcommerceHomes from './components/homes/AllHomes/Ecommerce';
import MarketplacesHomes from './components/homes/AllHomes/Marketplaces';

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
        <Route path='/pruebas' element= {<MarketplacesHomes/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
