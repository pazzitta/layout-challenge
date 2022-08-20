import './backgroundVideo.css'
import Video from '../../../assets/LandingPages/backgroundV.mp4'

const BackgroundVideo = () => {
    return (
        <div className='box-macro-landing-pages-BgV'>
            <video autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className='content-box-landing-pages-BgV'>
                <div>
                    <h1>BUILDIN PLACES THAT INSPIRE<font color='red'>.</font></h1>
                    <h5>WASHINGTON, DC</h5>
                    <div>SOY LA FLECHISTA...NO SÉ QUE ETIQUETA SOY AÚN</div>
                </div>
                <footer className='footer-box-landing-pages-BgV'>
                    <h2 className='brand-name-landing-pages-BgV'>DITO<font color='red'>.</font></h2>
                    <select name="" id="">
                        <option selected></option>
                        <option>Home</option>
                        <option>About</option>
                        <option>Services</option>
                        <option>Contact</option>
                    </select>
                </footer>
            </div>
        </div>
    )
}
export default BackgroundVideo;