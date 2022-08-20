import './homes.css'
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard'
import AllBoardContent from '../../components/MainPagesBase/BoardContent'
import HomesName from '../../components/MainPagesBase/homesName'

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