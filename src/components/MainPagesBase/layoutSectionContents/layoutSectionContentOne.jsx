import './layoutSectionContent.css'
// import '../MainPagesBase/mainPagesBase.css'
import {useLocation} from 'react-router-dom'
import OPBackgroundVideoLP from '../../../assets/LandingPages/BackgroundVideoGif.gif'
import OPPersonalPageH from '../../../assets/homes/LayoutSectionContent/OPPersonalPageH.jpg'
import OPClothesD from '../../../assets/Details/LayoutSectionContent/OPClothesD.jpg'
import OPLoginF from '../../../assets/Forms/LayoutSectionContent/OPLoginF.jpg'
import OPClothesC from '../../../assets/Cards/LayoutSectionContent/OPClothesC.jpg'
import PlayVideoIconLP from '../../../assets/LandingPages/BackgrondVideo/playVideoIcon.png'
import DownArrowIconLP from '../../../assets/LandingPages/BackgrondVideo/downArrowIcon.png'
import MenuLineIconLP from '../../../assets/LandingPages/BackgrondVideo/menuLineIcon.png'
import VideoBackgroundVideoLP from '../../../assets/LandingPages/BackgrondVideo/backgroundV.mp4'
import BackgroundVideo from '../../landingsPages/BackgroundVideo/layoutBackgroundVideo'
import PersonalPage from '../../homes/AllHomes/PersonalPage'
import ClothesDetail from '../../details/Clothes/ClothesDetail'
import LoginForm from '../../forms/Login/loginForm'
import ClothesCard from '../../Cards/Clothes/ClothesCard'

const LayoutSectionContentOne = () => {
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
                    location.pathname === '/landingPages' ? <img src={OPBackgroundVideoLP} alt="pág. original BackgroundVideo LP" /> :
                    location.pathname === '/homes' ? <img src={OPPersonalPageH} alt="pág. original Personal Page H" /> :
                    location.pathname === '/details' ? <img src={OPClothesD} alt="pág. original Clothes D" /> :
                    location.pathname === '/forms' ? <img src={OPLoginF} alt="pág. original Login F" /> :
                    <img src={OPClothesC} alt="pág. original Clothes C" /> 
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
                                        <div className='assets-icons-background-video-LP'>
                                            <img src={PlayVideoIconLP} alt="" />
                                            <img src={DownArrowIconLP} alt="" />
                                            <img src={MenuLineIconLP} alt="" /> 
                                        </div> :
                                        <h2>Soy las demás pero me falta el contenido</h2>   
                                    }
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                                <div>
                                    {
                                        location.pathname === '/landingPages'? 
                                        <div className='assets-multimedia-background-video-LP'>
                                            <video autoPlay loop muted>
                                                <source src={VideoBackgroundVideoLP} type="video/mp4" />
                                            </video>
                                        </div> :
                                        <h2>SOY LAS OTRAS</h2>
                                    }
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                                <div>
                                    {
                                        location.pathname === '/landingPages' ? <h4>none</h4> :
                                        <div><h2>soy las otras</h2></div>
                                    }
                                </div>
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
                    location.pathname === '/landingPages' ? <BackgroundVideo/> : 
                    location.pathname === '/homes' ? <PersonalPage/> :
                    location.pathname === '/details' ? <ClothesDetail/> :
                    location.pathname === '/forms' ? <LoginForm/> :
                    <ClothesCard/>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentOne;