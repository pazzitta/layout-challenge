import './landingPages.css'
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import LandingPageName from '../../components/landingsPages/MainPageBase/landingPagesName';
const LandingPages = () => {
    return(
        <div className="base-illustration-component-order-landin-pages">
            <LandingPageName/>
            <OrganizerBaseBoard/>
        </div>
    )
}
export default LandingPages;