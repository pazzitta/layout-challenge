import './myHome.css'
import CreateName from '../../components/myHome/createName';
import OrganizerBaseBoard from '../../components/myHome/organizerBaseBoard';
import AllBoardContent from '../../components/myHome/allBoardContent';

const MyHome = () => {
    return(
        <div className='base-illustration-component-order'>
            <CreateName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default MyHome;