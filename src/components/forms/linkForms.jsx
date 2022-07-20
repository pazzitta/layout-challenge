import IGmail from '../../assets/myHome/Icons/gmail.png'
import IGitHub from '../../assets/myHome/Icons/gitHub.png'
import ILinkedIn from '../../assets/myHome/Icons/linkedIn.png'
import '../baseAllViews/baseAllViews.css'

const LinkForms = () => {
    return(
        <div>
            <a href="mailto:zittapaz@gmail.com" target="_blank" rel="noreferrer">
                <img src={IGmail} alt="Ícono Gmail" className='image-links-all-views' />
            </a>
            <a href="https://github.com/pazzitta/layout-challenge/blob/main/src/pages/forms.jsx" target="_blank" rel="noreferrer">
                <img src={IGitHub} alt="Ícono GitHub" className='image-links-all-views' />
            </a>
            <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer">
                <img src={ILinkedIn} alt="Ícono LinkedIn" className='image-links-all-views' />
            </a>
        </div>
    )
}
export default LinkForms;