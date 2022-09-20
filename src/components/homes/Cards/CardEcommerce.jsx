import './styleCardsHomes.css'
import ProductCardEcommerce from '../../../assets/homes/T-shirtCardE.png'

const CardEcommerce = () => {
    return(
        <div className="background-Ecommerce-card">
            <img src={ProductCardEcommerce} alt="Imagen producto" />
            <section>
                <p><b>Round neckline t-shirt</b><small>&#65288;OZ&#65289;</small></p>
                <p><b>$20</b></p>
            </section>
        </div>
    )
}
export default CardEcommerce;