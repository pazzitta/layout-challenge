import './homes.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard'
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent'
import HomesName from '../../components/MainPagesBase/homesName'
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection'

const Homes = () => {
    return (
        <div className='order-all-mains'>
            <div className="base-illustration-component-order-homes">
                <HomesName/>
                <OrganizerBaseBoard/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Homes