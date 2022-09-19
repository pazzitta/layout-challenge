import './landingPages.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import OrganizingBoardBase from "../../components/myHome/organizingBoardBase";
import LandingPageName from '../../components/landingsPages/landingPagesName';
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';
const LandingPages = () => {
    return(
        <div className='order-all-mains'>
            <div className="base-illustration-component-order-landin-pages">
                <LandingPageName/>
                <OrganizingBoardBase/>
                <MainPagesBoardContent/>
            </div>                
            <MyLayoutsSection/>
        </div>
    )
}
export default LandingPages;