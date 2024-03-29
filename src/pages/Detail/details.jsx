import './details.css'
import '../../components/MainPagesBase/mainPagesBoardContent.css'
import DetailName from '../../components/MainPagesBase/AllNames/detailName';
import OrganizingBoardBase from '../../components/myHome/organizingBoardBase';
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';

const Details = () => {
    return(
        <div className='order-all-mains'>
            <div className='base-illustration-component-order-details'>
                <DetailName/>
                <OrganizingBoardBase/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Details;