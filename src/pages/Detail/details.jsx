import './details.css'
import DetailName from '../../components/MainPagesBase/detailName';
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard';
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';

const Details = () => {
    return(
        <div className='base-illustration-component-order-details'>
            <DetailName/>
            <OrganizerBaseBoard/>
            <MainPagesBoardContent/>
        </div>
    )
}
export default Details;