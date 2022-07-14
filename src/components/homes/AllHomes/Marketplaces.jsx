import CardProductsOne from "./Cards/Marketplace/CardProductsOne";
import CardTestimonials from "./Cards/Marketplace/CardTestimonials";
import CardProductTwo from "./Cards/Marketplace/CardProductTwo";

const MarketplacesHomes = () => {
    return(
        <div>
            <header>
                <nav>
                    <div>
                        <select name="" id="" placeholder="English">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                        <select name="" id="" placeholder="No sé">
                            <option value="">Option a</option>
                            <option value="">Option b</option>
                            <option value="">Option c</option>
                        </select>
                        <a href="">Sing in</a>
                    </div>
                    <div>
                        <a href="">Contact</a>
                        <a href="">No sé 1</a>
                        <a href="">No sé 2</a>
                        <a href="">No sé 3</a>
                        <a href="">New arrivals</a>
                    </div>
                </nav>
                <nav>
                    <img src="" alt="Logo" />
                    <form action="">
                        <input type="text" placeholder="Search" />
                        <button>Lupa</button>
                    </form>
                    <div>
                        <button>Corazón</button>
                        <div>
                            <button>Carrito</button>
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
                    
                    </section>
                    <section>Section 3

                    </section>
                </section>
            </div>
            <footer>

            </footer>
        </div>
    )
}
export default MarketplacesHomes;