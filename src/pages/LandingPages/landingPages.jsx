import './landingPages.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import LandingPageName from '../../components/landingsPages/landingPagesName';
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';
const LandingPages = () => {
    return(
        <div className='order-all-mains'>
            <div className="base-illustration-component-order-landin-pages">
                <LandingPageName/>
                <OrganizerBaseBoard/>
                <MainPagesBoardContent/>
            </div>                
            <MyLayoutsSection/>
        </div>
    )
}
export default LandingPages;