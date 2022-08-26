import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import LayoutMinimalism from '../../landingsPages/Minimalism/layoutMinimalism'
import ShopifyLogo from '../../../assets/LandingPages/Minimalism/shopifylogo.png'
import BrandLogoD from '../../../assets/Details/ProductTwo/brandLogo.png'
import CartGreyIconD from '../../../assets/Details/ProductTwo/cartGrey.png'
import ShortMagnifyingGlassGreyD from '../../../assets/Details/ProductTwo/shortMagnifyingGlassGrey.png'
import StarYellowD from '../../../assets/Details/ProductTwo/starYellow.png'

import BackgroundImageMinimalismLP from '../../../assets/LandingPages/Minimalism/backgroundImageMinimalism.png'
import FurnitureDetail from '../../details/ProductTwo/Furniture'
import LeftImageProductD from '../../../assets/Details/ProductTwo/leftImageProduct.jpg'
import MiddleImageProductD from '../../../assets/Details/ProductTwo/middleImageProduct.jpg'
import ProductFrontImageD from '../../../assets/Details/ProductTwo/productFrontImage.png'
import RightImageProductD from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'

import OPMinimalismLP from '../../../assets/LandingPages/LayoutSectionContent/OPMinimalismLP.jpg'
import OPFurniture from '../../../assets/Details/ProductTwo/OPFurnitureD.jpg'

const LayoutSectionContentTwo = () => {
    const location = useLocation()
    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>ORIGINAL PAGE</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    location.pathname === '/landingPages' ? <img src={OPMinimalismLP} alt="pág. original Minimalism LP" /> :
                    location.pathname === '/homes' ? <img src="" alt="pág. original " /> :
                    location.pathname === '/details' ? <img src={OPFurniture} alt="pág. original Furniture D" /> :
                    location.pathname === '/forms' ? <img src="" alt="pág. original " /> :
                    <img src="" alt="pág. original Clothes C" /> 
                }
            </section>

            <section className='assets-section-order'>
                <div className='top-box-assets-section-order'>
                    <div className='section-identification-posters-order'>
                        <h2 className='section-identification-posters-base'>ASSETS</h2>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div className='order-all-wooden-signs-LSC'>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>ICONS</h3>
                                    <div></div>
                                </div>
                            </div>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>MULTIMEDIA</h3>
                                    <div></div>
                                </div>
                            </div>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>ILLUSTRATIONS</h3>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className='order-papers-assets'>
                            <div className='papers-order-and-styles'>
                                <div>
                                    {
                                        location.pathname === '/landingPages' ?
                                        <div className='assets-icons-minimalism-LP'>
                                            <img src={ShopifyLogo} alt="logo marca" />
                                        </div> :
                                        location.pathname === '/homes' ?
                                        <h2>soy el último</h2> :
                                        location.pathname === '/details' ?
                                        <div className='assets-icons-furniture-D'>
                                            <img src={BrandLogoD} alt="logo marca" />
                                            <img src={CartGreyIconD} alt="logo marca" />
                                            <img src={ShortMagnifyingGlassGreyD} alt="logo marca" />
                                            <img src={StarYellowD} alt="logo marca" />
                                        </div> :
                                        <h5>soy las otras</h5>
                                    }
                                    {/* <img src={DownArrowIconLP} alt="" />
                                    <img src={MenuLineIconLP} alt="" /> */}
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                                <div>
                                    {
                                        location.pathname === '/landingPages' ? 
                                        <div className='assets-multimedia-minimalism-LP'>
                                            <img src={BackgroundImageMinimalismLP} alt="backgroun image PP" />
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-furniture-D'>
                                            <img src={LeftImageProductD} alt="Imagen izquierda silla" />
                                            <img src={MiddleImageProductD} alt="Imagen del medio silla" />   
                                            <img src={RightImageProductD} alt="Imagen izquierda silla" />   
                                            <img src={ProductFrontImageD} alt="Imagen izquierda silla" />   
                                        </div> :
                                        <h5>soy las otras</h5>
                                    }
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                               <div><h4>none</h4></div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='botton-box-assets-section-order'>
                    <div className='section-identification-posters-order'>
                        <h2 className='section-identification-posters-base'>RESPONSIVE</h2>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-layout-section-order'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>MY LAYOUT</h2>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    location.pathname === '/landingPages' ? <LayoutMinimalism/> : 
                    location.pathname === '/homes' ? <LayoutMinimalism/> :
                    location.pathname === '/details' ? <FurnitureDetail/> :
                    location.pathname === '/forms' ? <LayoutMinimalism/> :
                    <LayoutMinimalism/>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentTwo;