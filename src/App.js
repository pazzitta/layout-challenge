import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MyHome from './pages/MyHome/myHome';
import LandingPages from './pages/LandingPages/landingPages';
import Homes from './pages/Homes/homes';
import Details from './pages/Detail/details';
import Forms from './pages/Forms/forms';
import Cards from './pages/Cards/cards';
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
// import DigitalNewspaper from './components/homes/AllHomes/DigitalNewspaper';
// import LoginForm from './components/forms/Login/loginForm';
// import RegisterForm from './components/forms/Register/registerForm';
// import ContactUsForm from './components/forms/ContactUs/contactUsForm';
// import CheckOutForm from './components/forms/CheckOut/checkOutForm';
// import ProductOneDetail from './components/details/ProductOne/ProductOne';
// import ProductTwoDetail from './components/details/ProductTwo/ProductTwo';
// import ProfileDetail from './components/details/Profile/Profile';
import NewsDetail from './components/details/News/News';

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
        <Route path='/pruebas' element= {<NewsDetail/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
