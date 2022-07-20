import '../baseAllViews/baseAllViews.css'
import LoginOriginalPage from '../../assets/Forms/Login.jpg'
import RegisterOriginalPage from '../../assets/Forms/Register.jpg'
import ContacUsOriginalPage from '../../assets/Forms/ContactUs.jpg'
import CheckOutOriginalPage from '../../assets/Forms/CheckOut.jpg'

const LayoutForms = () => {
    return(
        <div> 
            <div className="top-box-original-images-a-v" >
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views"></div>
                    <img 
                    src={LoginOriginalPage} 
                    alt="Imagen original Login" 
                    className="original-image-all-views" 
                    />
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-line-glass-all-views" ></div>
                    <img 
                    src={ContacUsOriginalPage} 
                    alt="Imagen original Contact us" 
                    className="original-image-all-views" 
                    /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div  className="vertical-line-glass-all-views"></div>
                    <img src="" alt="Imagen original design mine F" className="original-image-all-views" />
                </div>
            </div>
            <div className="bottom-box-original-images-a-v">
                <div className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={RegisterOriginalPage} 
                    alt="Imagen original Register" 
                    className="original-image-all-views" 
                    /> 
                </div>
                <div  className="individual-box-original-images-a-v">
                    <div className="vertical-long-line-glass-all-views" ></div>
                    <img 
                    src={CheckOutOriginalPage} 
                    alt="Imagen original Check Out" 
                    className="original-image-all-views" 
                    /> 
                </div>
            </div> 

            {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >   
            
            </Modal> */}
        </div>

        // NO TENGO MAQUETADOS EN HTML LOS FORMS!!!
    )
}
export default LayoutForms;