import './homes.css'
import '../../components/MainPagesBase/mainPagesBoardContent.css'
import OrganizingBoardBase from '../../components/myHome/organizingBoardBase'
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent'
import HomesName from '../../components/MainPagesBase/AllNames/homesName'
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection'

const Homes = () => {
    return (
        <div className='order-all-mains'>
            <div className="base-illustration-component-order-homes">
                <HomesName/>
                <OrganizingBoardBase/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Homes