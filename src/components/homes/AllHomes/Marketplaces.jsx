import CardProductsOne from "./Cards/Marketplace/CardProductsOne";
import CardTestimonials from "./Cards/Marketplace/CardTestimonials";
import CardProductTwo from "./Cards/Marketplace/CardProductTwo";
import CardProductsThree from "./Cards/Marketplace/CardProductThree";
import CardProductsFour from "./Cards/Marketplace/CardProductsFour";
import IsologoMp from '../../../assets/homes/isologoMp.png'
import MagnifyingGlassMp from '../../../assets/LandingPages/lupaP.png'

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
            <div>
                <section>
                    <div>
                        <h3>CATEGORÍAS</h3>
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
                        <img src="" alt="Imagen publicitaria" />
                        <aside><img src="" alt="Publicidad 2" /></aside>
                    </div>
                </section>
                <section>
                    <section>Section1
                        <aside>
                            <img src="" alt="Publicidad 3" />
                        </aside>
                        <article>
                            <div>
                                <h3>SPECIAL PRODUCT</h3>
                            </div>
                            <CardProductsOne/>
                            <CardProductsOne/>
                            <CardProductsOne/>
                            {/* PAGINADO, dos páginas */}
                        </article>
                        <article>
                            <div>
                                <h3>TESTIMONIALS</h3>
                            </div>
                            <CardTestimonials/>
                            {/* PAGINADO, tres páginas */}
                        </article>
                        <article>
                            <div>
                                <h3>BEST ALGO</h3>
                            </div>
                            <CardProductTwo/>
                            {/* PAGINADO, tres páginas */}
                        </article>
                    </section>
                    <section>Section 2
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
                            </div><div>
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
                    </section>
                    <section>Section 3
                        <article>
                            <div>
                                <h3>BEST PRODUCT</h3>
                            </div>
                            <CardProductsOne/>
                            <CardProductsOne/>
                            <CardProductsOne/>
                            {/* PAGINADO, dos páginas */}
                        </article>
                        <aside>
                            <img src="" alt="Publicidad 5" />
                        </aside>
                        <aside>
                            <div>
                                <h3>OUR BRANDS</h3>
                            </div>
                            <img src="" alt="Publicidad 6" />
                        </aside>
                    </section>
                </section>
            </div>
            <footer>
                <header>
                    <nav>
                        <img src="" alt="ícono correo" />
                        <div>
                            <h2>JOIN OUR NEWSLETTER</h2>
                            <p>indicación de que hacer</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Enviar algo" />
                            <button>Avión de papel</button>
                        </form>
                        <div>
                            <button>Red 1</button>
                            <button>Red 2</button>
                            <button>Red 3</button>
                            <button>Red 4</button>
                        </div>
                    </nav>
                </header>
                <div>
                    <section>
                        <img src="" alt="Logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus in eius beatae.</p>
                        <div>
                            <img src="" alt="ícono 1" />
                            <img src="" alt="ícono 2" />
                            <img src="" alt="ícono 3" />
                            <img src="" alt="ícono 4" />
                        </div>
                    </section>
                    <section>
                        <h3>PRODUCT</h3>
                        <small>algo 1</small>
                        <small>algo 2</small>
                        <small>algo 3</small>
                        <small>algo 4</small>
                        <small>algo 5</small>
                        <small>algo 6</small>
                    </section>
                    <section>
                        <h3>OUR COMPANY</h3>
                        <small>algo 1</small>
                        <small>algo 2</small>
                        <small>algo 3</small>
                        <small>algo 4</small>
                        <small>algo 5</small>
                        <small>algo 6</small>
                    </section>
                    <section>
                        <h3>YOUR ACCOUNT</h3>
                        <small>algo 1</small>
                        <small>algo 2</small>
                        <small>algo 3</small>
                        <small>algo 4</small>
                        <small>algo 5</small>
                        <small>algo 6</small>
                    </section>
                    <section>
                        <h3>CONTACT INFORMATION</h3>
                        <div>
                            <img src="" alt="ícono ubicación" />
                            <small>Ubicación</small>
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
                <footer>
                    <article>
                        <div>
                            <a href="">Contact</a>
                            <a href="">Algo 2</a>
                            <a href="">Algo 3</a>
                            <a href="">Algo 4</a>
                            <a href="">Algo 5</a>
                        </div>
                        <p>Dererechos reservados ...</p>
                    </article>
                </footer>
            </footer>
        </div>
    )
}
export default MarketplacesHomes;