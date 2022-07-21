import './styleReplicateLandingPage.css'
import BackgrounImage from '../../../assets/LandingPages/backgroundImage.png'
import LogoShopfy from '../../../assets/LandingPages/logo.png'

const Minimalism = () => {
    return(
        <div className="box-macro-minimalist-LP">
            <div className='background-color-minimalist-LP'></div>
            <div className="internal-box-minimalist-LP">
                <header className="header-box-minimalist-LP">
                    <a href="">
                        <img className='logo-shopfy-minimalism-LP' src={LogoShopfy} alt="Logo de Shopify"/>
                    </a>
                </header>
                <main className="main-box-minimalist-LP">
                    <h1 className='titel-main-minimalism-LP'>Sell products online with Shopify</h1>
                    <p className='description-main-minimalism-LP'>Everything you need to sell online. Trusted by over 800,000 businesses worlwide</p>
                    <form className='input-box-main-minimalism-LP'>
                        <input className='input-main-minimalism-LP' type="email" name="" id="" />
                        <button className='button-main-minimalism-LP'>Start free trial</button>
                    </form>
                    <p className='description-small-main-minimalis-LP'><small>Try Shopify free for 14 days, no credit requiered. By entering your email, you agree to receive marketing emails from Shopify</small></p>
                </main>
                <footer className='composition-footer-minimalism-LP'>
                    <div className='background-white-minimalism-LP'></div>
                    <img className='image-minimalism-LP' src={BackgrounImage} alt="Ilustración landing page"/>
                </footer>
                
                {/* className="footer-box-minimalist-LP" */}
            </div>
        </div>
    )
}
export default Minimalism;