import './wantedPoster.css'
import MyPicture from '../../../../assets/myHome/AllBoardContent/myPicture.jpg'
import LinkedInIcon from '../../../../assets/myHome/AllBoardContent/linkedInBlack.png'
import GitHubIcon from '../../../../assets/myHome/AllBoardContent/gitHubBlack.png'

const WantedPoster = () => {
    return(
        <div className='order-wanted-poster'>
            <div className='order-and-style-base-wanted-poster'>
                <div>
                    <h3>WANTED</h3>
                    <p>SE BUSCA POR EL CRIMEN DE SUFRIR EL SÍNDROME DEL IMPOSTOR Y ARRUINAR SU PRIMERA ENTREVISTA IT</p>
                    <img src={MyPicture} alt="imagen mía" />
                    <article>
                        <p>reclamar recompensa</p>
                        <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="iso linkedIn" /></a>
                        <a href="https://github.com/pazzitta" target="_blank" rel="noreferrer"><img src={GitHubIcon} alt="iso gitHub" /></a>
                    </article>
                </div>
                <div className='order-scotch-tape'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default WantedPoster;