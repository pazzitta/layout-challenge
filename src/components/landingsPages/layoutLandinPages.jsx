import { useState } from 'react'
import '../baseAllViews/baseAllViews.css'
import BackgroundVideoOriginalPage from '../../assets/LandingPages/backgroundVideo.jpg'
import MinimalismOriginalPage from '../../assets/LandingPages/Minimalism.jpg'
import OrganicShapesOriginalPage from '../../assets/LandingPages/OrganicShapes.jpg'
import BackgroundVideo from './layoutsToReplicate/BackgroundVideo'
import Modal from '../modal/modal'

const LayoutLandingPages = () => {
    
    const [backgroundVideoModal, setBackgroundVideoModal] = useState (false)
    // const location = useLocation ()
    
    function handleClick(e) {
        setBackgroundVideoModal(!backgroundVideoModal);
      }
    
    //   const [modal, setModal] = useState(false);
    return(
        <div>
             <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                        <img 
                        src={BackgroundVideoOriginalPage} 
                        alt="Imagen original Background Video" 
                        className="original-image-all-views"
                        onClick={handleClick}
                        /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={OrganicShapesOriginalPage} 
                    alt="Imagen original Origanic Shapes" 
                    className="original-image-all-views" />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    <img 
                    src="" 
                    alt="Imagen original design mine LP" 
                    className="original-image-all-views" /> 
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={MinimalismOriginalPage} 
                    alt="Imagen original Minimalism" 
                    className="original-image-all-views" />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src="" 
                    alt="Imagen original modelo 4" 
                    className="original-image-all-views" /> 
                    {/* LA FOTO DE ADVERTISING NO ME LA TOMA */}
                </div>
            </div>
            <Modal
            state={backgroundVideoModal}
            changeState={setBackgroundVideoModal}
            >   
            <BackgroundVideo/>
            </Modal>
        </div>
            // <Minimalism/>
            // <OrganicShapes/>
            // <Advertisings/>
    )
}
export default LayoutLandingPages;