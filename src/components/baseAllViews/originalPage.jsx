import ClothesOriginalPage from '../../assets/Cards/ClothesOriginal.jpg'
import FoodOriginalPage from '../../assets/Cards/FoodOriginal.jpg'
import PeopleOriginalPage from '../../assets/Cards/PeopleOriginal.jpg'
import NewsOriginalPage from '../../assets/Cards/NewsOriginal.jpg'
import BackgroundVideoOriginalPage from '../../assets/LandingPages/backgroundVideo.jpg'
import MinimalismOriginalPage from '../../assets/LandingPages/Minimalism.jpg'
import OrganicShapesOriginalPage from '../../assets/LandingPages/OrganicShapes.jpg'
import { useLocation } from 'react-router-dom'

const OriginalPage = () => {

    const location = useLocation()

    return(
        <div>
            <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                    {
                        location.pathname === "/landingPages" ? <img src={BackgroundVideoOriginalPage} alt="Imagen original clothes" className="original-image-all-views" /> :
                        <img src={ClothesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ? <img src={OrganicShapesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" /> :
                        <img src={NewsOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    {
                        location.pathname === "/landingPages"? <img src="" alt="Imagen original design mine" className="original-image-all-views" /> :
                        <img src={ClothesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ?  <img src={MinimalismOriginalPage} alt="Imagen original Minimalism" className="original-image-all-views" /> :
                        <img src={FoodOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    {
                        location.pathname === "/landingPages" ? <img src="" alt="Imagen original modelo 4" className="original-image-all-views" /> :
                        <img src={PeopleOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                    }
                    {/* LA FOTO DE ADVERTISING NO ME LA TOMA */}
                </div>
            </div>
        </div>
    )
}
export default OriginalPage;