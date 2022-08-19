import './mainPagesBase.css'
import RowOfPencils from '../../myHome/InternalBoardComponents/rowOfPencils';
import BackgroundVideoLP from '../../../assets/LandingPages/backgroundVideo.jpg'
import MinimalismLP from '../../../assets/LandingPages/Minimalism.jpg'
import OrganicShapesLP from '../../../assets/LandingPages/OrganicShapes.jpg'
import AdvertisingLP from '../../../assets/LandingPages/Advertising.jpg'

const LPBoardContent = () => {
    return(
        <div className='order-all-board-content-LP'>
            <div className='original-pages-order-and-styles'>
                <div className='wooden-sign-background'>
                    <div></div>
                    <h2>Original pages</h2>
                    <div></div>
                </div>
                <div className='order-wooden-signs'>
                    <div>
                        <div></div>
                        <h3>Background video</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Minimalism</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Organic Shapes</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Advertising</h3>
                        <div></div>
                    </div>                
                </div>
                <div className='original-page-images-order'>
                    <img src={BackgroundVideoLP} alt="" />
                    <img src={MinimalismLP} alt="" />
                    <img src={OrganicShapesLP} alt="" />
                    <img src={AdvertisingLP} alt="" />
                </div>
            </div>
            <div className='my-replicas-order-and-styles'></div>
            <div className='pencils-size-LP'>
                <RowOfPencils/>
            </div>
        </div>
    )
}
export default LPBoardContent;