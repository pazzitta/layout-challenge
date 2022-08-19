import './landingPages.css'
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import LandingPageName from '../../components/landingsPages/MainPagesBase/landingPagesName';
import AllBoardContent from '../../components/landingsPages/MainPagesBase/BoardContent';
const LandingPages = () => {
    return(
        <div className="base-illustration-component-order-landin-pages">
            <LandingPageName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default LandingPages;