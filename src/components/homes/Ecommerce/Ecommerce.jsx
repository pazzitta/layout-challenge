import './ecommerce.css'
import { useState } from 'react'
import CardEcommerce from "../Cards/CardEcommerce"
import CartWhiteH from '../../../assets/homes/Ecommerce/cartWhiteH.png'

const EcommerceHomes = () => {
    
    const [naviconEOn, setNaviconEOn] = useState (false)
    return(
        <div className="box-macro-Ecommerce-homes">
            <header className="box-header-Ecommerce-homes">
            <div className='navicon-Ecommerce-order-and-styles'
                 onMouseUp={() => setNaviconEOn(!naviconEOn)}>&#9776;</div>
                <nav>
                    <div className="box-brand-and-sections-Ecommerce-homes">
                        <h2>UGMONK</h2>
                        <div>
                            <a href="/">Men</a>
                            <a href="/">Women</a>
                            <a href="/">Objets</a>
                            <a href="/">Journal</a>
                        </div>
                    </div>
                    <div className="box-sesion-and-contact-Ecommerce-homes">
                        <a href="/">Login</a>
                        <a href="/">Help</a>
                        <a href="/">Contact Us</a>
                        <a href="/">
                            <img src={CartWhiteH} alt="Carrito" />
                        </a>
                    </div>
                    {
                        naviconEOn &&
                         <article className='navicon-Ecommerce-less-601px'>
                            <a href="/">Men</a>
                            <a href="/">Women</a>
                            <a href="/">Objets</a>
                            <a href="/">Journal</a>
                            <a href="/">Help</a>
                            <a href="/">Contact Us</a>
                         </article>
                    }
                </nav>
            </header>
            <p className='image-text-order-and-style'>New collection <br/><a href="/">See more +</a></p>
            <div className="box-body-Ecommerce-homes">
                <nav className="box-bottom-menu-Ecommerce-homes">
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Objets</a>
                </nav>
                <div className="box-all-card-Ecommerce-homes">
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                </div>
            </div>
        </div>
    )
}
export default EcommerceHomes;