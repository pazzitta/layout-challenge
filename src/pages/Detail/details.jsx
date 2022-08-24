import './details.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import DetailName from '../../components/MainPagesBase/detailName';
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard';
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';

const Details = () => {
    return(
        <div className='order-all-mains'>
            <div className='base-illustration-component-order-details'>
                <DetailName/>
                <OrganizerBaseBoard/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Details;