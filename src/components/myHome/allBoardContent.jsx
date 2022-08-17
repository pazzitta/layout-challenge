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
                <section>
                    <div className='order-note'>
                        <div className='order-note-scotch-tape'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='hotpink-note-background'>
                            <p>“La lógica te llevará de la A a la Z; la imaginación te llevará a todas partes.“ Albert Einstein</p>
                        </div>
                    </div>
                    <div className='order-note'>
                        <div className='order-note-scotch-tape'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='hotpink-note-background'>
                            <p>No sé aún...</p>
                        </div>
                    </div>
                </section>
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