import '../baseAllViews/baseAllViews.css'
import ProductOneDetail from "./AllDetails/ProductOne";
import ProductTwoDetail from "./AllDetails/ProductTwo";
import NewsDetail from "./AllDetails/News";
import ProfileDetail from "./AllDetails/Profile";
import ProductOneOriginalPage from '../../assets/Details/ProductOne.jpg'
import ProductTwoOriginalPage from '../../assets/Details/ProductTwo.jpg'
import ProfileOriginalPage from '../../assets/Details/Profile.jpg'
import NewsDetailOriginalPage from '../../assets/Details/News.jpg'


const LayoutDetails = () => {
    return(
        <div> 
             <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={ProductOneOriginalPage} 
                    alt="Imagen original ProductOne" 
                    className="original-image-all-views" 
                    />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={ProfileOriginalPage} 
                    alt="Imagen original Profile" 
                    className="original-image-all-views" 
                    /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    <img 
                    src="" 
                    alt="Imagen original design mine D" 
                    className="original-image-all-views" 
                    />
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={ProductTwoOriginalPage} 
                    alt="Imagen original ProductTwo" 
                    className="original-image-all-views" 
                    /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={NewsDetailOriginalPage} 
                    alt="Imagen original News detail" 
                    className="original-image-all-views" 
                    /> 
                </div>
            </div>
             {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >   
            <ProductOneDetail/>
            <ProductTwoDetail/>
            <NewsDetail/>
            <ProfileDetail/>
            </Modal> */}
        </div>
    )
}
export default LayoutDetails;