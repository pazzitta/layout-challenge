import './details.css'
import DetailName from '../../components/MainPagesBase/detailName';
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard';
import AllBoardContent from '../../components/MainPagesBase/BoardContent';

const Details = () => {
    return(
        <div className='base-illustration-component-order-details'>
            <DetailName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Details;