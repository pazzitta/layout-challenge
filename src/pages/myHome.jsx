import '../components/myHome/myHome.css'
import FTop from '../assets/myHome/FolderTop.png'
import FLandingP from '../assets/myHome/FolderLanding.png'
import SLandingP from '../assets/myHome/SheetLandingPagesUX.png'
import FHomes from '../assets/myHome/FolderHomes.png'
import SHomes from '../assets/myHome/SheetHomesUX.png'
import FDetails from '../assets/myHome/FolderDetails.png'
import SDetails from '../assets/myHome/SheetDetailsUX.png'
import FForms from '../assets/myHome/FolderForms.png'
import SForms from '../assets/myHome/SheetFormsUX.png'
import FCards from '../assets/myHome/FolderCards.png'
import SCards from '../assets/myHome/SheetCardsUX.png'
import IGmail from '../assets/myHome/Icons/gmail.png'
import IGitHub from '../assets/myHome/Icons/gitHub.png'
import ILinkedIn from '../assets/myHome/Icons/linkedIn.png'

const MyHome = () => {
    return(
        <div className='order-my-home'>
            <header>
                <a href="/landinPages">
                    <img className="baseFolders" src={FLandingP} alt="Carpeta Landing Pages" />
                    <img className="sheetsUX" src={SLandingP} alt="Hoja UX Landing Pages" />
                    {/* <img src="" alt="" /> */}
                    <img className='folderTop' src={FTop} alt="Tapa carpeta" />
                </a>
                <a href="/homes">
                    <img className="baseFolders" src={FHomes} alt="Carpeta Homes" />
                    <img className="sheetsUX" src={SHomes} alt="Hoja UX Homes" />
                    {/* <img src="" alt="" /> */}
                    <img className='folderTop' src={FTop} alt="Tapa carpeta" />
                </a>
                <a href="/details">
                    <img className="baseFolders" src={FDetails} alt="Carpeta Details" />
                    <img className="sheetsUX" src={SDetails} alt="Hoja UX Homes" />
                    {/* <img src="" alt="" /> */}
                    <img className='folderTop' src={FTop} alt="Tapa carpeta" />
                </a>
                <a href="/forms">
                    <img className="baseFolders" src={FForms} alt="Carpeta Forms" />
                    <img className="sheetsUX" src={SForms} alt="Hoja UX Forms" />
                    {/* <img src="" alt="" /> */}
                    <img className='folderTop' src={FTop} alt="Tapa carpeta" />
                </a>
                <a href="/cards">
                    <img className="baseFolders" src={FCards} alt="Carpeta Cards" />
                    <img className="sheetsUX" src={SCards} alt="Hoja UX Cards" />
                    {/* <img src="" alt="" /> */}
                    <img className='folderTop' src={FTop} alt="Tapa carpeta" />
                </a>    
            </header>
            <main>
                <header>
                    <h1>Portfolio Maquetación</h1>
                </header>
                {/* <img src="" alt="" /> Falta la imagen  */}
            </main>
            <footer>
                <a href="mailto:zittapaz@gmail.com" ><img className="icons" src={IGmail} alt="Ícono gmail" /></a>
                <a href="https://github.com/pazzitta" target="_blank" rel="nofollow"><img className="icons" src={IGitHub} alt="Ícono GitHub" /></a>
                <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="nofollow"><img className="icons" src={ILinkedIn} alt="íÍcono linkedIn" /></a>
            </footer>
        </div>
    )
}
export default MyHome;