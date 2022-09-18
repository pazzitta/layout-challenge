import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import OPPromotionalLP from '../../../assets/LandingPages/LayoutSectionContent/OPPromotionalLP.jpg'
import OPProfileD from '../../../assets/Details/LayoutSectionContent/OPProfileD.jpg'
import OPContactUsF from '../../../assets/Forms/LayoutSectionContent/OPContactUsF.jpg'
import OPFooodC from '../../../assets/Cards/LayoutSectionContent/OPFoodC.jpg'
import OPDigitalNewspaperOneH from '../../../assets/homes/LayoutSectionContent/OPDigitalNewspaper1H.jpg'
import OPDigitalNewspaperTwoH from '../../../assets/homes/LayoutSectionContent/OPDigitalNewspaper2H.jpg'
import IsotypePromitionalLP from '../../../assets/LandingPages/Promotional/isoPromotion.jpg'
import WhiteMagnifyingGlassPromotionalLP from '../../../assets/LandingPages/Promotional/lupaP.png'
import SelectTwoLinePromotionalLP from '../../../assets/LandingPages/Promotional/selectP.png'
import DarkGrayEyeProfileD from '../../../assets/Details/Profile/iconDarkGrayEye.png'
import FavGrayProfileD from '../../../assets/Details/Profile/iconFavGray.png'
import MessageProfileD from '../../../assets/Details/Profile/iconMessage.png'
import PersonDarkGrayProfileD from '../../../assets/Details/Profile/iconPersonDarkGray.png'
import LocationGrayProfileD from '../../../assets/Details/Profile/locationGray.png'
import StarBlueProfileD from '../../../assets/Details/Profile/starBlue.png'
import EmailGoldenIconF from '../../../assets/Forms/ContactUs/iconEmailGolden.png'
import InstagramBlackIconF from '../../../assets/Forms/ContactUs/iconInstagramBlack.png'
import LocationGoldenIconF from '../../../assets/Forms/ContactUs/iconLocationGolden.png'
import PhoneGoldenIconF from '../../../assets/Forms/ContactUs/iconPhoneGolden.png'
import PinteresBlackIconF from '../../../assets/Forms/ContactUs/iconPinterestBlack.png'
import TwitterBlackIconF from '../../../assets/Forms/ContactUs/iconTwitterBlack0.png'
import MenuImageIconF from '../../../assets/Forms/ContactUs/imageMenu.png'
import FacebookIconBlackF from '../../../assets/Forms/Register/iconFacebookBlack.png'
import LinkedInIconBlackF from '../../../assets/Forms/Register/iconLinkedInBlack.png'
import IsotypeBrandH from '../../../assets/homes/DigitalNewsPaper/isotypeDNP.png'
import WorldIconH from '../../../assets/homes/DigitalNewsPaper/iconWorldDNP.png'
import AtomIcondH from '../../../assets/homes/DigitalNewsPaper/iconAtomDNP.png'
import PieChartIcondH from '../../../assets/homes/DigitalNewsPaper/iconPieChartDNP.png'
import HandIcondH from '../../../assets/homes/DigitalNewsPaper/iconHand2DNP.png'
import BallIcondH from '../../../assets/homes/DigitalNewsPaper/iconBallDNP.png'
import MagnifyingGlassGrayH from '../../../assets/homes/DigitalNewsPaper/iconMagnifyingGlassDNP.png'
import BackgroundImagePromotionalLP from '../../../assets/LandingPages/Promotional/imageP.jpg'
import UserBoyProfileD from '../../../assets/Details/Profile/ProfileBoy.jpg'
import BrandLogoProfileD from '../../../assets/Details/Profile/brandLogo.png'
import ImageHeaderF from '../../../assets/Forms/ContactUs/backgroundHeader.jpg'
import ImageLocationF from '../../../assets/Forms/ContactUs/locationMap.jpg'
import LogoWithBackground from '../../../assets/Forms/ContactUs/logoWithBackground.jpg'
import ProductTwoC from '../../../assets/Cards/Food/productFood.png'
import ImageSectionTwoH from '../../../assets/homes/DigitalNewsPaper/imageSectionTwo.png'
import ImageSectionThreeH from '../../../assets/homes/DigitalNewsPaper/imageSectionThree.jpg'
import ImageSectionFiveH from '../../../assets/homes/DigitalNewsPaper/imageSectionFive.png'
import ImageSectionSevenH from '../../../assets/homes/DigitalNewsPaper/imageSectionSeven.png'
import LogoTeamOneH from '../../../assets/homes/DigitalNewsPaper/teamOneShield.png'
import LogoTeamTwoH from '../../../assets/homes/DigitalNewsPaper/teamTwoShield.png'

import GifResponsive from '../../../assets/myHome/responsiveGif.gif'
import GifLayout from '../../../assets/myHome/layoutGif.gif'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentFour = () => {
    const location = useLocation()
    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order-four'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>PÁGINA ORIGINAL</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    location.pathname === '/landingPages' ? <img className='original-page-section-order-two-img' src={OPPromotionalLP} alt="pág. original Promotional LP" /> :
                    location.pathname === '/homes' ? 
                    <div className='box-digital-newspaper-images'>
                        <img  src={OPDigitalNewspaperOneH} alt="pág. original Digital Newspaper uno" /> 
                        <img  src={OPDigitalNewspaperTwoH} alt="pág. original Digital Newspaper dos" /> 
                    </div> :
                    location.pathname === '/details' ? <img className='original-page-section-order-two-img' src={OPProfileD} alt="pág. original  Profile D " /> :
                    location.pathname === '/forms' ? <img className='original-page-section-four-order-three-img-big' src={OPContactUsF} alt="pág. original Contact Us F " /> :
                    <img  className='original-page-section-order-two-img' src={OPFooodC} alt="pág. original Food C" /> 
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
                                        location.pathname === '/landingPages' ?
                                        <div className='assets-icons-promotional-order'>
                                            <img  src={IsotypePromitionalLP} alt="isologo marca" /> 
                                            <img  src={WhiteMagnifyingGlassPromotionalLP} alt="Lupa blanca" /> 
                                            <img  width='15%' src={SelectTwoLinePromotionalLP} alt="Líneas de menú" />                                             
                                        </div>
                                        :
                                        location.pathname === '/homes' ?
                                        <div className='assets-icons-login-f'>
                                            <img src={IsotypeBrandH} alt="Isotipo marca" />
                                            <img src={WorldIconH} alt="ícono Mundo" />
                                            <img src={AtomIcondH} alt="ícono átomo" />
                                            <img src={PieChartIcondH} alt="ícono Grafico de torta" />
                                            <img src={HandIcondH} alt="ícono Manos" />
                                            <img src={BallIcondH} alt="ícono Pelota" /> 
                                            <img src={MagnifyingGlassGrayH} alt="ícono Lupa gris" />
                                        </div> :
                                        location.pathname === '/details' ?
                                        <div className='assets-icons-profile-D'>
                                            <img src={DarkGrayEyeProfileD} alt="ícono ojo gris" />
                                            <img src={FavGrayProfileD} alt="ícono favorito" />
                                            <img src={MessageProfileD} alt="ícono mensaje" />
                                            <img src={PersonDarkGrayProfileD} alt="ícono usuario gris" />
                                            <img src={LocationGrayProfileD} alt="ícono localización gris" />
                                            <img src={StarBlueProfileD} alt="ícono estrella azul" />
                                            <img src={BrandLogoProfileD} alt="ícono logo marca" /> 
                                        </div> :
                                        location.pathname === '/forms' ?
                                        <div className='assets-icons-contact-us-F'>
                                            <img src={EmailGoldenIconF} alt="ícono email dorado" />
                                            <img src={LocationGoldenIconF} alt="ícono localización dorado" />
                                            <img src={PhoneGoldenIconF} alt="ícono celular dorado" />
                                            <img src={InstagramBlackIconF} alt="ícono Instagram Negro" />
                                            <img src={PinteresBlackIconF} alt="ícono Pinterest negro" />
                                            <img src={TwitterBlackIconF} alt="ícono Twitter negro" />
                                            <img src={FacebookIconBlackF} alt="ícono Facebook negro" />
                                            <img src={LinkedInIconBlackF} alt="ícono LinkedIn negro" />
                                            <img src={MenuImageIconF} alt="ícono menú blanco" /> 
                                        </div> :
                                        <h4>none</h4>
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
                                        <div>
                                            <img width="50%" src={BackgroundImagePromotionalLP} alt='fondo página promocional'/>
                                        </div> :
                                        location.pathname === '/homes' ? 
                                        <div className='assets-multimedia-digital-newspaper-H'>
                                            <img src={ImageSectionTwoH} alt="Imagen noticia sección dos" />
                                            <img src={ImageSectionThreeH} alt="Imagen noticia sección tres" />   
                                            <img src={ImageSectionSevenH} alt="Imagen noticia sección siete" />  
                                            <img src={ImageSectionFiveH} alt="Imagen noticia sección cinco" />   
                                            <img src={LogoTeamOneH} alt="Imagen escudo equipo uno" />   
                                            <img src={LogoTeamTwoH} alt="Imagen escudo equipo dos" /> 
                                        </div> :
                                        location.pathname === '/details' ? <img width='35%' src={UserBoyProfileD} alt="Imagen usuario" /> :  
                                        location.pathname === '/forms' ? 
                                        <div className='assets-multimedia-contact-us-F'>
                                            <img src={ImageHeaderF} alt="imagen cabecera de página" />
                                            <img src={ImageLocationF} alt="mapa" />
                                            <img src={LogoWithBackground} alt="logo con fondo" />
                                        </div> :
                                        <div className='assets-multimedia-food-C'>
                                            <img src={ProductTwoC} alt="imagen bagels" />
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                               <div className='assets-illustration-section-four'>
                                {
                                    location.pathname === '/landingPages' ? <h4>none</h4> :
                                    location.pathname === '/homes' ? <h4>none</h4> :
                                    location.pathname === '/details' ? <h4>none</h4> :
                                    location.pathname === '/forms' ?  <h4>none</h4> :
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
                    <div className='responsive-section-order-gif'>
                        {
                            location.pathname === '/landingPages' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo LP 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo LP 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo  LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo H 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo  H 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo D 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo  D 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo D 360x640" />
                            </div> :
                            location.pathname === '/forms' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo F 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo  F 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo F 360x640" />
                            </div> :
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo Food C 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo Food C 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo Food C 360x640" />
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
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/Promotional" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           location.pathname === '/homes' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/homes/DigitalNewspaper" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            location.pathname === '/details' ?
                            <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/details/Profile" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           location.pathname === '/forms' ?
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/forms/ContactUs" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/Cards/Food" target="_blank" rel="noreferrer">
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
                    location.pathname === '/landingPages' ? <img width="55%" src={GifLayout} alt='gif Working'></img> : 
                    location.pathname === '/homes' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    location.pathname === '/details' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    location.pathname === '/forms' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    <img width="55%" src={GifLayout} alt='gif Working'></img>
                    // <div className='food-card-order-section-content-two'>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>
                    //     <FoodCard/>        
                    // </div>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentFour;