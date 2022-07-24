import './styleReplicateHomes.css'
import IsologoPP from '../../../assets/homes/isologoPP.png'
import TwitterIconPP from '../../../assets/homes/twitterIconPP.png'
import BehanceIconPP from '../../../assets/homes/BehanceIconPP.png'
import InstagramIconPP from '../../../assets/homes/InstagramIconPP.png'
import GitHubIconPP from '../../../assets/homes/GitHubIconPP.png'
import LinkedInIconPP from '../../../assets/homes/LinkedInIconPP.png'
import PhoneIconPP from '../../../assets/homes/phoneIconoPP.png'


const PersonalPageHome = () => {
    return(
        <div className='box-macro-personalPage-homes'>
            <nav className='vertical-nav-personalPage-homes'>
                <img className='isologo-vertical-nav-personalPage-homes' src={IsologoPP} alt="Isotipo" />
                <div className='box-ancords-vertical-nav-personalPage-homes'>
                    <a href="">
                        <img src={TwitterIconPP} alt="ícono Twitter" />
                    </a>
                    <a href="">
                        <img src={BehanceIconPP} alt="ícono 2" />
                    </a>
                    <a href="">
                        <img src={InstagramIconPP} alt="ícono 3" />
                    </a>
                    <a href="">
                        <img src={GitHubIconPP} alt="ícono 4" />
                    </a>
                    <a href="">
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
                <div className='box-intenal-body-personalPage-home'>
                <div>
                    <div>
                        <h5>Hi There,</h5>
                        <h1>I am Venissa</h1>
                        <h2>I am designer during daytime</h2>
                        <h3>& work with batman during nigths.</h3>
                        <button>Ask Me How</button>
                    </div>
                    <img src="" alt="Imagen de ella" />
                </div>
                <div>
                    <div>
                        <h6>Email</h6>
                        <p>soyunemail@gmail.com</p>
                        </div>
                    <div>
                        <h6>Phone</h6>
                        <p>----------</p>
                    </div>
                    <div>
                        <h6>Location</h6>
                        <p>Soy una dirección</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}
export default PersonalPageHome;