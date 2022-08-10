import './productTwo.css'
import BrandLogo from '../../../assets/Details/ProductTwo/brandLogo.png'
import ShortMangnifyingGlass from '../../../assets/Details/ProductTwo/shortMagnifyingGlassGrey.png'
import CartGrey from '../../../assets/Details/ProductTwo/cartGrey.png'
import ProductFrontImage from '../../../assets/Details/ProductTwo/productFrontImage.png'
import ProductLeftImage from '../../../assets/Details/ProductTwo/leftImageProduct.jpg'
import ProductMiddleImage from '../../../assets/Details/ProductTwo/middleImageProduct.jpg'
import ProductRightImage from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'

const ProductTwoDetail = () => {
    return(
        <div className='order-all-page-product-two-detail'>
            <div className='container-card-product-two-detail'>
                <section className='order-card-left-section-product-two-detail'>
                    <img src={BrandLogo} alt="Logo" />
                    <div>
                        <img src={ProductFrontImage} alt="Imagen principal" />
                        <input type="radio" name="cambio-imagen" id="" />
                        <section>
                            <img src={ProductLeftImage} alt="Imagen 1" />
                            <img src={ProductMiddleImage} alt="Imagen 2" />
                            <img src={ProductRightImage} alt="Imagen 3" />
                        </section>
                    </div>
                </section>
                
               
                <section className='order-card-right-section-product-two-detail'>
                    <nav>
                        <div className='card-right-section-anchors-order-nav-product-two-detail'>
                            <a href="">Home</a>
                            <a href="">Furniture</a>
                            <a href="">Product</a>
                            <a href="">Store</a>
                        </div>
                        <div className='card-right-section-images-order-nav-product-two-detail'>
                            <div>
                                <img src={ShortMangnifyingGlass} alt="Lupa" />
                                {/* <input type="text" placeholder="Buscar"  */}
                            </div>
                            <img src={CartGrey} alt="Carrito compras" />
                        </div>
                    </nav>
                    <div>
                        <small>Algo</small>
                        <h1>Nombre producto</h1>
                        <div>
                            <img src="" alt="Estrellita ícono" />
                            <h3>Puntación</h3>
                            <p>detalle</p>
                        </div>
                        <div>
                            <input type="radio" name="color" id="" />
                            <input type="radio" name="color" id="" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo omnis error.</p>
                        <div>
                            <div>
                                <p>Algo</p>
                                <h4>--<small>algo</small></h4>
                            </div>
                            <div>
                                <p>Algo 2</p>
                                <h4>--<small>algo2</small></h4>
                            </div>
                            <div>
                                <p>Algo3</p>
                                {/* <hr/> */}
                            </div>
                        </div>
                        <h2>$--</h2>
                        <div>
                            <button>+</button>
                            <div>--</div>
                            <button>-</button>
                        </div>
                        <div>
                            <button>ADD TO CARD</button>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default ProductTwoDetail;