import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import OPPromotionalLP from '../../../assets/LandingPages/LayoutSectionContent/OPPromotionalLP.jpg'
import OPProfileD from '../../../assets/Details/LayoutSectionContent/OPProfileD.jpg'

import OPRegisterF from '../../../assets/Forms/Register/LayoutSectioContent/OPRegisterF.jpg'
import OPFooodC from '../../../assets/Cards/LayoutSectionContent/OPFoodC.jpg'

import IsotypePromitionalLP from '../../../assets/LandingPages/Promotional/isoPromotion.jpg'
import WhiteMagnifyingGlassPromotionalLP from '../../../assets/LandingPages/Promotional/lupaP.png'
import SelectTwoLinePromotionalLP from '../../../assets/LandingPages/Promotional/selectP.png'
import DarkGrayEyeProfileD from '../../../assets/Details/Profile/iconDarkGrayEye.png'
import FavGrayProfileD from '../../../assets/Details/Profile/iconFavGray.png'
import MessageProfileD from '../../../assets/Details/Profile/iconMessage.png'
import PersonDarkGrayProfileD from '../../../assets/Details/Profile/iconPersonDarkGray.png'
import LocationGrayProfileD from '../../../assets/Details/Profile/locationGray.png'
import StarBlueProfileD from '../../../assets/Details/Profile/starBlue.png'

import BackgroundImagePromotionalLP from '../../../assets/LandingPages/Promotional/imageP.jpg'
import UserBoyProfileD from '../../../assets/Details/Profile/ProfileBoy.jpg'
import BrandLogoProfileD from '../../../assets/Details/Profile/brandLogo.png'

import ProductFrontImageD from '../../../assets/Details/ProductTwo/productFrontImage.png'
import RightImageProductD from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'
import ProductTwoC from '../../../assets/Cards/Food/productFood.png'
import BackgroundEcommerceH from '../../../assets/homes/Ecommerce/backgroundEcommerce.jpg'
import GifResponsive from '../../../assets/myHome/responsiveGif.gif'
import ResponsiveFC834x1194 from '../../../assets/Cards/Food/responsiveFC834x1194.jpg'
import ResponsiveFC390x844 from '../../../assets/Cards/Food/responsiveFC390x844.jpg'
import ResponsiveFC360x640 from '../../../assets/Cards/Food/responsiveFC360x640.jpg'
import OPEcommerce from '../../../assets/homes/LayoutSectionContent/OPEcommerceH.jpg'
import LayoutMinimalism from '../../landingsPages/Minimalism/layoutMinimalism'
import EcommerceHomes from '../../homes/Ecommerce/Ecommerce'
import FurnitureDetail from '../../details/ProductTwo/Furniture'
import RegisterForm from '../../forms/Register/registerForm'
import FoodCard from '../../Cards/Food/Food'
import BackgroundRegisterF from '../../../assets/Forms/Register/backgroundRegister.jpg'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentFour = () => {
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
                    location.pathname === '/landingPages' ? <img className='original-page-section-order-two-img' src={OPPromotionalLP} alt="pág. original Promotional LP" /> :
                    location.pathname === '/homes' ? <img className='original-page-section-order-two-img-ecommerce' src="" alt="pág. original" /> :
                    location.pathname === '/details' ? <img className='original-page-section-order-two-img' src={OPProfileD} alt="pág. original  Profile D " /> :
                    location.pathname === '/forms' ? <img className='original-page-section-order-two-img' src="" alt="pág. original Register " /> :
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
                                        <div className='assets-icons-minimalism-LP'>
                                            <img src="" alt="h" />
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
                                        <div className='assets-icons-register-F'>
                                            <img src="" alt="Isologo marca" />
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
                                        location.pathname === '/homes' ? <div className='assets-multimedia-ecommerce-H'>
                                            <img src="" alt="background ecommerce" />
                                        </div> :
                                        location.pathname === '/details' ? <img width='35%' src={UserBoyProfileD} alt="Imagen usuario" /> :  
                                        location.pathname === '/forms' ? <h4>none</h4> :
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
                                    location.pathname === '/forms' ? <img src="" alt="Imagen del medio silla" /> :
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
                           <a href="" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            location.pathname === '/details' ?
                            <a href="" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           location.pathname === '/forms' ?
                           <a href="" target="_blank" rel="noreferrer">
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
                    location.pathname === '/landingPages' ? <h2>SOY LA ANIMACIÓN DE EN CONTRUCCIÓN</h2> : 
                    location.pathname === '/homes' ? <h2>SOY LA ANIMACIÓN DE EN CONTRUCCIÓN</h2> :
                    location.pathname === '/details' ? <h2>SOY LA ANIMACIÓN DE EN CONTRUCCIÓN</h2> :
                    location.pathname === '/forms' ? <h2>SOY LA ANIMACIÓN DE EN CONTRUCCIÓN</h2> :
                    <h2>SOY LA ANIMACIÓN DE EN CONTRUCCIÓN</h2>
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