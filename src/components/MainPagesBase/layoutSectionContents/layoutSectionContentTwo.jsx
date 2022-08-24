import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import OPMinimalismLP from '../../../assets/LandingPages/LayoutSectionContent/OPMinimalismLP.jpg'
import LayoutMinimalism from '../../landingsPages/Minimalism/layoutMinimalism'
import ShopifyLogo from '../../../assets/LandingPages/Minimalism/shopifylogo.png'
import BackgroundImageMinimalismLP from '../../../assets/LandingPages/Minimalism/backgroundImageMinimalism.png'

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
                    location.pathname === '/details' ? <img src="" alt="pág. original Furniture D" /> :
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
                                    <img src={ShopifyLogo} alt="logo marca" />
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
                                    <img src={BackgroundImageMinimalismLP} alt="Background Minimalism LP" />
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
                    location.pathname === '/details' ? <LayoutMinimalism/> :
                    location.pathname === '/forms' ? <LayoutMinimalism/> :
                    <LayoutMinimalism/>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentTwo;