import './inConstruction.css'
import OrganizerBaseBoard from "../organizerBaseBoard";
import PortfolioName from './portfolioName';
// import BoardContentInConstruction from './boardContentInConstruction';

const InConstruction = () => {
    return(
        <div className="base-in-construction-component-order">
            <PortfolioName/>
            <OrganizerBaseBoard/>
            {/* <BoardContentInConstruction/> */}
        </div>
    )
}
export default InConstruction;