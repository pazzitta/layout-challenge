import './styleCardsHomes.css'
import ProductCardEcommerce from '../../../../assets/homes/T-shirtCardE.png'

const CardEcommerce = () => {
    return(
        <div className="background-Ecommerce-card">
            <img src={ProductCardEcommerce} alt="Imagen producto" />
            <section>
                <p><b>Nombre porducto</b><small>&#65288;algo1&#65289;</small></p>
                <p><b>$--</b></p>
            </section>
        </div>
    )
}
export default CardEcommerce;