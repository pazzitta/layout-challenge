import IGmail from '../../assets/myHome/Icons/gmail.png'
import IGitHub from '../../assets/myHome/Icons/gitHub.png'
import ILinkedIn from '../../assets/myHome/Icons/linkedIn.png'
import './landingPagesStyle.css'
import '../baseAllViews/baseAllViews.css'

const LinkLandingPages = () => {
    return(
        <div>
            <a href="mailto:zittapaz@gmail.com" target="_blank" rel="noreferrer">
                <img className='image-links-all-views' src={IGmail} alt="Ícono Gmail" />
            </a>
            <a href="https://github.com/pazzitta/layout-challenge/blob/main/src/pages/landinPages.jsx" target="_blank" rel="noreferrer">
                <img className='image-links-all-views' src={IGitHub} alt="Ícono GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer">
                <img className='image-links-all-views' src={ILinkedIn} alt="Ícono LinkedIn" />
            </a>
        </div>
    )
}
export default LinkLandingPages;