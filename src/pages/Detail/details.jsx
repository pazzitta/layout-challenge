import './details.css'
import CreateName from '../../components/myHome/create';
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard';
import AllBoardContent from '../../components/landingsPages/MainPagesBase/BoardContent';

const Details = () => {
    return(
        <div className='base-illustration-component-order-details'>
            <CreateName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Details;