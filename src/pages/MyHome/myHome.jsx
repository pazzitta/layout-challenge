import './myHome.css'
import CreateName from '../../components/myHome/createName';
import OrganizingBoardBase from '../../components/myHome/organizingBoardBase';
// import AllBoardContent from '../../components/myHome/allBoardContent';

const MyHome = () => {
    return(
        <div className='base-illustration-component-order'>
            <CreateName/>
            <OrganizingBoardBase/>
            {/* <AllBoardContent/> */}
        </div>
    )
}
export default MyHome;