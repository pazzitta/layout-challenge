import './homes.css'
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard'
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent'
import HomesName from '../../components/MainPagesBase/homesName'

const Homes = () => {
    return (
        <div className="base-illustration-component-order-homes">
            <HomesName/>
            <OrganizerBaseBoard/>
            <MainPagesBoardContent/>
        </div>
    )
}
export default Homes