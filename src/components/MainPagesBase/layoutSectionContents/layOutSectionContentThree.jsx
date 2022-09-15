import './layoutSectionContent.css'
import {useLocation} from 'react-router-dom'
import OPOrganicShapesLP from '../../../assets/LandingPages/LayoutSectionContent/OPOrganicShapesLP.jpg'
import OPClothesC from '../../../assets/Cards/LayoutSectionContent/OPClothesC.jpg'
import CartBlackIconC from '../../../assets/Cards/Clothes/cartBlack.png'
import CartWhiteIconC from '../../../assets/Cards/Clothes/cartWhite.png'
import ProductClotheCart from '../../../assets/Cards/Clothes/productOneCard.png'
import BackgroundImageOrganicShapesLP from '../../../assets/LandingPages/OrgenicShapes/backgroundImageOS1.png'
import ResponsiveCC834x1194 from '../../../assets/Cards/Clothes/responsiveCC834x1194.jpg'
import ResponsiveCC390x844 from '../../../assets/Cards/Clothes/responsiveCC390x844.jpg'
import ResponsiveCC360x640 from '../../../assets/Cards/Clothes/responsiveCC360x640.jpg'
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
                    location.pathname === '/landingPages' ? <img width="65%" src={OPOrganicShapesLP} alt="pág. original Organic shapes  LP" /> :
                    location.pathname === '/homes' ? <img src="" alt="pág. original  H" /> :
                    location.pathname === '/details' ? <img src="" alt="pág. original D" /> :
                    location.pathname === '/forms' ? <img src="" alt="pág. original  F" /> :
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
                                        <div className='assets-icons-minimalist-h'>
                                            <img src="" alt="Isotipo página" />
                                            <img src="" alt="ícono twitter" />
                                            <img src="" alt="ícono Behance" />
                                            <img src="" alt="ícono Instagram" />
                                            <img src="" alt="ícono GitHub" />
                                            <img src="" alt="ícono LinkedIn" /> 
                                            <img src="" alt="ícono Phone rosa" /> 
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-icons-clothes-D'>
                                            <img src="" alt="Ícono lupa" />
                                            <img src="" alt="ícono flecha previo" />
                                            <img src="" alt="ícono next" /> 
                                            <img src="" alt="ícono corazón" /> 
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <div className='assets-icons-login-f'>
                                            <img src="" alt="Isotipo persona" />
                                            <img src="" alt="ícono tick ok" />
                                            <img src="" alt="ícono Candado" />
                                            <img src="" alt="ícono Ojo bloqueado" />
                                            <img src="" alt="ícono inicio sesión" />
                                            <img src="" alt="ícono Facebook" /> 
                                            <img src="" alt="ícono Google +" />
                                            <img src="" alt="ícono Google +" />
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
                                        <h4>none</h4> :
                                        location.pathname === '/homes' ? 
                                        <div className='assets-multimedia-personal-page-H'>
                                            <img src="" alt="backgroun image PP" />
                                        </div> :
                                        location.pathname === '/details' ? 
                                        <div className='assets-multimedia-clothes-D'>
                                            <img src="" alt="imagen frontal producto" />
                                            <img src="" alt="imagen vertical producto" />
                                        </div> :
                                        location.pathname === '/forms' ? 
                                        <div className='assets-multimedia-login-F'>
                                            <img src="" alt="backgroun image Login F" />
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
                    <div className='responsive-section-order'>
                        {
                            location.pathname === '/landingPages' ? 
                            <div>
                                <img src="" alt="diseño responsivo background video LP 834x1194" />
                                <img src="" alt="diseño responsivo background video LP 390x844" />
                                <img src="" alt="diseño responsivo background video LP 360x640" />
                            </div> :
                            location.pathname === '/homes' ? 
                            <div>
                                <img src="" alt="diseño responsivo personal page H 834x1194" />
                                <img src="" alt="diseño responsivo personal page H 390x844" />
                                <img src="" alt="diseño responsivo personal page H 360x640" />
                            </div> :
                            location.pathname === '/details' ? 
                            <div>
                                <img src="" alt="diseño responsivo clothes D 834x1194" />
                                <img src="" alt="diseño responsivo clothes D 390x844" />
                                <img src="" alt="diseño responsivo clothes D 360x640" />
                            </div> :
                             location.pathname === '/forms' ? 
                             <div>
                                 <img src="" alt="diseño responsivo login F 834x1194" />
                                 <img src="" alt="diseño responsivo login F 390x844" />
                                 <img src="" alt="diseño responsivo login F 360x640" />
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
                           <a href="https://github.com/pazzitta/layout-challenge/tree/main/src/components/landingsPages/OrganicShapes" target="_blank" rel="noreferrer">
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
                    location.pathname === '/landingPages' ? <h2>SOY EL GIF DE EN CONSTRUCCIÓN</h2> : 
                    location.pathname === '/homes' ? <h2>SOY EL GIF DE EN CONSTRUCCIÓN</h2> :
                    location.pathname === '/details' ? <h2>SOY EL GIF DE EN CONSTRUCCIÓN</h2> :
                    location.pathname === '/forms' ? <h2>SOY EL GIF DE EN CONSTRUCCIÓN</h2> :
                    <h2>SOY EL GIF DE EN CONSTRUCCIÓN</h2>
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