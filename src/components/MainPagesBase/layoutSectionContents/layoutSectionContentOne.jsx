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
import IsotipoPP from '../../../assets/homes/PersonaPage/isotipoPP.png'
import TwitteIconPP from '../../../assets/homes/PersonaPage/twitterIconPP.png'
import BehanceIconPP from '../../../assets/homes/PersonaPage/BehanceIconPP.png'
import InstagramIconPP from '../../../assets/homes/PersonaPage/InstagramIconPP.png'
import GitHubIconPP from '../../../assets/homes/PersonaPage/GitHubIconPP.png'
import LinkedInIconPP from '../../../assets/homes/PersonaPage/LinkedInIconPP.png'
import PhoneIconPP from '../../../assets/homes/PersonaPage/phoneIconoPP.png'
import BackgroundImagePP from '../../../assets/homes/PersonaPage/backgroundImagePP.jpg'

import VideoBackgroundVideoLP from '../../../assets/LandingPages/BackgrondVideo/backgroundV.mp4'
import BackgroundVideo from '../../landingsPages/BackgroundVideo/layoutBackgroundVideo'
import PersonalPage from '../../homes/PersonalPage/PersonalPage'
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
                                            <img src={PlayVideoIconLP} alt="Ícono play" />
                                            <img src={DownArrowIconLP} alt="ícono flecha rosa" />
                                            <img src={MenuLineIconLP} alt="ícono 3 líneas menú" /> 
                                        </div> :
                                        location.pathname === '/homes' ? 
                                        <div className='assets-icons-minimalist-h'>
                                            <img src={IsotipoPP} alt="Isotipo página" />
                                            <img src={TwitteIconPP} alt="ícono twitter" />
                                            <img src={BehanceIconPP} alt="ícono Behance" />
                                            <img src={InstagramIconPP} alt="ícono Instagram" />
                                            <img src={GitHubIconPP} alt="ícono GitHub" />
                                            <img src={LinkedInIconPP} alt="ícono LinkedIn" /> 
                                            <img src={PhoneIconPP} alt="ícono Phone rosa" /> 
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
                                        location.pathname === '/homes' ? 
                                        <div className='assets-multimedia-personal-page-H'>
                                            <img src={BackgroundImagePP} alt="backgroun image PP" />
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
                                        location.pathname === '/homes' ? <h4>none</h4> :
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