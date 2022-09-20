import DressVerticalCard from '../../../../../assets/homes/cards/dressVerticalCard.png'

const VerticalProductCard = () => {
    return(
        <div className="background-vertical-product-card-Mp-homes">
            <img src={DressVerticalCard} alt="Producto" />
            <div>
                <p>Nombre producto, y una breve descripción</p>
                <div className='box-price-vertical-product-card-Mp-homes'>
                <h5>$1200</h5>
                <small><del>$1400</del></small>
                </div>
            </div>
        </div>
    )
}
export default VerticalProductCard;