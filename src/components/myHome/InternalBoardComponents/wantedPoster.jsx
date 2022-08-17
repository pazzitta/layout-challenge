import '../../myHome/baseIllustrationStyles.css'
import MyPicture from '../../../assets/myHome/AllBoardContent/myPicture.jpg'
import LinkedInIcon from '../../../assets/myHome/AllBoardContent/linkedInBlack.png'
import GitHubIcon from '../../../assets/myHome/AllBoardContent/gitHubBlack.png'

const WantedPoster = () => {
    return(
        <div className='order-wanted-poster'>
            <div className='order-scotch-tape'>
                <div></div>
                <div></div>
            </div>
            <div className='order-and-style-base-wanted-poster'>
                <h3>WANTED</h3>
                <p>WANTED FOR THE CRIME OF SUFFERING <br />IMPOSTOR SYNDROME IN TECHNICAL INTERVIEWS</p>
                <img src={MyPicture} alt="imagen mía" />
                <article>
                    <p>claim reward at</p>
                    <a href=""><img src={LinkedInIcon} alt="iso linkedIn" /></a>
                    <a href=""><img src={GitHubIcon} alt="iso gitHub" /></a>
                </article>
            </div>

        </div>
    )
}
export default WantedPoster;