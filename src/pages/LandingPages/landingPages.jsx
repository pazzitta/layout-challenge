import './landingPages.css'
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import LandingPageName from '../../components/landingsPages/MainPageBase/landingPagesName';
import LPBoardContent from '../../components/landingsPages/MainPageBase/LPBoardContent';
const LandingPages = () => {
    return(
        <div className="base-illustration-component-order-landin-pages">
            <LandingPageName/>
            <OrganizerBaseBoard/>
            <LPBoardContent/>
        </div>
    )
}
export default LandingPages;