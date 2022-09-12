import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import ShopifyLogo from '../../../assets/LandingPages/Minimalism/shopifylogo.png'
import BrandLogoD from '../../../assets/Details/ProductTwo/brandLogo.png'
import CartGreyIconD from '../../../assets/Details/ProductTwo/cartGray.png'
import ShortMagnifyingGlassGreyD from '../../../assets/Details/ProductTwo/shortMagnifyingGlassGrey.png'
import StarYellowD from '../../../assets/Details/ProductTwo/starYellow.png'
import IsologoBrandF from '../../../assets/Forms/Register/isologoWhite.png'
import FacebookIconBlackF from '../../../assets/Forms/Register/iconFacebookBlack.png'
import GoogleIconBlackF from '../../../assets/Forms/Register/iconGoogleBlack.png'
import LinkedInIconBlackF from '../../../assets/Forms/Register/iconLinkedInBlack.png'
import PeopleIconGrayF from '../../../assets/Forms/Register/peopleIconGrayF.png'
import EmailIconGrayF from '../../../assets/Forms/Register/emailIconGrayF.png'
import PadLockIconGrayF from '../../../assets/Forms/Register/padLockIconGrayF.png'
import CartWhiteH from '../../../assets/homes/Ecommerce/cartWhiteH.png'
import ProfileAddIconC from '../../../assets/Cards/Profile/iconAdd.png'
import ProfilePeopleIconC from '../../../assets/Cards/Profile/iconPeople.png'
import ProfilePlayIconC from '../../../assets/Cards/Profile/iconVideo.png'
import ProfileViewsIconC from '../../../assets/Cards/Profile/iconViews.png'
import ProfileStarC from '../../../assets/Cards/Profile/starPeople.png'
import BackgroundImageMinimalismLP from '../../../assets/LandingPages/Minimalism/backgroundImage1.png'
import LeftImageProductD from '../../../assets/Details/ProductTwo/leftImageProduct.jpg'
import MiddleImageProductD from '../../../assets/Details/ProductTwo/middleImageProduct.jpg'
import ProductFrontImageD from '../../../assets/Details/ProductTwo/productFrontImage.png'
import RightImageProductD from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'
import BackgroundEcommerceH from '../../../assets/homes/Ecommerce/backgroundEcommerce.jpg'
import ProfileImageC from '../../../assets/Cards/Profile/imageProfileP.jpg'
import ResponsiveMLP834x1194 from '../../../assets/LandingPages/Minimalism/responsiveMLPTablet.jpg'
import ResponsiveMLP390x844 from '../../../assets/LandingPages/Minimalism/responsiveMLP390x844.jpg'
import ResponsiveMLP360x640 from '../../../assets/LandingPages/Minimalism/responsiveMLP360x640.jpg'
import ResponsiveECH834x1194 from '../../../assets/homes/Ecommerce/responsiveECH834x1194.jpg'
import ResponsiveECH390x844 from '../../../assets/homes/Ecommerce/responsiveECH390x844.jpg'
import ResponsiveECH360x640 from '../../../assets/homes/Ecommerce/responsiveECH360x640.jpg'
import ResponsiveFD834x1194 from '../../../assets/Details/ProductTwo/responsiveFD834x1194.jpg'
import ResponsiveFD390x844 from '../../../assets/Details/ProductTwo/responsiveFD390x844.jpg'
import ResponsiveFD360x640 from '../../../assets/Details/ProductTwo/responsiveFD360x640.jpg'
import ResponsiveRF834x1194 from '../../../assets/Forms/Register/responsiveRF834x1194.jpg'
import ResponsiveRF390x844 from '../../../assets/Forms/Register/responsiveRF390x844.jpg'
import ResponsiveRF360x640 from '../../../assets/Forms/Register/responsiveRF360x640.jpg'
import ResponsivePC834x1194 from '../../../assets/Cards/Profile/responsivePC834x1194.jpg'
import ResponsivePC390x844 from '../../../assets/Cards/Profile/responsivePC390x844.jpg'
import ResponsivePC360x640 from '../../../assets/Cards/Profile/responsivePC360x640.jpg'
import OPMinimalismLP from '../../../assets/LandingPages/LayoutSectionContent/OPMinimalismLP.jpg'
import OPFurniture from '../../../assets/Details/ProductTwo/OPFurnitureD.jpg'
import OPRegisterF from '../../../assets/Forms/Register/LayoutSectioContent/OPRegisterF.jpg'
import OPProfileC from '../../../assets/Cards/LayoutSectionContent/OPProfileC.jpg'
import OPEcommerce from '../../../assets/homes/LayoutSectionContent/OPEcommerceH.jpg'
import LayoutMinimalism from '../../landingsPages/Minimalism/layoutMinimalism'
import EcommerceHomes from '../../homes/Ecommerce/Ecommerce'
import FurnitureDetail from '../../details/ProductTwo/Furniture'
import RegisterForm from '../../forms/Register/registerForm'
import ProfileCard from '../../Cards/Profile/Profile'
import BackgroundRegisterF from '../../../assets/Forms/Register/backgroundRegister.jpg'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentTwo = () => {
    const location = useLocation()
    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order-two'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>PÁGINA ORIGINAL</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    location.pathname === '/landingPages' ? <img className='original-page-section-order-two-img' src={OPMinimalismLP} alt="pág. original Minimalism LP" /> :
                    location.pathname === '/homes' ? <img className='original-page-section-order-two-img-ecommerce' src={OPEcommerce} alt="pág. original " /> :
                    location.pathname === '/details' ? <img className='original-page-section-order-two-img' src={OPFurniture} alt="pág. original Furniture D" /> :
                    location.pathname === '/forms' ? <img className='original-page-section-order-two-img' src={OPRegisterF} alt="pág. original Register " /> :
                    <img  className='original-page-section-order-two-img' src={OPProfileC} alt="pág. original profile C" /> 
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
                                        <div className='assets-icons-minimalism-LP'>
                                            <img src={ShopifyLogo} alt="logo marca" />
                                        </div> :
                                        location.pathname === '/homes' ?
                                        <div className='assets-icons-minimalism-LP'>
                                            <img src={CartWhiteH} alt="ícono carrito" />
                                        </div> :
                                        location.pathname === '/details' ?
                                        <div className='assets-icons-furniture-D'>
                                            <img src={BrandLogoD} alt="logo marca" />
                                            <img src={CartGreyIconD} alt="ícono carrito gris" />
                                            <img src={ShortMagnifyingGlassGreyD} alt="ícono lupa gris" />
                                            <img src={StarYellowD} alt="estrella amarilla" />
                                        </div> :
                                        location.pathname === '/forms' ?
                                        <div className='assets-icons-register-F'>
                                            <img src={IsologoBrandF} alt="Isologo marca" />
                                            <img src={FacebookIconBlackF} alt="ícono Facebook negro" />
                                            <img src={GoogleIconBlackF} alt="ícono Google negro" />
                                            <img src={LinkedInIconBlackF} alt="ícono LinkedIn negro" />
                                            <img src={PeopleIconGrayF} alt="ícono persona gris" />
                                            <img src={EmailIconGrayF} alt="ícono Carta gris" />
                                            <img src={PadLockIconGrayF} alt="ícono Candado gris" />
                                        </div> :
                                        <div className='assets-icons-profile-c'>
                                            <img src={ProfileAddIconC} alt="ícono agregar persona" />
                                            <img src={ProfilePeopleIconC} alt="ícono Usuario" />
                                            <img src={ProfilePlayIconC} alt="ícono Play " />
                                            <img src={ProfileViewsIconC} alt="ícono Ojo" />
                                            <img src={ProfileStarC} alt="Estrella gris" />
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
                                        location.pathname === '/landingPages' ? 
                                        <div>
                                            <img width="85%" src={BackgroundImageMinimalismLP} alt="backgroun image PP" />
                                        </div> :
                                        location.pathname === '/homes' ? <div className='assets-multimedia-ecommerce-H'>
                                            <img src={BackgroundEcommerceH} alt="background ecommerce" />
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-furniture-D'>
                                            <img src={LeftImageProductD} alt="Imagen izquierda silla" />
                                            <img src={MiddleImageProductD} alt="Imagen del medio silla" />   
                                            <img src={RightImageProductD} alt="Imagen izquierda silla" />   
                                            <img src={ProductFrontImageD} alt="Imagen izquierda silla" />   
                                        </div> :
                                        location.pathname === '/forms' ? <h4>none</h4> :
                                        <div className='assets-multimedia-food-C'>
                                            <img src={ProfileImageC} alt="imagen usuario" />
                                        </div> 
                                    }
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='papers-order-and-styles'>
                               <div className='assets-multimedia-minimalism-LP'>
                                {
                                    location.pathname === '/landingPages' ? <h4>none</h4> :
                                    location.pathname === '/homes' ? <h4>none</h4> :
                                    location.pathname === '/details' ? <h4>none</h4> :
                                    location.pathname === '/forms' ? <img src={BackgroundRegisterF} alt="Imagen del medio silla" /> :
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
                                <img src={ResponsiveMLP834x1194} alt="diseño responsivo minimalism LP 834x1194" />
                                <img src={ResponsiveMLP390x844} alt="diseño responsivo minimalism LP 390x844" />
                                <img src={ResponsiveMLP360x640} alt="diseño responsivo minimalism  LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src={ResponsiveECH834x1194} alt="diseño responsivo e-commerce H 834x1194" />
                                <img src={ResponsiveECH390x844} alt="diseño responsivo e-commerce H 390x844" />
                                <img src={ResponsiveECH360x640} alt="diseño responsivo e-commerce H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src={ResponsiveFD834x1194} alt="diseño responsivo Furniture D 834x1194" />
                                <img src={ResponsiveFD390x844} alt="diseño responsivo Furniture D 390x844" />
                                <img src={ResponsiveFD360x640} alt="diseño responsivo Furniture D 360x640" />
                            </div> :
                            location.pathname === '/forms' ? 
                            <div>
                                <img src={ResponsiveRF834x1194} alt="diseño responsivo Register F 834x1194" />
                                <img src={ResponsiveRF390x844} alt="diseño responsivo Register F 390x844" />
                                <img src={ResponsiveRF360x640} alt="diseño responsivo Register F 360x640" />
                            </div> :
                            <div>
                                <img src={ResponsivePC834x1194} alt="diseño responsivo Profile C 834x1194" />
                                <img src={ResponsivePC390x844} alt="diseño responsivo Profile C 390x844" />
                                <img src={ResponsivePC360x640}  alt="diseño responsivo Profile C 360x640" />
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
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/Minimalism" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           location.pathname === '/homes' ? 
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/homes/Ecommerce" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            location.pathname === '/details' ?
                            <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/details/ProductTwo" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           location.pathname === '/forms' ?
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/forms/Register" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           <a href="" target="_blank" rel="noreferrer">
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
                    location.pathname === '/landingPages' ? <LayoutMinimalism/> : 
                    location.pathname === '/homes' ? <EcommerceHomes/> :
                    location.pathname === '/details' ? <FurnitureDetail/> :
                    location.pathname === '/forms' ? <RegisterForm/> :
                    <div className='profile-card-base-section-content-one'>
                        <div className='profile-card-order-section-content-one'>
                            <ProfileCard/>
                            <ProfileCard/>       
                            <ProfileCard/>       
                            <ProfileCard/>       
                        </div>
                    </div>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentTwo;