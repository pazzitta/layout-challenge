import ClothesOriginalPage from '../../assets/Cards/ClothesOriginal.jpg'
import FoodOriginalPage from '../../assets/Cards/FoodOriginal.jpg'
import PeopleOriginalPage from '../../assets/Cards/PeopleOriginal.jpg'
import NewsOriginalPage from '../../assets/Cards/NewsOriginal.jpg'
import BackgroundVideoOriginalPage from '../../assets/LandingPages/backgroundVideo.jpg'
import MinimalismOriginalPage from '../../assets/LandingPages/Minimalism.jpg'
import OrganicShapesOriginalPage from '../../assets/LandingPages/OrganicShapes.jpg'
import PersonalPageOriginalPage from '../../assets/homes/PersonalPage.jpg'
import EcommerceOriginalPage from '../../assets/homes/Ecommerce.jpg'
import MarketplacesOriginalPage from '../../assets/homes/Marketplace.jpg'
import DigitalNewspaperOriginalPage from '../../assets/homes/DigitalNewspaper.jpg'
import ProductOneOriginalPage from '../../assets/Details/ProductOne.jpg'
import ProductTwoOriginalPage from '../../assets/Details/ProductTwo.jpg'
import ProfileOriginalPage from '../../assets/Details/Profile.jpg'
import NewsDetailOriginalPage from '../../assets/Details/News.jpg'
import LoginOriginalPage from '../../assets/Forms/Login.jpg'
import RegisterOriginalPage from '../../assets/Forms/Register.jpg'
import ContacUsOriginalPage from '../../assets/Forms/ContactUs.jpg'
import CheckOutOriginalPage from '../../assets/Forms/CheckOut.jpg'
import { useLocation } from 'react-router-dom'

const OriginalPage = () => {

    const location = useLocation()

    return(
        <div>
            <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                    {
                        location.pathname === "/landingPages" ? <img src={BackgroundVideoOriginalPage} alt="Imagen original Background Video" className="original-image-all-views" /> :
                        location.pathname === "/homes" ? <img src={PersonalPageOriginalPage} alt="Imagen original Personal page" className="original-image-all-views" /> :
                        location.pathname === "/details" ? <img src={ProductOneOriginalPage} alt="Imagen original ProductOne" className="original-image-all-views" /> :
                        location.pathname === "/forms" ? <img src={LoginOriginalPage} alt="Imagen original Login" className="original-image-all-views" /> :
                        <img src={ClothesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ? <img src={OrganicShapesOriginalPage} alt="Imagen original Origanic Shapes" className="original-image-all-views" /> :
                        location.pathname === "/homes" ? <img src={MarketplacesOriginalPage} alt="Imagen original Marketplace" className="original-image-all-views" /> :
                        location.pathname === "/details" ? <img src={ProfileOriginalPage} alt="Imagen original Profile" className="original-image-all-views" /> :
                        location.pathname === "/forms" ? <img src={ContacUsOriginalPage} alt="Imagen original Contact us" className="original-image-all-views" /> :
                        <img src={NewsOriginalPage} alt="Imagen original News" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    {
                        location.pathname === "/landingPages"? <img src="" alt="Imagen original design mine LP" className="original-image-all-views" /> :
                        location.pathname === "/homes"? <img src="" alt="Imagen original design mine H" className="original-image-all-views" /> :
                        location.pathname === "/details"? <img src="" alt="Imagen original design mine D" className="original-image-all-views" /> :
                        location.pathname === "/forms"? <img src="" alt="Imagen original design mine F" className="original-image-all-views" /> :                        
                        <img src="" alt="Imagen original design mine C" className="original-image-all-views" />
                    }
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ?  <img src={MinimalismOriginalPage} alt="Imagen original Minimalism" className="original-image-all-views" /> :
                        location.pathname === "/homes" ? <img src={EcommerceOriginalPage} alt="Imagen original E-commerce" className="original-image-all-views" /> :
                        location.pathname === "/details"? <img src={ProductTwoOriginalPage} alt="Imagen original ProductTwo" className="original-image-all-views" /> :
                        location.pathname === "/forms"? <img src={RegisterOriginalPage} alt="Imagen original Register" className="original-image-all-views" /> :
                        <img src={FoodOriginalPage} alt="Imagen original Food" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ? <img src="" alt="Imagen original modelo 4" className="original-image-all-views" /> :
                        location.pathname === "/homes" ? <img src={DigitalNewspaperOriginalPage} alt="Imagen original Digital News paper" className="original-image-all-views" /> :
                        location.pathname === "/details" ? <img src={NewsDetailOriginalPage} alt="Imagen original News detail" className="original-image-all-views" /> :
                        location.pathname === "/forms" ? <img src={CheckOutOriginalPage} alt="Imagen original Check Out" className="original-image-all-views" /> :
                        <img src={PeopleOriginalPage} alt="Imagen original People" className="original-image-all-views" />
                    }
                    {/* LA FOTO DE ADVERTISING NO ME LA TOMA */}
                </div>
            </div>
        </div>
    )
}
export default OriginalPage;