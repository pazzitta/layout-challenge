import './clothesDetail.css'
import { useState } from 'react'
import IconHeartBlack from '../../../assets/Details/ProductOne/iconHeartBlack.png'
import VerticalImageProduct from '../../../assets/Details/ProductOne/verticalImageProduct.jpg'
import FrontImageProduct from '../../../assets/Details/ProductOne/frontImageProduct.jpg'

const ClothesDetail = () => {
    const [onInput, setOnInput] = useState(false)
    return(
        <div className='all-page-order-product-one-detail'>
            <header className='header-order-product-one-detail'>
                <nav>
                    <div className="left-white-rectangle-nav-product-one-detail"></div>
                    <div className="brand-white-rectangle-nav-product-one-detail"><h2>BALENCIAGA</h2></div>
                    <div className="yellow-rectangle-nav-product-one-detail"></div>
                    <div className="order-main-white-rectangle-nav-product-one-detail">
                        <section>
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Women</a>
                            <a href="/">Men</a>
                            <a href="/">No gender</a>
                        </section>
                        <div>
                            <button onClick={()=>setOnInput(!onInput)}></button>
                            <a href="/"><img src={IconHeartBlack} alt="ícono corazón" /></a>
                        </div>
                    </div>
                    <div className="red-rectangle-nav-product-one-detail"></div>
                </nav>
                {
                onInput &&
                <input className='input-on-order-and-style' type="text" placeholder="Search" />        
                }
            </header>
            <main className='main-order-product-one-detail'>
                <div className='left-vertical-rectangle-main-product-one-detail'>
                    <div className='black-left-vertical-rectangle-main-product-one-detail'></div>
                </div>
                <div className="left-rectangle-order-product-image-main-product-one-detail">
                    <div>
                        <button className='previous-button-product-image-main-product-one-detail'></button>
                        <img src={VerticalImageProduct} alt="Imagen zapatilla vista uno" />
                        <button className='next-button-product-image-main-product-one-detail'></button>
                    </div>
                    <div>
                        <input type="radio" name="pag" id="" />
                        <input type="radio" name="pag" id="" />
                        <input type="radio" name="pag" id="" />
                        <input type="radio" name="pag" id="" />
                    </div>
                </div>
                <div className="middle-rectangle-order-product-image-main-product-one-detail">
                    <div className="top-gray-rectangle-middle-rectangle-main-product-one-detail"></div>
                    <section className='section-one-middle-rectangle-main-clothes-D'>
                        <ul>
                            <li>
                                <h4>Description</h4>
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias incidunt molestiae quia dolore doloremque non nam.</p>
                    </section>
                    <section className='section-two-and-three-middle-rectangle-main-clothes-D'>
                        <ul>
                            <li>
                                <h4>No gender</h4>
                            </li>
                        </ul>
                    </section>
                    <section className='section-two-and-three-middle-rectangle-main-clothes-D'>
                        <ul>
                            <li>
                                <h4>Size</h4>
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
                    <section  className='section-two-and-three-middle-rectangle-main-clothes-D' >
                        <ul>
                            <li>
                                <h4>Material: 65% polyurethane, 35% polyester</h4>
                            </li>
                        </ul>
                    </section>
                </div>               
                <div className="right-rectangle-order-product-image-main-product-one-detail">
                    <h2>TRIPLE S TRAINERS</h2>
                    <small> Lorem ipsum, dolor sit amet consectetur.</small>
                    <img src={FrontImageProduct} alt="Imagen del producto" />
                    <h3>$850</h3>
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