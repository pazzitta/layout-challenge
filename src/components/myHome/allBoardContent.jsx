import './baseIllustrationStyles.css'
import RowOfPencils from './InternalBoardComponents/rowOfPencils';

const AllBoardContent = () => {
    return (
        <div className="order-all-board-content">
            <div className='section-one'></div>
            <div className='section-two'></div>
            <div className='section-three'>
                <RowOfPencils/>
            </div>

        </div>
    )
}
 export default AllBoardContent;