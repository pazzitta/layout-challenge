import './layoutMinimalism.css'
import BackgrounImageAll from '../../../assets/LandingPages/Minimalism/backgroundImage1.png'

import LogoShopfy from '../../../assets/LandingPages/Minimalism/shopifylogo.png'

const LayoutMinimalism = () => {
    return(
        <div className="box-macro-minimalist-LP">
            <div className="internal-box-minimalist-LP">
                <header className="header-box-minimalist-LP">
                    <a href="">
                        <img className='logo-shopfy-minimalism-LP' src={LogoShopfy} alt="Logo de Shopify"/>
                    </a>
                </header>
                <main className="main-box-minimalist-LP">
                    <h1 className='titel-main-minimalism-LP'>Sell products online with Shopify</h1>
                    <p className='description-main-minimalism-LP'>Everything you need to sell online. Trusted by over 800,000 businesses worldwide</p>
                    <form className='input-box-main-minimalism-LP'>
                        <input className='input-main-minimalism-LP' type="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" size="30"  name="email" id="email" placeholder='Enter your email address' required />
                        <button className='button-main-minimalism-LP'>Start free trial</button>
                    </form>
                    <p className='description-small-main-minimalis-LP'><small>Try Shopify free for 14 days, no credit required. By entering your email, you agree to receive marketing emails from Shopify</small></p>
                </main>
                <footer className='composition-footer-minimalism-LP'>
                    <img className='image-minimalism-LP' src={BackgrounImageAll} alt="Ilustración landing page"/>
                </footer>
            </div>
        </div>
    )
}
export default LayoutMinimalism;