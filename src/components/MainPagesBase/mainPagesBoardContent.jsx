import { useLocation } from 'react-router-dom';
import {scroller} from 'react-scroll'
import './mainPagesBase.css'
import RowOfPencils from '../myHome/InternalBoardComponents/rowOfPencils';
import BackgroundVideoLP from '../../assets/LandingPages/BackgroundVideoGif.gif'
import MinimalismLP from '../../assets/LandingPages/Minimalism.jpg'
import OrganicShapesLP from '../../assets/LandingPages/OrganicShapes.jpg'
import PromotionalLP from '../../assets/LandingPages/Promotional.jpg'
import ECommerceH from '../../assets/homes/Ecommerce.jpg'
import MarketPlaceH from '../../assets/homes/Marketplace.jpg'
import PersonalPageH from '../../assets/homes/PersonalPage.jpg'
import DigitalNewsPaperH from '../../assets/homes/DigitalNewspaper.jpg'
import ClothesD from '../../assets/Details/Clothes.jpg'
import FurnitureD from '../../assets/Details/Furniture.jpg'
import NewsD from '../../assets/Details/News.jpg'
import ProfileD from '../../assets/Details/Profile.jpg'
import LoginF from '../../assets/Forms/Login.jpg'
import RegisterF from '../../assets/Forms/Register.jpg'
import CheckOutF from '../../assets/Forms/CheckOut.jpg'
import ContactUsF from '../../assets/Forms/ContactUs.jpg'
import ClothesC from '../../assets/Cards/Clothes.jpg'
import FoodC from '../../assets/Cards/Food.jpg'
import NewsC from '../../assets/Cards/News.jpg'
import ProfileC from '../../assets/Cards/Profile.jpg'


const MainPagesBoardContent = () => {
    const location = useLocation()

    const handleScrollSectionOne = () =>{
        scroller.scrollTo("sectionOne")
    }
    const handleScrollSectionTwo = () =>{
        scroller.scrollTo("sectionTwo")
    }
    const handleScrollSectionThree = () =>{
        scroller.scrollTo("sectionThree")
    }
    const handleScrollSectionFour = () =>{
        scroller.scrollTo("sectionFour")
    }

    return(
        <>
        <section className='order-all-board-content-section-one'>
            <div className='original-pages-order-and-styles'>
                <div className='wooden-sing-and-poster-order'>
                    <div className='wooden-sign-background'>
                        <div></div>
                        <h2>Página original</h2>
                        <div></div>
                    </div>
                    <div className='poster-come-back-base-and-order'>
                        <a href='/' className='poster-come-back-base'>
                            <h2>VOLVER AL INICIO</h2>
                        </a>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='order-wooden-signs'>
                    <div>
                        <div></div>
                        {
                             location.pathname === "/landingPages" ? <h3>Background video</h3>:
                             location.pathname === "/homes" ? <h3>Personal page</h3>:
                             location.pathname === "/details" ? <h3>Clothes</h3>:
                             location.pathname === "/forms" ? <h3>Login</h3>:
                             <h3>News</h3>
                        }
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        {
                             location.pathname === "/landingPages" ? <h3>Minimalism</h3>:
                             location.pathname === "/homes" ? <h3>E-commerce</h3>:
                             location.pathname === "/details" ? <h3>Furniture</h3>:
                             location.pathname === "/forms" ? <h3>Register</h3>:
                             <h3>Profile</h3>
                        }
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        {
                             location.pathname === "/landingPages" ?  <h3>Organic Shapes</h3>:
                             location.pathname === "/homes" ? <h3>Marketplace</h3>:
                             location.pathname === "/details" ? <h3>News</h3>:
                             location.pathname === "/forms" ? <h3>CheckOut</h3>:
                             <h3>Clothes</h3>
                        }
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        {
                             location.pathname === "/landingPages" ?  <h3>Promotional</h3>:
                             location.pathname === "/homes" ? <h3>News</h3>:
                             location.pathname === "/details" ? <h3>Profile</h3>:
                             location.pathname === "/forms" ? <h3>Contact Us</h3>:
                             <h3>Food</h3>
                        }                       
                        <div></div>
                    </div>                
                </div>
                <div className='original-page-images-order'>
                    {
                        location.pathname === "/landingPages" ?  <img src={BackgroundVideoLP} alt="imagen original Background Video LP"/>:
                        location.pathname === "/homes" ? <img src={PersonalPageH} alt="imagen original personal page H"/>:
                        location.pathname === "/details" ? <img src={ClothesD} alt="imagen original Clothes D"/>:
                        location.pathname === "/forms" ? <img src={LoginF} alt="imagen original Login LP"/>:
                        <img src={NewsC} alt="imagen original Clothes C"/>
                    }
                    {
                        location.pathname === "/landingPages" ?  <img src={MinimalismLP} alt="imagen original Minimalism LP" />:
                        location.pathname === "/homes" ? <img src={ECommerceH} alt="imagen E-commerce H"/>:
                        location.pathname === "/details" ? <img src={FurnitureD} alt="imagen original Furniture D"/>:
                        location.pathname === "/forms" ? <img src={RegisterF} alt="imagen original Register F"/>:
                        <img src={ProfileC} alt="imagen original Food C"/>
                    }
                    {
                        location.pathname === "/landingPages" ?   <img src={OrganicShapesLP} alt="imagen original OrganicShapes LP" />:
                        location.pathname === "/homes" ? <img src={MarketPlaceH} alt="imagen Marketplace H"/>:
                        location.pathname === "/details" ? <img src={NewsD} alt="imagen original News D"/>:
                        location.pathname === "/forms" ? <img src={CheckOutF} alt="imagen original Background Video LP"/>:
                        <img src={ClothesC} alt="imagen original Background Video LP"/>
                    }
                    {
                        location.pathname === "/landingPages" ? <img src={PromotionalLP} alt="imagen original Promotional LP" />:
                        location.pathname === "/homes" ? <img src={DigitalNewsPaperH} alt="imagen DigitalNewsPaper H"/>:
                        location.pathname === "/details" ? <img src={ProfileD} alt="imagen original Profile D"/>:
                        location.pathname === "/forms" ? <img src={ContactUsF} alt="imagen original Contact Us F"/>:
                        <img src={FoodC} alt="imagen original Profile C"/>
                    }
                </div>
                <div className='order-box-scotch-tape-main-Pages-Base'>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
            </div>
            <div className='my-replicas-order-and-styles'>
                <div className='wooden-sign-background-MR'>
                    <div></div>
                    <h2>Mi reproducción</h2>
                    <div></div>
                </div>
                <div className='my-replicas-images-order'>
                    <div>
                    {
                        location.pathname === "/landingPages" ? <img onClick={handleScrollSectionOne} src={BackgroundVideoLP} alt="imagen original Background Video LP"/> :
                        location.pathname === "/homes" ? <img onClick={handleScrollSectionOne} src={PersonalPageH} alt="imagen original personal page H"/>:
                        location.pathname === "/details" ? <img onClick={handleScrollSectionOne} src={ClothesD} alt="imagen original Clothes D"/> :
                        location.pathname === "/forms" ? <img onClick={handleScrollSectionOne}  src={LoginF} alt="imagen original Login LP"/>:
                        <img onClick={handleScrollSectionOne}  src={NewsC} alt="imagen original Clothes C"/>
                    }
                    {
                        location.pathname === "/landingPages" ? <h3 onClick={handleScrollSectionOne}>Descubrime</h3>:
                        location.pathname === "/homes" ? <h3 onClick={handleScrollSectionOne}>Descubrime</h3>:
                        location.pathname === "/details" ? <h3 onClick={handleScrollSectionOne}>Descubrime</h3> :
                        location.pathname === "/forms" ? <h3 onClick={handleScrollSectionOne}>Descubrime</h3>:
                        <h3 onClick={handleScrollSectionOne}>Descubrime</h3>
                    }
                    </div>
                    <div>
                    {
                        location.pathname === "/landingPages" ? <img onClick={handleScrollSectionTwo} src={MinimalismLP} alt="imagen original Minimalism LP" /> :
                        location.pathname === "/homes" ? <img onClick={handleScrollSectionTwo} src={ECommerceH} alt="imagen E-commerce H"/> :
                        location.pathname === "/details" ? <img onClick={handleScrollSectionTwo} src={FurnitureD} alt="imagen original Furniture D"/>:
                        location.pathname === "/forms" ? <img onClick={handleScrollSectionTwo} src={RegisterF} alt="imagen original Register F"/>:
                        <img onClick={handleScrollSectionTwo} src={ProfileC} alt="imagen original Food C"/>
                    }
                    {
                        location.pathname === "/landingPages" ? <h3 onClick={handleScrollSectionTwo}>Descubrime</h3> :
                        location.pathname === "/homes" ? <h3 onClick={handleScrollSectionTwo}>Descubrime</h3> :
                        location.pathname === "/details" ? <h3 onClick={handleScrollSectionTwo}>Descubrime</h3> :
                        location.pathname === "/forms" ? <h3 onClick={handleScrollSectionTwo}>Descubrime</h3> :
                        <h3 onClick={handleScrollSectionTwo}>Descubrime</h3>                        
                    }
                    </div>
                    <div>
                    {
                        location.pathname === "/landingPages" ? <img onClick={handleScrollSectionThree} src={OrganicShapesLP} alt="imagen original OrganicShapes LP" /> :
                        location.pathname === "/homes" ? <img onClick={handleScrollSectionThree} src={MarketPlaceH} alt="imagen Marketplace H"/> :
                        location.pathname === "/details" ? <img onClick={handleScrollSectionThree} src={NewsD} alt="imagen original News D"/> :
                        location.pathname === "/forms" ? <img onClick={handleScrollSectionThree} src={CheckOutF} alt="imagen original CheckOut F"/> :
                        <img onClick={handleScrollSectionThree}src={ClothesC} alt="imagen original News C"/>
                    }
                    {
                        location.pathname === "/landingPages" ? <h3 onClick={handleScrollSectionThree}>Descubrime</h3> :  
                        location.pathname === "/homes" ? <h3 onClick={handleScrollSectionThree}>Descubrime</h3>:
                        location.pathname === "/details" ? <h3 onClick={handleScrollSectionThree}>Descubrime</h3>:
                        location.pathname === "/forms" ? <h3 onClick={handleScrollSectionThree}>Descubrime</h3>:
                        <h3 onClick={handleScrollSectionThree}>Descubrime</h3>

                    }
                    </div>
                    <div>
                    {
                        location.pathname === "/landingPages" ? <img onClick={handleScrollSectionFour} src={PromotionalLP} alt="imagen original Promotional LP" /> :
                        location.pathname === "/homes" ? <img onClick={handleScrollSectionFour} src={DigitalNewsPaperH} alt="imagen DigitalNewsPaper H"/> :
                        location.pathname === "/details" ?  <img onClick={handleScrollSectionFour} src={ProfileD} alt="imagen original Profile D"/> :
                        location.pathname === "/forms" ? <img onClick={handleScrollSectionFour} src={ContactUsF} alt="imagen original Contact Us F"/> :
                        <img onClick={handleScrollSectionFour} src={FoodC} alt="imagen original Profile C"/>
                    }
                    {
                        location.pathname === "/landingPages" ? <h3 onClick={handleScrollSectionFour}>Descubrime</h3> :
                        location.pathname === "/homes" ? <h3 onClick={handleScrollSectionFour}>Descubrime</h3> :
                        location.pathname === "/details" ?  <h3 onClick={handleScrollSectionFour}>Descubrime</h3> :
                        location.pathname === "/forms" ? <h3 onClick={handleScrollSectionFour}>Descubrime</h3> :
                        <h3 onClick={handleScrollSectionFour}>Descubrime</h3>
                    }
                    </div>
                </div>
            </div>
            <div className='pencils-size'>
                <RowOfPencils/>
            </div>
        </section>
        </>
    )
}
export default MainPagesBoardContent;