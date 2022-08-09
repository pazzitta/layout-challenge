import './productOneDetail.css'
import IconHeartBlack from '../../../assets/Details/ProductOne/iconHeartBlack.png'
const ProductOneDetail = () => {
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
                <div className="rectangle-first-image">
                    <img src="" alt="Imagen zapatilla vista uno" />
                    <button>prev</button>
                    <button>Next</button>
                </div>
                <div className="container-section-two">
                    <div className="grey-rectangle"></div>
                    <setion className="container-description">
                        <ul>
                            <li>
                                <h4>Description</h4>
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias incidunt molestiae quia dolore doloremque non nam.</p>
                    </setion>
                    <div className="">
                        <ul>
                            <li>
                                <h4>Algo</h4>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h4>Talle</h4>
                            </li>
                        </ul>
                        <button>t1</button>
                        <button>t2</button>
                        <button>t3</button>
                        <button>t4</button>
                        <button>t5</button>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h4>Talle</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Nombre producto</h1>
                    <small>Descripción</small>
                    <img src="" alt="Imagen del producto" />
                    <h2>$--</h2>
                </div>
            </main>
            <footer className='footer-order-product-one-detail'>
                <div></div>
                <p>ACO TO BASKETS</p>
                <div></div>
                <div></div>
                <div></div>
            </footer>
        </div>
    )
}
export default ProductOneDetail;