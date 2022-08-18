import './mainPagesBase.css'
import RowOfPencils from '../../myHome/InternalBoardComponents/rowOfPencils';

const LPBoardContent = () => {
    return(
        <div className='order-all-board-content-LP'>
            <div className='original-pages-order-and-styles'>
                <div>
                    <div></div>
                    <h2>Original pages</h2>
                    <div></div>
                </div>
                <div>
                    <div>
                        <div></div>
                        <h3>Background video</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Minimalism</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Organic Shapes</h3>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <h3>Advertising</h3>
                        <div></div>
                    </div>                
                </div>
            </div>
            <div className='my-replicas-order-and-styles'></div>
            <div className='pencils-size-LP'>
                <RowOfPencils/>
            </div>
        </div>
    )
}
export default LPBoardContent;