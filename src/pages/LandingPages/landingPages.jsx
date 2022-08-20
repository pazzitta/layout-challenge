import './landingPages.css'
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import LandingPageName from '../../components/MainPagesBase/landingPagesName';
import AllBoardContent from '../../components/MainPagesBase/BoardContent';
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