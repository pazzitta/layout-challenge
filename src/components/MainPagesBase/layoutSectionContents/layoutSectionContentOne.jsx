import './layoutSectionContent.css'
import { useState } from 'react'
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
import MagnifyingGlassD from '../../../assets/Details/ProductOne/magnifyingGlassBlack.png'
import PreviousIconD from '../../../assets/Details/ProductOne/imagePreviousBlack.png'
import NextIconD from '../../../assets/Details/ProductOne/imageNextBlack.png'
import HeartIconD from '../../../assets/Details/ProductOne/iconHeartBlack.png'
import FrontImageClothesD from '../../../assets/Details/ProductOne/frontImageProduct.jpg'
import VerticalImageClothesD from '../../../assets/Details/ProductOne/verticalImageProduct.jpg'
import EyeIconF from '../../../assets/Forms/Login/iconeye.png'
import FacebookIconF from '../../../assets/Forms/Login/iconFacebookWhite.png'
import GoogleIconF from '../../../assets/Forms/Login/iconGoogleWhite.png'
import LoginStartButtonIconF from '../../../assets/Forms/Login/iconLoginButton.png'
import PadlockIconF from '../../../assets/Forms/Login/iconPadlock.png'
import PersonIconF from '../../../assets/Forms/Login/iconPerson.png'
import TickIconF from '../../../assets/Forms/Login/iconTick.png'
import TwitterIconF from '../../../assets/Forms/Login/iconTwitterWhite.png'
import BackgroundImageLoginF from '../../../assets/Forms/Login/backgroundImageLogin.jpg'
import CartBlackIconC from '../../../assets/Cards/Clothes/cartBlack.png'
import CartWhiteIconC from '../../../assets/Cards/Clothes/cartWhite.png'
import ProductClotheCart from '../../../assets/Cards/Clothes/productOneCard.png'
import ResponsiveBVLP834x1194 from '../../../assets/LandingPages/BackgrondVideo/responsiveBVLP834x1194.jpg'
import ResponsiveBVLP390x844 from '../../../assets/LandingPages/BackgrondVideo/responsiveBVLP390x844.jpg'
import ResponsiveBVLP360x640 from '../../../assets/LandingPages/BackgrondVideo/responsiveBVLP360x640.jpg'
import ResponsivePPH834x1194 from '../../../assets/homes/PersonaPage/responsivePPH834x1194.jpg'
import ResponsivePPH390x844 from '../../../assets/homes/PersonaPage/responsivePPH390x844.jpg'
import ResponsivePPH360x640 from '../../../assets/homes/PersonaPage/responsivePPH360x640.jpg'
import ResponsiveCD834x1194 from '../../../assets/Details/ProductOne/responsiveCD834x1194.jpg'
import ResponsiveCD390x844 from '../../../assets/Details/ProductOne/responsiveCD390x844.jpg'
import ResponsiveCD360x640 from '../../../assets/Details/ProductOne/responsiveCD360x640.jpg'
import ResponsiveLF834x1194 from '../../../assets/Forms/Login/responsiveLF834x1194.jpg'
import ResponsiveLF390x844 from '../../../assets/Forms/Login/responsiveLF390x844.jpg'
import ResponsiveLF360x640 from '../../../assets/Forms/Login/responsiveLF360x640.jpg'
import ResponsiveCC834x1194 from '../../../assets/Cards/Clothes/responsiveCC834x1194.jpg'
import ResponsiveCC390x844 from '../../../assets/Cards/Clothes/responsiveCC390x844.jpg'
import ResponsiveCC360x640 from '../../../assets/Cards/Clothes/responsiveCC360x640.jpg'
import VideoBackgroundVideoLP from '../../../assets/LandingPages/BackgrondVideo/backgroundV.mp4'
import BackgroundVideo from '../../landingsPages/BackgroundVideo/layoutBackgroundVideo'
import PersonalPage from '../../homes/PersonalPage/PersonalPage'
import ClothesDetail from '../../details/Clothes/ClothesDetail'
import LoginForm from '../../forms/Login/loginForm'
import ClothesCard from '../../Cards/Clothes/ClothesCard'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentOne = () => {
    const location = useLocation()
    const [cardOffOn, SetCardOffOn] = useState(false)
    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>PÁGINA ORIGINAL</h2>
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
                        <h2 className='section-identification-posters-base'>RECURSOS</h2>
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
                                    <h3>ÍCONOS</h3>
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
                                    <h3>ILLUSTRACIONES</h3>
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
                                        location.pathname === '/details' ? 
                                        <div className='assets-icons-clothes-D'>
                                            <img src={MagnifyingGlassD} alt="Ícono lupa" />
                                            <img src={PreviousIconD} alt="ícono flecha previo" />
                                            <img src={NextIconD} alt="ícono next" /> 
                                            <img src={HeartIconD} alt="ícono corazón" /> 
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <div className='assets-icons-login-f'>
                                            <img src={PersonIconF} alt="Isotipo persona" />
                                            <img src={TickIconF} alt="ícono tick ok" />
                                            <img src={PadlockIconF} alt="ícono Candado" />
                                            <img src={EyeIconF} alt="ícono Ojo bloqueado" />
                                            <img src={LoginStartButtonIconF} alt="ícono inicio sesión" />
                                            <img src={FacebookIconF} alt="ícono Facebook" /> 
                                            <img src={GoogleIconF} alt="ícono Google +" />
                                            <img src={TwitterIconF} alt="ícono Google +" />
                                        </div> :
                                        <div className='assets-icons-clothes-c'>
                                            <img src={CartBlackIconC} alt="ícono carrito negro" />
                                            <img src={CartWhiteIconC} alt="ícono cattito blanco" />
                                        </div>
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
                                            <p>Se utilizó otro video, ya que el orinal es propiedad de la marca.</p>
                                        </div> :
                                        location.pathname === '/homes' ? 
                                        <div className='assets-multimedia-personal-page-H'>
                                            <img src={BackgroundImagePP} alt="backgroun image PP" />
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-clothes-D'>
                                            <img src={FrontImageClothesD} alt="imagen frontal producto" />
                                            <img src={VerticalImageClothesD} alt="imagen vertical producto" />
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <div className='assets-multimedia-login-F'>
                                            <img src={BackgroundImageLoginF} alt="backgroun image Login F" />
                                        </div> :
                                        <img className='assets-multimedia-Clothes-C' src={ProductClotheCart} alt="Zapatilla adidas" />
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
                                        location.pathname === '/details' ? <h4>none</h4> :
                                        location.pathname === '/forms' ? <h4>none</h4> :
                                        <h4>none</h4>
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
                        <h2 className='section-identification-posters-base'>RESPONSIVO</h2>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='responsive-section-order'>
                        {
                            location.pathname === '/landingPages' ? 
                            <div>
                                <img src={ResponsiveBVLP834x1194} alt="diseño responsivo background video LP 834x1194" />
                                <img src={ResponsiveBVLP390x844} alt="diseño responsivo background video LP 390x844" />
                                <img src={ResponsiveBVLP360x640} alt="diseño responsivo background video LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src={ResponsivePPH834x1194} alt="diseño responsivo personal page H 834x1194" />
                                <img src={ResponsivePPH390x844} alt="diseño responsivo personal page H 390x844" />
                                <img src={ResponsivePPH360x640} alt="diseño responsivo personal page H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src={ResponsiveCD834x1194} alt="diseño responsivo clothes D 834x1194" />
                                <img src={ResponsiveCD390x844} alt="diseño responsivo clothes D 390x844" />
                                <img src={ResponsiveCD360x640} alt="diseño responsivo clothes D 360x640" />
                            </div> :
                             location.pathname === '/forms' ? 
                             <div>
                                 <img src={ResponsiveLF834x1194} alt="diseño responsivo login F 834x1194" />
                                 <img src={ResponsiveLF390x844} alt="diseño responsivo login F 390x844" />
                                 <img src={ResponsiveLF360x640} alt="diseño responsivo login F 360x640" />
                             </div> :
                             <div>
                                <img src={ResponsiveCC834x1194} alt="diseño responsivo Clothes C 834x1194" />
                                <img src={ResponsiveCC390x844} alt="diseño responsivo clothes C 390x844" />
                                <img src={ResponsiveCC360x640} alt="diseño responsivo clothes C 360x640" />
                             </div>
                        }
                        <div className='responsive-sizes-posters-order'>
                            <div className='responsive-sizes-posters-internal-order'>
                                <h2 className='responsive-sizes-posters-base'>834x1194 px</h2>
                            </div>
                            <div className='responsive-sizes-posters-internal-order'>
                                <h2 className='responsive-sizes-posters-base'>390x844 px</h2>
                            </div>
                            <div className='responsive-sizes-posters-internal-order-last'>
                                <h2 className='responsive-sizes-posters-base'>360x640 px</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-layout-section-order'>
                <div className='box-links-repos-and-identification-posters-order'>
                    <div className='section-identification-posters-order'>
                        <h2 className='section-identification-posters-base'>MI REPRODUCCIÓN</h2>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='section-link-identification-posters-order'>
                        <h2 className='section-link-identification-posters-base'>REPO:
                        {
                           location.pathname === '/landingPages' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/BackgroundVideo" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           location.pathname === '/homes' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/homes/PersonalPage" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            location.pathname === '/details' ?
                            <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/details/Clothes" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           location.pathname === '/forms' ?
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/forms/Login" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/Cards/Clothes" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>
                        }
                        </h2>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>                   
                </div>
                {
                    location.pathname === '/landingPages' ? <BackgroundVideo/> : 
                    location.pathname === '/homes' ? <PersonalPage/> :
                    location.pathname === '/details' ? <ClothesDetail/> :
                    location.pathname === '/forms' ? <LoginForm/> :
                    <div>
                        <div onMouseOver={() => SetCardOffOn (!cardOffOn)} className='clothes-card-order-section-content-one'>
                                <ClothesCard/>
                                <ClothesCard/>
                                <ClothesCard/>
                        </div>
                        {
                            cardOffOn&&
                            <div>

                            </div>
                        }
                    </div>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentOne;