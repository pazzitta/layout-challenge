import './personalPage.css'
import IsotipoPP from '../../../assets/homes/PersonaPage/isotipoPP.png'
import TwitterIconPP from '../../../assets/homes/PersonaPage/twitterIconPP.png'
import BehanceIconPP from '../../../assets/homes/PersonaPage/BehanceIconPP.png'
import InstagramIconPP from '../../../assets/homes/PersonaPage/InstagramIconPP.png'
import GitHubIconPP from '../../../assets/homes/PersonaPage/GitHubIconPP.png'
import LinkedInIconPP from '../../../assets/homes/PersonaPage/LinkedInIconPP.png'
import PhoneIconPP from '../../../assets/homes/PersonaPage/phoneIconoPP.png'
import BackgroundImagePP from '../../../assets/homes/PersonaPage/backgroundImagePP.jpg'

const PersonalPageHome = () => {
    return(
        <div className='box-macro-personalPage-homes'>
            <nav className='vertical-nav-personalPage-homes'>
                <img className='isologo-vertical-nav-personalPage-homes' src={IsotipoPP} alt="Isotipo" />
                <div className='box-ancords-vertical-nav-personalPage-homes'>
                    <a href="https://github.com/pazzitta" target="_blank" rel="noreferrer">
                        <img src={TwitterIconPP} alt="ícono Twitter" />
                    </a>
                    <a href="https://www.behance.net/pazzitta" target="_blank" rel="noreferrer">
                        <img src={BehanceIconPP} alt="ícono 2" />
                    </a>
                    <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer">
                        <img src={InstagramIconPP} alt="ícono 3" />
                    </a>
                    <a href="https://github.com/pazzitta" target="_blank" rel="noreferrer">
                        <img src={GitHubIconPP} alt="ícono 4" />
                    </a>
                    <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer">
                        <img src={LinkedInIconPP} alt="ícono 5" />
                    </a>
                </div>
            </nav>
            <div className='box-body-personalPage-homes'>
                <nav className='horizontal-nav-personalPage-homes'>
                    <div className='box-ancords-horizontal-nav-personalPage-homes'>
                        <a href="">portfolio</a>
                        <a href="">about me</a>
                        <a href="">my blog</a>
                        <a href="">reviews</a>
                        <a href="">contact me</a>
                    </div>
                    <div className='box-phone-horizontal-nav-personalPage-homes'>
                        <img src={PhoneIconPP} alt="ícono telefono" />
                        <a href="tel:3536272883">Call me</a>
                    </div>
                </nav>
                <div className='box-intenal-body-personalPage-homes'>
                    <div className='box-data-and-image-personalPage-homes'>
                        <div className='box-data-body-personalPage-homes'>
                            <h5>Hi There,</h5>
                            <h1>I am Ven<font color='#de2d49'>i</font>ssa</h1>
                            <h2>I am designer during daytime</h2>
                            <h3>& work with batman during nights.</h3>
                            <button>Ask Me How</button>
                        </div>
                        <div className='box-background-image-personalPage-homes'>
                            <img className='backgroun-image-personalPage-homes' src={BackgroundImagePP} alt="Imagen de ella" />
                        </div>
                    </div>
                    <div className='box-footer-personalPage-homes'>
                        <div>
                            <h6>Email</h6>
                            <p>soyunemail@gmail.com</p>
                            </div>
                        <div>
                            <h6>Phone</h6>
                            <p>+54 11 12345678</p>
                        </div>
                        <div>
                            <h6>Location</h6>
                            <p> Avenida Siempreviva 742</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalPageHome;