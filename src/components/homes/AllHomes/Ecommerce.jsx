import CardEcommerce from "./Cards/CardEcommerce"

const EcommerceHomes = () => {
    return(
        <div>
            <header>
                <img src="" alt="Foto fondo" />
                <nav>
                    <img src="" alt="Logo" />
                    <div>
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Objets</a>
                        <a href="">Jornal-no sé-</a>
                    </div>
                    <div>
                        <a href="">Login</a>
                        <a href="">Help</a>
                        <a href="">Contact Us</a>
                        <a href="">
                            <img src="" alt="Carrito" />
                        </a>
                    </div>
                </nav>
            </header>
            <div>
                <nav>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">Objets</a>
                </nav>
                <div>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                </div>
                {/* PAGINADO */}
            </div>
        </div>
    )
}
export default EcommerceHomes;