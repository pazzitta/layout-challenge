import './clothesCard.css'
import ProductOne from '../../../assets/Cards/productOneCard.png'
// import CartBlack from '../../../assets/Cards/Clothes/cartBlack.png'

const ClothesCardOn = () => {
    return(
        <div className='caja-para-ver'>
        <div className='box-macro-clothes-card'>
            <div className='box-image-product-clothes-card'>
                <img className='image-product-clothes-card' src={ProductOne} alt="Imagen producto" />
            </div>
            <div className='box-text-product-clothes-card'>
                <h3 className='titel-product-clothes-card'><i>ZAPATILLAS RUNFALCON</i></h3>
                <p className='description-product-clothes-card'><i>Core black | Core black</i></p>
                <button className='button-add-cart-clothes-card'>ADD TO CART</button>
                <p>$185</p>
            </div>
        </div>

        </div>
    )
}
export default ClothesCardOn;