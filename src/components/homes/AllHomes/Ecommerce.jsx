import CardEcommerce from "./Cards/CardEcommerce"
import BackgroundEcommerce from '../../../assets/homes/backgroundEcommerce.jpg'
import ProvisionalCart from '../../../assets/Cards/cartBlack.png'

const EcommerceHomes = () => {
    return(
        <div className="box-macro-Ecommerce-homes">
            <img src={BackgroundEcommerce} alt="Foto fondo" />
            <header className="box-header-Ecommerce-homes">
                <nav>
                    <div className="box-brand-and-sections-Ecommerce-homes">
                        <h1>UGMONK</h1>
                        <div>
                            <a href="">Men</a>
                            <a href="">Women</a>
                            <a href="">Objets</a>
                            <a href="">Journal</a>
                        </div>
                    </div>
                    <div className="box-sesion-and-contact-Ecommerce-homes">
                        <a href="">Login</a>
                        <a href="">Help</a>
                        <a href="">Contact Us</a>
                        <a href="">
                            <img src={ProvisionalCart} alt="Carrito" />
                        </a>
                    </div>
                </nav>
            </header>
            <div className="box-body-Ecommerce-homes">
                <nav className="box-bottom-menu-Ecommerce-homes">
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