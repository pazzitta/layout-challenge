import '../baseAllViews/baseAllViews.css'
import PersonalPageHome from "./AllHomes/PersonalPage";
import EcommerceHomes from "./AllHomes/Ecommerce";
import MarketplacesHomes from "./AllHomes/Marketplaces";
import DigitalNewspaper from "./AllHomes/DigitalNewspaper";
import PersonalPageOriginalPage from '../../assets/homes/PersonalPage.jpg'
import EcommerceOriginalPage from '../../assets/homes/Ecommerce.jpg'
import MarketplacesOriginalPage from '../../assets/homes/Marketplace.jpg'
import DigitalNewspaperOriginalPage from '../../assets/homes/DigitalNewspaper.jpg'

const LayoutHomes = () => {
    return(
        <div> 
             <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                    <img 
                    src={PersonalPageOriginalPage} 
                    alt="Imagen original Personal page" 
                    className="original-image-all-views" /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={MarketplacesOriginalPage} 
                    alt="Imagen original Marketplace" 
                    className="original-image-all-views" /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    <img 
                    src="" 
                    alt="Imagen original design mine H" 
                    className="original-image-all-views" /> 
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={EcommerceOriginalPage} 
                    alt="Imagen original E-commerce" 
                    className="original-image-all-views" /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={DigitalNewspaperOriginalPage} 
                    alt="Imagen original Digital News paper" 
                    className="original-image-all-views" /> 
                </div>
            </div>
            
             {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >   
            <PersonalPageHome/>
            <EcommerceHomes/>
            <MarketplacesHomes/>
            <DigitalNewspaper/>
            </Modal> */}

        </div>
    )
}
export default LayoutHomes;