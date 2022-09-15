import './layoutSectionContent.css'
import { useLocation } from 'react-router-dom'
import OPPromotionalLP from '../../../assets/LandingPages/LayoutSectionContent/OPPromotionalLP.jpg'
import OPFurniture from '../../../assets/Details/ProductTwo/OPFurnitureD.jpg'
import OPRegisterF from '../../../assets/Forms/Register/LayoutSectioContent/OPRegisterF.jpg'
import OPFooodC from '../../../assets/Cards/LayoutSectionContent/OPFoodC.jpg'

import IsotypePromitionalLP from '../../../assets/LandingPages/Promotional/isoPromotion.jpg'
import WhiteMagnifyingGlassPromotionalLP from '../../../assets/LandingPages/Promotional/lupaP.png'
import SelectTwoLinePromotionalLP from '../../../assets/LandingPages/Promotional/selectP.png'
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

import BackgroundImagePromotionalLP from '../../../assets/LandingPages/Promotional/imageP.jpg'
import LeftImageProductD from '../../../assets/Details/ProductTwo/leftImageProduct.jpg'
import MiddleImageProductD from '../../../assets/Details/ProductTwo/middleImageProduct.jpg'
import ProductFrontImageD from '../../../assets/Details/ProductTwo/productFrontImage.png'
import RightImageProductD from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'
import ProductTwoC from '../../../assets/Cards/Food/productFood.png'
import BackgroundEcommerceH from '../../../assets/homes/Ecommerce/backgroundEcommerce.jpg'
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
                    location.pathname === '/homes' ? <img className='original-page-section-order-two-img-ecommerce' src="" alt="pág. original " /> :
                    location.pathname === '/details' ? <img className='original-page-section-order-two-img' src="" alt="pág. original Furniture D" /> :
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
                                            <img src="" alt="ícono carrito" />
                                        </div> :
                                        location.pathname === '/details' ?
                                        <div className='assets-icons-furniture-D'>
                                            <img src="" alt="logo marca" />
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
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-furniture-D'>
                                            <img src="" alt="Imagen izquierda silla" />  
                                        </div> :
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
                    <div className='responsive-section-order'>
                        {
                            location.pathname === '/landingPages' ? 
                            <div>
                                <img src="" alt="diseño responsivo minimalism LP 834x1194" />
                                <img src="" alt="diseño responsivo minimalism LP 390x844" />
                                <img src="" alt="diseño responsivo minimalism  LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src="" alt="diseño responsivo e-commerce H 834x1194" />
                                <img src="" alt="diseño responsivo e-commerce H 390x844" />
                                <img src="" alt="diseño responsivo e-commerce H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src="" alt="diseño responsivo Furniture D 834x1194" />
                                <img src="" alt="diseño responsivo Furniture D 390x844" />
                                <img src="" alt="diseño responsivo Furniture D 360x640" />
                            </div> :
                            location.pathname === '/forms' ? 
                            <div>
                                <img src="" alt="diseño responsivo Register F 834x1194" />
                                <img src="" alt="diseño responsivo Register F 390x844" />
                                <img src="" alt="diseño responsivo Register F 360x640" />
                            </div> :
                            <div>
                                <img src={ResponsiveFC834x1194} alt="diseño responsivo Food C 834x1194" />
                                <img src={ResponsiveFC390x844} alt="diseño responsivo Food C 390x844" />
                                <img src={ResponsiveFC360x640} alt="diseño responsivo Food C 360x640" />
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
                           <a href="" target="_blank" rel="noreferrer">
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