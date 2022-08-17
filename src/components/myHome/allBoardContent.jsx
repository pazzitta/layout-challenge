import './baseIllustrationStyles.css'
import RowOfPencils from './InternalBoardComponents/rowOfPencils';
import BlackboardCalendar from './InternalBoardComponents/blackboardCalendar';
import WantedPoster from './InternalBoardComponents/wantedPoster';

const AllBoardContent = () => {
    return (
        <div className="order-all-board-content">
            <div className='section-one'></div>
            <div className='section-two'>
                <section>
                    <BlackboardCalendar/>
                    <div></div>
                </section>
                <section>
                    
                </section>
                <section></section>
                <section></section>
                <section>
                    <WantedPoster/>
                </section>
            </div>
            <div className='section-three'>
                <RowOfPencils/>
            </div>

        </div>
    )
}
 export default AllBoardContent;