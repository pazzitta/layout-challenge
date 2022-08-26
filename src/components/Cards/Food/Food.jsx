import './food.css'
import ProductFood from '../../../assets/Cards/Food/productFood.png'
import { useState } from 'react'

const FoodCard = () => {
    const [openParagraph, SetopenParagraph] = useState(false)

    const handleClick = (e) =>{
        SetopenParagraph(!openParagraph)
    } 

    return(
        <div className='caja-para-ver'>
            <div className='box-macro-food-card'>
                <div className='box-image-product-food-card'>
                    <img className='image-product-food-card' src={ProductFood} alt="Imagen del producto" />
                    <div className='box-button-food-card'>
                        <button 
                        className='button-¡-food-card'
                        onClick={() => SetopenParagraph(!openParagraph)}
                        >¡</button>
                    </div>
                        {
                            openParagraph &&
                            <small className='product-description-open-button'>Lorem ipsumdolor sit amet, consectetur adipisicing elit. Neque consequatur quos quod perspiciatis doloremque!</small>
                        }
                </div>
                <div className='box-text-product-food-card'>
                    <div className='box-price-and-g-food-card'>
                        <p>$---</p>
                        <p>---g</p>
                    </div>
                    <div className='box-name-and-buttonAdd-food-card'>
                        <h2 className='product-name-food-card'>Soy el nombre</h2>
                        <button className='button-add-food-card'>Add</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default FoodCard;