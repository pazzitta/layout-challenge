import './productTwo.css'
import BrandLogo from '../../../assets/Details/ProductTwo/brandLogo.png'
import ShortMangnifyingGlass from '../../../assets/Details/ProductTwo/shortMagnifyingGlassGrey.png'
import CartGrey from '../../../assets/Details/ProductTwo/cartGrey.png'
import ProductFrontImage from '../../../assets/Details/ProductTwo/productFrontImage.png'
import ProductLeftImage from '../../../assets/Details/ProductTwo/leftImageProduct.jpg'
import ProductMiddleImage from '../../../assets/Details/ProductTwo/middleImageProduct.jpg'
import ProductRightImage from '../../../assets/Details/ProductTwo/rightImageProduct.jpg'
import StarYellow from '../../../assets/Details/ProductTwo/starYellow.png'

const FurnitureDetail = () => {
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
                    <div className='card-right-section-description-order-nav-product-two-detail'>
                        <small>Algo</small>
                        <h1>Drop type cusion chair</h1>
                        <div className='order-score-box-product-two-detail'>
                            <img src={StarYellow} alt="Estrellita ícono" />
                            <h4>8/10</h4>
                            <p>15 Reviews</p>
                        </div>
                        <div>
                            <input type="radio" name="color" id="" />
                            <input type="radio" name="color" id="" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo omnis error.amet consectetur adipisicing elit. Quo omnis error.</p>
                        <div className='box-order-quantity-product-two-detail'>
                            <div>
                                <p>Algo</p>
                                <h4>--<small>algo</small></h4>
                            </div>
                            <div>
                                <p>Algo 2</p>
                                <h4>--<small>algo2</small></h4>
                            </div>
                            <div>
                                <p><u>Algo3</u></p>
                                {/* <hr/> */}
                            </div>
                        </div>
                        <h2>$265.50</h2>
                        <div className='order-box-counter-product-two-detail'>
                            <button className='less-button-product-two-detail'>-</button>
                            <div>1</div>
                            <button className='plus-button-product-two-detail'>+</button>
                        </div>
                        <div>
                            <button className='add-button-product-two-detail'>ADD TO CARD</button>
                            <button className='buy-button-product-two-detail'>BUY NOW</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default FurnitureDetail;