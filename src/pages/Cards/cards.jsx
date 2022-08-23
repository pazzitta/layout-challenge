import './cards.css'
import CardsName from '../../components/MainPagesBase/cardName';
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';

const Cards = () =>{
    return(
        <div className="base-illustration-component-order-cards">
            <CardsName/>
            <OrganizerBaseBoard/>
            <MainPagesBoardContent/>
        </div>
    )
}
export default Cards;