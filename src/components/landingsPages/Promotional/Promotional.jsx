import './promotional.css'
import ImagePromotional from '../../../assets/LandingPages/Promotional/imageP.jpg'
import IsoPromotional from '../../../assets/LandingPages/Promotional/isoPromotion.jpg'
// import LupaPromotional from '../../../assets/LandingPages/Promotional/lupaP.png'
import { useState } from 'react';


const Promotional= () => {
    const [menuOn, setMenuOn] = useState (false)
    const [onInput, setOnInput] = useState(false)
    return(
        <div className='box-macro-promotional-LP'>
            <img className='image-promotional-LP' src={ImagePromotional} alt="Imagen diseño interior"/>
            <header className='box-header-promotional-LP'>
                <div className='box-ancords-header-promotional-LP'>
                    <img className='isologo-header-promotional-LP' src={IsoPromotional} alt="Logo" />
                    <a className='ancords-header-organic-shapes-LP' href="">Home</a>
                    <a className='ancords-header-organic-shapes-LP' href="">Interiors</a>
                    <a className='ancords-header-organic-shapes-LP' href="">About</a>
                </div>
                <div className='box-search-header-promotional-LP'>
                    <div>
                        <button onClick={()=>setOnInput(!onInput)} className='button-magnifying-glass-promotional-LP'></button>
                        <div className='navicon-two-line-order-and-styles' onMouseUp={() => setMenuOn(!menuOn)}></div> 
                    </div> 
                   
                    <nav className='ul-navicon-two-lines-order-and-style'>
                            {
                                menuOn &&
                                <ul>
                                    <li><a href="/">Minimalist</a></li>
                                    <li><a href="/">Industrial</a></li>
                                    <li><a href="/">Nordic</a></li>
                                </ul>
                            }
                    </nav>              
                </div>
                    {
                        onInput &&
                        <input className='input-on-promotional-order-and-style' type="text" placeholder="Search" />
                    }
            </header>
            <main className='box-main-promotional-LP'>
                    <h1 className='titel-main-promotional-LP'>Interior design for you</h1>
                    <p className='description-main-promotional-LP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum odit ipsam eveniet saepe, quibusdam neque, quia iusto fuga.</p>
                    <div className='box-button-main-promotional-LP'>
                        <button className='button-main-promotional-LP'>EXPLORE</button>
                    </div>
            </main>
            <footer className='box-footer-promotional-LP'>
                <div className='box-one-footer-promotional-LP'>
                    <h5 className='titel-footer-promotional-LP'>Single price</h5>
                    <p className='description-footer-promotional-LP'>Lorem ipsum dolor sit.Repellendus, officia?</p>
                </div>
                <div className='box-two-footer-promotional-LP' >
                    <h5 className='titel-footer-promotional-LP'>Adaptation</h5>
                    <p className='description-footer-promotional-LP'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='box-three-footer-promotional-LP'>
                    <h6>NEXT FACTORY</h6>
                </div>
            </footer>
            
        </div>
    )
}
export default Promotional;