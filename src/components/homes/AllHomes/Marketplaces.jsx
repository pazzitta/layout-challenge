import VerticalProductCard from "./Cards/Marketplace/VerticalProductCard";
import CardTestimonials from "./Cards/Marketplace/CardTestimonials";
import CardProductTwo from "./Cards/Marketplace/CardProductTwo";
import CardProductsThree from "./Cards/Marketplace/CardProductThree";
import CardProductsFour from "./Cards/Marketplace/CardProductsFour";
import IsologoMp from '../../../assets/homes/isologoMp.png'
import MagnifyingGlassMp from '../../../assets/LandingPages/lupaP.png'
import IconLetterMp from '../../../assets/homes/icons/iconLetterMp.png'
import IconTwitterMp from '../../../assets/homes/icons/iconTwitterMp.png'
import IconUbicationMp from '../../../assets/homes/icons/iconUbicationMp.png'
import IconCardOneMp from '../../../assets/homes/icons/iconCardOneMp.png'
import IconCardTwoMp from '../../../assets/homes/icons/iconCardTwoMp.png'
import ImageOneLeft from '../../../assets/homes/Marketplace/imageOneLeft.jpg'

const MarketplacesHomes = () => {
    return(
        <div className="box-macro-marketplaces-homes">
            <header className="box-header-marketplace-homes">
                <nav className="top-nav-header-marketplace-homes">
                    <div className="box-left-header-marketplace-homes">
                        <select name="" id="" >
                            <option value="">English</option>
                            <option value="">Español</option>
                            <option value="">Portugués</option>
                        </select>
                        <select name="" id="" placeholder="No sé">
                            <option value="">Option a</option>
                            <option value="">Option b</option>
                            <option value="">Option c</option>
                        </select>
                        <a href="">Sing in</a>
                    </div>
                    <div className="box-right-header-marketplace-homes">
                        <a className="ancords-box-right-marketplace-homes" href="">Contact</a>
                        <a className="ancords-box-right-marketplace-homes" href="">No sé 1</a>
                        <a className="ancords-box-right-marketplace-homes" href="">No sé 2</a>
                        <a className="ancords-box-right-marketplace-homes" href="">No sé 3</a>
                        <a className="last-ancord-right-header-marketplace-homes" href="">New arrivals</a>
                    </div>
                </nav>
                <nav className="botton-nav-header-marketplace-homes">
                    <img src={IsologoMp} alt="Logo" />
                    <form action="">
                        <input type="text" placeholder="Search" />
                        <button></button>
                    </form>
                    <div className="box-right-botton-right-nav-header-marketplace-homes">
                        <button></button>
                        <div>
                            <button></button>
                            <p>CART</p>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="box-macro-body-marketplace-homes">
                <div className="left-box-body-marketplace-homes">
                    <section>
                        <div>
                            <h3>! CATEGORÍAS</h3>
                            <details>
                                <summary>Categoría 1</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a> 
                            </details>
                            <details>
                                <summary>Categoría 2</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a>
                            </details>
                            <details>
                                <summary>Categoría 3</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a> 
                            </details>
                            <details>
                                <summary>Categoría 4</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a> 
                            </details>
                            <details>
                                <summary>Categoría 5</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a>
                            </details>
                            <details>
                                <summary>Categoría 6</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a>
                            </details>
                            <details>
                                <summary>Categoría 7</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a> 
                            </details>
                            <details>
                                <summary>Categoría 8</summary>
                                <a href="">Sub cat. 1</a>
                                <a href="">Sub cat. 2</a>
                                <a href="">Sub cat. 3</a>
                                <a href="">Sub cat. 4</a>
                                <a href="">Sub cat. 5</a>
                            </details>
                        </div>
                    </section>
                    <aside><img className="position-image-left-box-body-marketplace-homes" src={ImageOneLeft} alt="Publicidad 1 box left" /></aside>
                    <section>
                        <article>
                            <div>
                                <h3>! SPECIAL PRODUCT</h3>
                            </div>
                            <div className="order-card-special-product-marketplace-homes">
                            <VerticalProductCard/>
                            <VerticalProductCard/>
                            <VerticalProductCard/>
                            </div>
                            <div className="cbox-paginated-special-product-marketplace-homes">
                                <input type="radio" name="pages" id="" />
                                <input type="radio" name="pages" id="" />
                            </div>  
                            {/* PAGINADO, dos páginas */}
                        </article>
                    </section>
                    <section>
                        <article>
                            <div>
                                <h3>! TESTIMONIALS</h3>
                            </div>
                            <div className="order-card-testimonial-marketplace-homes" >
                                <CardTestimonials/>
                            </div>
                            <div className="box-paginated-special-product-marketplace-homes">
                                <input type="radio" name="testimonial" id="" />
                                <input type="radio" name="testimonial" id="" />
                                <input type="radio" name="testimonial" id="" />
                            </div> 
                            {/* PAGINADO, tres páginas */}
                        </article>
                    </section>
                    <section>
                        <article>
                            <div>
                                <h3>! BEST ALGO</h3>
                            </div>
                            <CardProductTwo/>
                            {/* PAGINADO, tres páginas */}
                        </article>
                    </section>               
                </div>


                <div className="box-center-body-marketplace-homes">
                    <img src="" alt="Imagen main publicitaria" />
                    <nav>
                        <div>
                            <a href="">FEATURED</a>
                            <a href="">LATEST</a>
                        </div>
                        <div>
                            <a href=""><img src="" alt="ícono 1" /></a>
                            <a href=""><img src="" alt="ícono 2" /></a>
                        </div>
                    </nav>
                    <section>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                        <CardProductsThree/>
                    </section>
                    <article>
                        <div>
                            <a href="">
                                <img src="" alt="ícono Nave espacial" />
                                <h6>Algo algo 1</h6>
                                <p>SubAlgo 1</p>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="" alt="ícono manoslibres" />
                                <h6>Algo algo 2</h6>
                                <p>Subalgo 2</p>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="" alt="ícono alcancía" />
                                <h6>Algo algo 3</h6>
                                <p>Subalgo 3</p>
                            </a>
                        </div>
                    </article>
                    <nav>
                        <div>
                            <a href="">WOMEN</a>
                        </div>
                        <div>
                            <a href=""><img src="" alt="ícono 1" /></a>
                            <a href=""><img src="" alt="ícono 2" /></a>
                            <a href=""><img src="" alt="ícono 3" /></a>
                            <a href=""><img src="" alt="ícono 4" /></a>
                        </div>
                    </nav>
                    <section>
                        <aside>
                            <img src="" alt="Publicidad 4" />
                        </aside>
                        <section>
                            <nav>
                                <a href=""></a>
                                <a href=""></a>
                                <a href=""></a>
                                <a href=""></a>
                            </nav>
                            <div>
                                <CardProductsThree/>
                                <CardProductsThree/>
                                <CardProductsThree/> 
                            </div>
                        </section>                    
                    </section>
                    <section>
                        <nav>
                            <a href="">NEWS</a>
                            <div>
                                <a href="">
                                    <img src="" alt="Ícono 1" />
                                </a>
                                <a href="">
                                    <img src="" alt="ícono 2" />
                                </a>
                            </div>
                        </nav>
                        <CardProductsFour/>
                        <CardProductsFour/>
                        <CardProductsFour/>
                    </section>                         
                </div>

                <div className="box-right-body-marketplace-homes">
                    <aside>
                        <img src="" alt="Publicidad 1 box-right-body" />
                    </aside>
                    <article>
                            <div>
                                <h3>BEST PRODUCT</h3>
                            </div>
                            <VerticalProductCard/>
                            <VerticalProductCard/>
                            <VerticalProductCard/>
                            {/* PAGINADO, dos páginas */}
                    </article>
                    <aside>
                        <img src="" alt="Publicidad 2 box-right-body " />
                    </aside>
                    <aside>
                        <div>
                            <h3>OUR BRANDS</h3>
                        </div>
                        <img src="" alt="Publicidad 6" />
                    </aside>
                </div>
            </div>
            <footer className="box-macro-footer-marketplace-homes">
                <header>
                    <nav>
                        <img src={IconLetterMp} alt="ícono correo" />
                        <div className="box-description-header-footer-marketplace-homes">
                            <h2>JOIN OUR NEWSLETTER</h2>
                            <p>indicación de que hacer holi holi holi</p>
                        </div>
                        <form action="" className="order-form-header-footer-marketplace-homes">
                            <input type="text" placeholder="Enviar algo" />
                            <div><button></button></div> 
                        </form>
                        <div className="box-buttons-header-footer-marketplace-homes">
                            <button><img src={IconUbicationMp} alt="" /></button>
                            <button><img src={IconTwitterMp} alt="" /></button>
                            <button><img src={IconUbicationMp} alt="" /></button>
                            <button><img src={IconTwitterMp} alt="" /></button>
                        </div>
                    </nav>
                </header>
                <div className="box-body-footer-marketplace-homes">
                    <section className="order-section-left-body-footer-marketplace-homes">
                        <img src={IsologoMp} alt="Logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus in eius beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus in eius beatae</p>
                        <div>
                            <img src={IconCardOneMp} alt="ícono 1" />
                            <img src={IconCardTwoMp} alt="ícono 2" />
                            <img src={IconCardOneMp} alt="ícono 3" />
                            <img src={IconCardTwoMp} alt="ícono 4" />
                        </div>
                    </section>
                    <div className="order-section-right-body-footer-marketplace-homes">
                    <section>
                        <h3>PRODUCT</h3>
                        <div>
                            <small>algo 1</small>
                            <small>algo 2</small>
                            <small>algo 3</small>
                            <small>algo 4</small>
                            <small>algo 5</small>
                            <small>algo 6</small>
                        </div>
                    </section>
                    <section>
                        <h3>OUR COMPANY</h3>
                        <div>
                            <small>algo 1</small>
                            <small>algo 2</small>
                            <small>algo 3</small>
                            <small>algo 4</small>
                            <small>algo 5</small>
                            <small>algo 6</small>
                        </div>
                    </section>
                    <section>
                        <h3>YOUR ACCOUNT</h3>
                        <div>
                            <small>algo 1</small>
                            <small>algo 2</small>
                            <small>algo 3</small>
                            <small>algo 4</small>
                            <small>algo 5</small>
                            <small>algo 6</small>
                        </div>
                    </section>
                    <section>
                        <h3>CONTACT INFORMATION</h3>
                        <div>
                            <img src={IconUbicationMp} alt="ícono ubicación" />
                            <p>Ubicación</p>
                        </div>
                        <div>
                            <img src="" alt="ícono teléfono" />
                            <small>Teléfono</small>
                        </div>
                        <div>
                            <img src="" alt="ícono 3" />
                            <small>Algo 3</small>
                        </div>
                        <div>
                            <img src="" alt="ícono email" />
                            <small>Email</small>
                        </div>
                    </section>

                    </div>
                </div>
                <footer className="order-footer-footer-marketplace-homes">
                        <div>
                            <a href="">Contact</a>
                            <a href="">Algo 2</a>
                            <a href="">Algo 3</a>
                            <a href="">Algo 4</a>
                            <a href="">Algo 5</a>
                        </div>
                        <p>Dererechos reservados ...</p>
                </footer>
            </footer>
        </div>
    )
}
export default MarketplacesHomes;