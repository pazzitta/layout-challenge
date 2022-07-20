import '../baseAllViews/baseAllViews.css'
import ClothesCard from "./allCards/Clothes";
import FoodCard from "./allCards/Food";
import PeopleCard from "./allCards/People";
import NewsCard from "./allCards/News";
import ClothesOriginalPage from '../../assets/Cards/ClothesOriginal.jpg'
import FoodOriginalPage from '../../assets/Cards/FoodOriginal.jpg'
import PeopleOriginalPage from '../../assets/Cards/PeopleOriginal.jpg'
import NewsOriginalPage from '../../assets/Cards/NewsOriginal.jpg'


const LayoutCards = () => {
    return(
        <div> 
            <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                    <img 
                    src={ClothesOriginalPage} 
                    alt="Imagen original clothes" 
                    className="original-image-all-views" 
                    />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={NewsOriginalPage} 
                    alt="Imagen original News" 
                    className="original-image-all-views" 
                    />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    <img 
                    src="" 
                    alt="Imagen original design mine C" 
                    className="original-image-all-views" 
                    />
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={FoodOriginalPage} 
                    alt="Imagen original Food" 
                    className="original-image-all-views" 
                    />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={PeopleOriginalPage} 
                    alt="Imagen original People" 
                    className="original-image-all-views" 
                    />
                </div>
            </div> 
            {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >   
            <ClothesCard/>
            <FoodCard/>
            <PeopleCard/>
            <NewsCard/> 
            </Modal> */}
        </div>
    )
}
export default LayoutCards;