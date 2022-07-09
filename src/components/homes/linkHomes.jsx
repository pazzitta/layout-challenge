import IGmail from '../../assets/myHome/Icons/gmail.png'
import IGitHub from '../../assets/myHome/Icons/gitHub.png'
import ILinkedIn from '../../assets/myHome/Icons/linkedIn.png'

const LinkHomes = () => {
    return(
        <div>
            <a href="mailto:zittapaz@gmail.com" target="_blank" rel="noreferrer">
                <img src={IGmail} alt="Ícono Gmail" />
            </a>
            <a href="https://github.com/pazzitta/layout-challenge/blob/main/src/pages/homes.jsx" target="_blank" rel="noreferrer">
                <img src={IGitHub} alt="Ícono GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/paz-zitta/" target="_blank" rel="noreferrer">
                <img src={ILinkedIn} alt="Ícono LinkedIn" />
            </a>
        </div>
    )
}
export default LinkHomes;