import './backgroundVideo.css'
import Video from '../../../assets/LandingPages/BackgrondVideo/backgroundV.mp4'
import PlayVideoIconLP from '../../../assets/LandingPages/BackgrondVideo/playVideoIcon.png'
import DownArrowIconLP from '../../../assets/LandingPages/BackgrondVideo/downArrowIcon.png'
import { useState } from 'react'

const BackgroundVideo = () => {
    
    const [menuOn, setMenuOn] = useState (false)

    return (
        <div className='box-macro-landing-pages-BgV'>
            <video width='100%' autoPlay loop muted src={Video} type="video/mp4"></video>
            <div className='content-box-landing-pages-BgV'>
                <div>
                    <h2>BUILDING PLACES THAT INSPIRE<font color='red'>.</font></h2>
                    {/* EL DE ARRIBA ES UN H1 PERO COMO ESTOY DENTRO DE OTRA PÁG. PREFIERO NO USARLO PARA QUE NO HAYA MÁS DE UNO */}
                    <h5>WASHINGTON, DC</h5>
                    <img src={PlayVideoIconLP} alt="ícono de play" />
                    <img src={DownArrowIconLP} alt="ícono flecha" />
                </div>
                <footer className='footer-box-landing-pages-BgV'>
                    <div>
                        <h2 className='brand-name-landing-pages-BgV'>DITO<font color='red'>.</font></h2>
                        <nav className='ul-navicon-three-lines-order-and-style'>
                            {
                                menuOn &&
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            }
                        </nav>
                        <div className='navicon-three-line-order-and-styles'
                        onMouseUp={() => setMenuOn(!menuOn)}
                        >&#9776;</div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default BackgroundVideo;