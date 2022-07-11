
const ProductOneDetail = () => {
    return(
        <div>
            <header>
                <nav>
                    <div className="white-rectangle-one">
                        <img src="" alt="Logo" />
                    </div>
                    <div className="yellow-rectangle"></div>
                    <div className="white-rectangle-two">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Otro</a>
                        <a href="">Otro2</a>
                        <a href="">Otro3</a>
                        <button>Icono lupa</button>
                        <input type="text" placeholder="input búsqueda" />        
                        <a href="">
                            <img src="" alt="Icono 2" />
                        </a>
                    </div>
                </nav>
                <div className="red-rectangle"></div>
            </header>
            <main>
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
        </div>
    )
}
export default ProductOneDetail;