import './homes.css'
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard'
import AllBoardContent from '../../components/landingsPages/MainPagesBase/BoardContent'
import HomesName from '../../components/landingsPages/MainPagesBase/homesName'
const Homes = () => {
    return (
        <div className="base-illustration-component-order-homes">
            <HomesName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Homes