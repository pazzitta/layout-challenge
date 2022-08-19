import './forms.css'
import CreateName from "../../components/myHome/create";
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import AllBoardContent from "../../components/landingsPages/MainPagesBase/BoardContent";
const Forms = () => {
    return(
        <div className="base-illustration-component-order-forms">
            <CreateName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Forms;