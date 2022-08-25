import './productOneDetail.css'
import IconHeartBlack from '../../../assets/Details/ProductOne/iconHeartBlack.png'
import VerticalImageProduct from '../../../assets/Details/ProductOne/verticalImageProduct.jpg'
import FrontImageProduct from '../../../assets/Details/ProductOne/frontImageProduct.jpg'

const ClothesDetail = () => {
    return(
        <div className='all-page-order-product-one-detail'>
            <header className='header-order-product-one-detail'>
                <nav>
                    <div className="left-white-rectangle-nav-product-one-detail"></div>
                    <div className="brand-white-rectangle-nav-product-one-detail"><h2>BALENCIAGA</h2></div>
                    <div className="yellow-rectangle-nav-product-one-detail"></div>
                    <div className="order-main-white-rectangle-nav-product-one-detail">
                        <section>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Women</a>
                            <a href="">Men</a>
                            <a href="">Otro3</a>
                        </section>
                        <div>
                            <button></button>
                            {/* <input type="text" placeholder="input búsqueda" />         */}
                            <a href=""><img src={IconHeartBlack} alt="Icono 2" /></a>
                        </div>
                    </div>
                    <div className="red-rectangle-nav-product-one-detail"></div>
                </nav>
            </header>
            <main className='main-order-product-one-detail'>
                <div className='left-vertical-rectangle-main-product-one-detail'>
                    <div className='black-left-vertical-rectangle-main-product-one-detail'></div>
                </div>
                <div className="left-rectangle-order-product-image-main-product-one-detail">
                    <button className='previous-button-product-image-main-product-one-detail'></button>
                    <img src={VerticalImageProduct} alt="Imagen zapatilla vista uno" />
                    <button className='next-button-product-image-main-product-one-detail'></button>
                </div>
                <div className="middle-rectangle-order-product-image-main-product-one-detail">
                    <div className="top-grey-rectangle-middle-rectangle-main-product-one-detail"></div>
                    <section>
                        <ul>
                            <li>
                                <h4>Description</h4>
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias incidunt molestiae quia dolore doloremque non nam.</p>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <h4>Algo</h4>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <h4>Talle</h4>
                            </li>
                        </ul>
                        <div>
                            <button>t1</button>
                            <button>t2</button>
                            <button>t3</button>
                            <button>t4</button>
                            <button>t5</button>
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <h4>Talle</h4>
                            </li>
                        </ul>
                    </section>
                </div>               
                <div className="right-rectangle-order-product-image-main-product-one-detail">
                    <h1>NOMBRE PRODUCTO</h1>
                    <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
                    <img src={FrontImageProduct} alt="Imagen del producto" />
                    <h2>$850</h2>
                </div>
                <div className="right-right-rectangle-order-product-image-main-product-one-detail">
                    <button></button>
                </div>
            </main>
            <footer className='footer-order-product-one-detail'>
                <div className="left-white-rectangle-footer-product-one-detail"></div>
                <div className="blue-rectangle-footer-product-one-detail"></div>
                <div className="text-rectangle-footer-product-one-detail">
                    <p>ACO TO BASKETS</p>
                </div>
                <div className="yellow-rectangle-footer-product-one-detail"></div>
                <div className="right-white-rectangle-footer-product-one-detail"></div>
                <div className="right-white-no-line-rectangle-footer-product-one-detail"></div>
            </footer>
        </div>
    )
}
export default ClothesDetail;