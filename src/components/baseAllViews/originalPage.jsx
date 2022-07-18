import ClothesOriginalPage from '../../assets/Cards/ClothesOriginal.jpg'
import FoodOriginalPage from '../../assets/Cards/FoodOriginal.jpg'
import PeopleOriginalPage from '../../assets/Cards/PeopleOriginal.jpg'
import NewsOriginalPage from '../../assets/Cards/NewsOriginal.jpg'

const OriginalPage = () => {
    return(
        <div>
            <div className="top-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img src={FoodOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img src={PeopleOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                </div>
            </div>
            <div className="top-box2-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-left-line-glass-all-views" ></div>
                    <img src={ClothesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img src={NewsOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-right-line-glass-all-views" ></div>
                    <img src={ClothesOriginalPage} alt="Imagen original clothes" className="original-image-all-views" />
                </div>
            </div>
        </div>
    )
}
export default OriginalPage;