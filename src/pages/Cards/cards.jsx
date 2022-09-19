import './cards.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import CardsName from '../../components/MainPagesBase/cardName';
import OrganizingBoardBase from "../../components/myHome/organizingBoardBase";
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';

const Cards = () =>{
    return(
        <div className='order-all-mains'>
            <div className="base-illustration-component-order-cards">
                <CardsName/>
                <OrganizingBoardBase/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Cards;