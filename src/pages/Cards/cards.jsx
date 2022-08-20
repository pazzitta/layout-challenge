import './cards.css'
import CardsName from '../../components/MainPagesBase/cardName';
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import AllBoardContent from '../../components/MainPagesBase/BoardContent';

const Cards = () =>{
    return(
        <div className="base-illustration-component-order-cards">
            <CardsName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Cards;