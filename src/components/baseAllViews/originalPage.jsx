import { useLocation } from 'react-router-dom'
import LayoutLandingPages from '../landingsPages/layoutLandinPages'
import LayoutHomes from '../homes/layoutHomes'
import LayoutDetails from '../details/layoutDetails'
import LayoutForms from '../forms/layoutForms'
import LayoutCards from '../Cards/layoutCards'

const OriginalPage = () => {

    const location = useLocation()

    return(
        <div>
            {
                location.pathname === "/landingPages" ? <LayoutLandingPages/>:
                location.pathname === "/homes" ? <LayoutHomes/>:
                location.pathname === "/details" ? <LayoutDetails/>:
                location.pathname === "/forms" ? <LayoutForms/>:
                <LayoutCards/>
            }
        </div>
    )
}
export default OriginalPage;