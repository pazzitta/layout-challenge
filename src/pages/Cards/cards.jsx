import './cards.css'
import CreateName from "../../components/myHome/create";
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import AllBoardContent from "../../components/landingsPages/MainPagesBase/BoardContent";

const Cards = () =>{
    return(
        <div className="base-illustration-component-order-cards">
            <CreateName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Cards;