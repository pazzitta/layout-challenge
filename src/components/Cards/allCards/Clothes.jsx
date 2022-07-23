import './styleReplicateCards.css'
import ProductOne from '../../../assets/Cards/productOneCard.png'
import  CartBlack from '../../../assets/Cards/cartBlack.png'

const ClothesCard = () => {
    return(
        <div className='box-macro-clothes-card'>
            <div className='box-image-product-clothes-card'>
                <img className='image-product-clothes-card' src={ProductOne} alt="Imagen producto" />
            </div>
            <div className='box-text-product-clothes-card'>
                <h3 className='titel-product-clothes-card'><i>SOY EL NOMBRE DEL PRODUCTO</i></h3>
                <p className='description-product-clothes-card'>Soy el modelo</p>
                <button>ADD TO CART
                    <img src={CartBlack} alt="Ícono carrito de compras" />
                </button>
                <p>$--</p>
            </div>
        </div>
    )
}
export default ClothesCard;