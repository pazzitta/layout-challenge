import './backgroundVideo.css'
import Video from '../../../assets/LandingPages/backgroundV.mp4'
import PlayVideoIconLP from '../../../assets/LandingPages/BackgrondVideo/playVideoIcon.png'
import DownArrowIconLP from '../../../assets/LandingPages/BackgrondVideo/downArrowIcon.png'


const BackgroundVideo = () => {
    return (
        <div className='box-macro-landing-pages-BgV'>
            <video autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className='content-box-landing-pages-BgV'>
                <div>
                    <h2>BUILDIN PLACES THAT INSPIRE<font color='red'>.</font></h2>
                    {/* EL DE ARRIBA ES UN H1 PERO COMO ESTOY DENTRO DE OTRA PÁG. PREFIERO NO USARLO PARA QUE NO HAYA MÁS DE UNO */}
                    <h5>WASHINGTON, DC</h5>
                    <img src={PlayVideoIconLP} alt="ícono de play" />
                    <img src={DownArrowIconLP} alt="ícono flecha" />
                </div>
                <footer className='footer-box-landing-pages-BgV'>
                    <div>
                        <h2 className='brand-name-landing-pages-BgV'>DITO<font color='red'>.</font></h2>
                        <select name="" id="">
                            <option selected></option>
                            <option>Home</option>
                            <option>About</option>
                            <option>Services</option>
                            <option>Contact</option>
                        </select>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default BackgroundVideo;