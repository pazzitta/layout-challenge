import './layoutSectionContent.css'
import {useLocation} from 'react-router-dom'
import OPBackgroundVideoLP from '../../../assets/LandingPages/BackgroundVideoGif.gif'
import OPPersonalPageH from '../../../assets/homes/LayoutSectionContent/OPPersonalPageH.jpg'
import OPClothesD from '../../../assets/Details/LayoutSectionContent/OPClothesD.jpg'
import OPLoginF from '../../../assets/Forms/LayoutSectionContent/OPLoginF.jpg'
import OPNewsC from '../../../assets/Cards/LayoutSectionContent/OPNewsC.jpg'
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
import MenuThreeLinePP from '../../../assets/homes/PersonaPage/menuIconPP.png'
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
import ImageNewsC from '../../../assets/Cards/News/imageNewsC.jpg'
import ImageProfileC from '../../../assets/Cards/Profile/imageProfileC.jpg'
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
import ResponsiveNC834x1194 from '../../../assets/Cards/News/responsiveNC834x1194.jpg'
import ResponsiveNC390x844 from '../../../assets/Cards/News/responsiveNC390x844.jpg'
import ResponsiveNC360x640 from '../../../assets/Cards/News/responsiveNC360x640.jpg'
import VideoBackgroundVideoLP from '../../../assets/LandingPages/BackgrondVideo/backgroundV.mp4'
import BackgroundVideo from '../../landingsPages/BackgroundVideo/backgroundVideo'
import PersonalPage from '../../homes/PersonalPage/PersonalPage'
import ClothesDetail from '../../details/Clothes/ClothesDetail'
import LoginForm from '../../forms/Login/loginForm'
import NewsCard from '../../Cards/News/News'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentOne = () => {
    const { pathname } = useLocation()

    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order-one'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>PÁGINA ORIGINAL</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    pathname === '/landingPages' ? <img  src={OPBackgroundVideoLP} alt="pág. original BackgroundVideo LP" /> :
                    pathname === '/homes' ? <img src={OPPersonalPageH} alt="pág. original Personal Page H" /> :
                    pathname === '/details' ? <img src={OPClothesD} alt="pág. original Clothes D" /> :
                    pathname === '/forms' ? <img src={OPLoginF} alt="pág. original Login F" /> :
                    <img src={OPNewsC} alt="pág. original News C" /> 
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
                                    <h3>ILUSTRACIONES</h3>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className='order-papers-assets'>
                            <div className='papers-order-and-styles'>
                                <div>
                                    {
                                        pathname === '/landingPages' ? 
                                        <div className='assets-icons-background-video-LP'>
                                            <img src={PlayVideoIconLP} alt="Ícono play" />
                                            <img src={DownArrowIconLP} alt="ícono flecha rosa" />
                                            <img src={MenuLineIconLP} alt="ícono 3 líneas menú" /> 
                                        </div> :
                                        pathname === '/homes' ? 
                                        <div className='assets-icons-minimalist-h'>
                                            <img src={IsotipoPP} alt="Isotipo página" />
                                            <img src={TwitteIconPP} alt="ícono twitter" />
                                            <img src={BehanceIconPP} alt="ícono Behance" />
                                            <img src={InstagramIconPP} alt="ícono Instagram" />
                                            <img src={GitHubIconPP} alt="ícono GitHub" />
                                            <img src={LinkedInIconPP} alt="ícono LinkedIn" /> 
                                            <img src={PhoneIconPP} alt="ícono Phone rosa" /> 
                                            <img src={MenuThreeLinePP} alt="ícono menú tres líneas" /> 
                                        </div> :
                                        pathname === '/details' ? 
                                        <div className='assets-icons-clothes-D'>
                                            <img src={MagnifyingGlassD} alt="Ícono lupa" />
                                            <img src={PreviousIconD} alt="ícono flecha previo" />
                                            <img src={NextIconD} alt="ícono next" /> 
                                            <img src={HeartIconD} alt="ícono corazón" /> 
                                            <img src={MenuThreeLinePP} alt="ícono menú tres líneas" /> 
                                        </div> :
                                        pathname === '/forms' ? 
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
                                        <h4>none</h4>
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
                                        pathname === '/landingPages'? 
                                        <div className='assets-multimedia-background-video-LP'>
                                            <video autoPlay loop muted>
                                                <source src={VideoBackgroundVideoLP} type="video/mp4" />
                                            </video>
                                            <p>Se utilizó otro video, ya que el original es propiedad de la marca.</p>
                                        </div> :
                                        pathname === '/homes' ? 
                                        <div className='assets-multimedia-personal-page-H'>
                                            <img src={BackgroundImagePP} alt="backgroun image PP" />
                                        </div> :
                                        pathname === '/details' ? 
                                        <div className='assets-multimedia-clothes-D'>
                                            <img src={FrontImageClothesD} alt="imagen frontal producto" />
                                            <img src={VerticalImageClothesD} alt="imagen vertical producto" />
                                        </div> :
                                        pathname === '/forms' ? 
                                        <div className='assets-multimedia-login-F'>
                                            <img src={BackgroundImageLoginF} alt="backgroun image Login F" />
                                        </div> :
                                        <div className='assets-multimedia-profile-C'>
                                            <img src={ImageProfileC} alt='imagen del autor'></img>
                                            <img src={ImageNewsC} alt="ferris wheel london" />
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
                                        pathname === '/landingPages' ? <h4>none</h4> :
                                        pathname === '/homes' ? <h4>none</h4> :
                                        pathname === '/details' ? <h4>none</h4> :
                                        pathname === '/forms' ? <h4>none</h4> :
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
                            pathname === '/landingPages' ? 
                            <div>
                                <img src={ResponsiveBVLP834x1194} alt="diseño responsivo background video LP 834x1194" />
                                <img src={ResponsiveBVLP390x844} alt="diseño responsivo background video LP 390x844" />
                                <img src={ResponsiveBVLP360x640} alt="diseño responsivo background video LP 360x640" />
                            </div> :
                            pathname === '/homes' ? 
                            <div>
                                <img src={ResponsivePPH834x1194} alt="diseño responsivo personal page H 834x1194" />
                                <img src={ResponsivePPH390x844} alt="diseño responsivo personal page H 390x844" />
                                <img src={ResponsivePPH360x640} alt="diseño responsivo personal page H 360x640" />
                            </div> :
                            pathname === '/details' ? 
                            <div>
                                <img src={ResponsiveCD834x1194} alt="diseño responsivo clothes D 834x1194" />
                                <img src={ResponsiveCD390x844} alt="diseño responsivo clothes D 390x844" />
                                <img src={ResponsiveCD360x640} alt="diseño responsivo clothes D 360x640" />
                            </div> :
                             pathname === '/forms' ? 
                             <div>
                                 <img src={ResponsiveLF834x1194} alt="diseño responsivo login F 834x1194" />
                                 <img src={ResponsiveLF390x844} alt="diseño responsivo login F 390x844" />
                                 <img src={ResponsiveLF360x640} alt="diseño responsivo login F 360x640" />
                             </div> :
                             <div>
                                <img src={ResponsiveNC834x1194} alt="diseño responsivo News C 834x1194" />
                                <img src={ResponsiveNC390x844} alt="diseño responsivo News C 390x844" />
                                <img src={ResponsiveNC360x640} alt="diseño responsivo News C 360x640" />
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
                           pathname === '/landingPages' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/BackgroundVideo" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           pathname === '/homes' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/homes/PersonalPage" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            pathname === '/details' ?
                            <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/details/Clothes" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           pathname === '/forms' ?
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/forms/Login" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/Cards/News" target="_blank" rel="noreferrer">
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
                    pathname === '/landingPages' ? <BackgroundVideo/> : 
                    pathname === '/homes' ? <PersonalPage/> :
                    pathname === '/details' ? <ClothesDetail/> :
                    pathname === '/forms' ? <LoginForm/> :
                    <div className='news-card-order-section-content-one'>
                        <NewsCard/>
                    </div>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentOne;