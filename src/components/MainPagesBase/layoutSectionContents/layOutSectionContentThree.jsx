import './layoutSectionContent.css'
import {useLocation} from 'react-router-dom'
import OPOrganicShapesLP from '../../../assets/LandingPages/LayoutSectionContent/OPOrganicShapesLP.jpg'
import OPMarketplaceH from '../../../assets/homes/LayoutSectionContent/OPMarketplaceH.jpg'
import OPClothesC from '../../../assets/Cards/LayoutSectionContent/OPClothesC.jpg'
import OPNewsD from '../../../assets/Details/LayoutSectionContent/OPNewsD.jpg'
import OPCheckOutF from '../../../assets/Forms/LayoutSectionContent/OPCheckOutF.jpg'
import CartBlackIconC from '../../../assets/Cards/Clothes/cartBlack.png'
import CartWhiteIconC from '../../../assets/Cards/Clothes/cartWhite.png'
import CardIconWCheckOutF from '../../../assets/Forms/CheckOut/iconCardWhite.png'
import LogoMarketplaceH from '../../../assets/homes/Marketplace/isologoMp.png'
import MagnifyingGlassWhiteH from '../../../assets/homes/Marketplace/iconMagnifyingGlassMP.png'
import HeartIconWhiteH from '../../../assets/homes/Marketplace/iconHeartM.png'
import CartIconWhiteH from '../../../assets/homes/Marketplace/iconCartWhiteMP.png'
import LetterIconWhiteH from '../../../assets/homes/Marketplace/iconLetterMp.png'
import PaperPlaneIconWhiteH from '../../../assets/homes/Marketplace/iconPaperPlaneMp.png'
import FacebookIconBlackH from '../../../assets/Forms/Register/iconFacebookBlack.png'
import TwitterBlackIconH from '../../../assets/Forms/ContactUs/iconTwitterBlack0.png'
import LocationBlackIconH from '../../../assets/homes/Marketplace/iconUbicationMp2.png'
import InstagramBlackIconH from '../../../assets/Forms/ContactUs/iconInstagramBlack.png'
import CardOneIconH from '../../../assets/homes/Marketplace/iconCardOneMp.png'
import CardTwoIconH from '../../../assets/homes/Marketplace/iconCardTwoMp.png'
import LocationIconWhiteH from '../../../assets/homes/Marketplace/iconUbicationWhiteMp.png'
import PhoneIconWhiteH from '../../../assets/homes/Marketplace/iconPhoneWhiteMp.png'
import EmailIconWhiteH from '../../../assets/homes/Marketplace/iconEmailWhiteMp.png'

import ProductClotheCart from '../../../assets/Cards/Clothes/productOneCard.png'
import BackgroundImageOrganicShapesLP from '../../../assets/LandingPages/OrgenicShapes/backgroundImageOS1.png'
import RoomImageCheckOutF from '../../../assets/Forms/CheckOut/imageRoom.jpg'

import ResponsiveCC834x1194 from '../../../assets/Cards/Clothes/responsiveCC834x1194.jpg'
import ResponsiveCC390x844 from '../../../assets/Cards/Clothes/responsiveCC390x844.jpg'
import ResponsiveCC360x640 from '../../../assets/Cards/Clothes/responsiveCC360x640.jpg'
import GifResponsive from '../../../assets/myHome/responsiveGif.gif'
import GifLayout from '../../../assets/myHome/layoutGif.gif'
import GifLayoutT from '../../../assets/myHome/layoutGifT.gif'
// import ClothesCard from '../../Cards/Clothes/ClothesCard'
import IGitHub from '../../../assets/myHome/Icons/IconGitHubWhite.png'

const LayoutSectionContentThree = () => {
    const location = useLocation()

    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order-three'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>PÁGINA ORIGINAL</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {
                    location.pathname === '/landingPages' ? <img className='original-page-section-order-three-img-normal' src={OPOrganicShapesLP} alt="pág. original Organic shapes  LP" /> :
                    location.pathname === '/homes' ? <img className='original-page-section-order-three-img-big' src={OPMarketplaceH} alt="pág. original Marketplace  H" /> :
                    location.pathname === '/details' ? <img width='23.5%' src={OPNewsD} alt="pág. original News D" /> :
                    location.pathname === '/forms' ? <img className='original-page-section-order-three-img-big' src={OPCheckOutF} alt="pág. original CheckOut F" /> :
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
                                        <h4>none</h4> :
                                        location.pathname === '/homes' ? 
                                        <div className='assets-icons-marketplace-H'>
                                            <img src={LogoMarketplaceH} alt="Isologo marca" />
                                            <img src={MagnifyingGlassWhiteH} alt="ícono lupa blanca" />
                                            <img src={HeartIconWhiteH} alt="ícono Corazón" />
                                            <img src={CartIconWhiteH} alt="ícono Carrito de compras" />
                                            <img src={LetterIconWhiteH} alt="ícono Sobre correo" />
                                            <img src={PaperPlaneIconWhiteH} alt="ícono Avión de papel" /> 
                                            <img src={FacebookIconBlackH} alt="ícono Facebook negro" />
                                            <img src={TwitterBlackIconH} alt="ícono Twitter negro" />
                                            <img src={LocationBlackIconH} alt="ícono Localización negro" /> 
                                            <img src={InstagramBlackIconH} alt="ícono Instagram negro" />
                                            <img src={CardOneIconH} alt="ícono Tarjeta de crédito 1" />
                                            <img src={CardTwoIconH} alt="ícono Tarjeta de crédito 2" />
                                            <img src={LocationIconWhiteH} alt="ícono localización blanco" />
                                            <img src={PhoneIconWhiteH} alt="ícono teléfono blanco" />
                                            {/* <img src="" alt="ícono no sé " />  */}
                                            <img src={EmailIconWhiteH} alt="ícono Correo blanco" />  
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-icons-clothes-D'>
                                            <img src="" alt="Ícono lupa" />
                                            <img src="" alt="ícono flecha previo" />
                                            <img src="" alt="ícono next" /> 
                                            <img src="" alt="ícono corazón" /> 
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <img width='40%' src={CardIconWCheckOutF} alt="Ícono tarjeta de crédito" /> :
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
                                        <h4>none</h4> :
                                        location.pathname === '/homes' ? 
                                        <h4>...</h4> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-clothes-D'>
                                            <img src="" alt="imagen frontal producto" />
                                            <img src="" alt="imagen vertical producto" />
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <img width='50%' src={RoomImageCheckOutF} alt="imagen habitación Check Out F" /> :
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
                                        location.pathname === '/landingPages' ? <img width="60%" src={BackgroundImageOrganicShapesLP} alt="ilustración Organic Shapes LP" /> :
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
                    <div className='responsive-section-order-gif'>
                        {
                            location.pathname === '/landingPages' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo  LP 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo  LP 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo  H 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo H 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src={GifResponsive} alt="diseño responsivo D 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo  D 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo  D 360x640" />
                            </div> :
                             location.pathname === '/forms' ? 
                             <div>
                                 <img src={GifResponsive} alt="diseño responsivo F 834x1194" />
                                 <img src={GifResponsive} alt="diseño responsivo F 390x844" />
                                 <img src={GifResponsive} alt="diseño responsivo F 360x640" />
                             </div> :
                             <div>
                                <img src={GifResponsive} alt="diseño responsivo Clothes C 834x1194" />
                                <img src={GifResponsive} alt="diseño responsivo clothes C 390x844" />
                                <img src={GifResponsive} alt="diseño responsivo clothes C 360x640" />
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
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/OrganicShapes" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                           location.pathname === '/homes' ? 
                           <a href="" target="_blank" rel="noreferrer">
                            <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                           </a>:
                            location.pathname === '/details' ?
                            <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/details/News" target="_blank" rel="noreferrer">
                                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
                            </a>:
                           location.pathname === '/forms' ?
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/forms/CheckOut" target="_blank" rel="noreferrer">
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
                    location.pathname === '/landingPages' ? <img width="55%" src={GifLayout} alt='gif Working'></img> : 
                    location.pathname === '/homes' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    location.pathname === '/details' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    location.pathname === '/forms' ? <img width="55%" src={GifLayout} alt='gif Working'></img> :
                    <img width="55%" src={GifLayout} alt='gif Working'></img>
                    // <div>
                    //     <div className='clothes-card-order-section-content-one'>
                    //             <ClothesCard/>
                    //             <ClothesCard/>
                    //             <ClothesCard/>
                    //     </div>
                    //     {
                    //         cardOffOn&&
                    //         <div>

                    //         </div>
                    //     }
                    // </div>
                }
            </section>

        </div>
    )
}
export default LayoutSectionContentThree;