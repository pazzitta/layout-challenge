import './forms.css'
import FormsName from '../../components/MainPagesBase/formsName';
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import AllBoardContent from "../../components/MainPagesBase/BoardContent";
const Forms = () => {
    return(
        <div className="base-illustration-component-order-forms">
            <FormsName/>
            <OrganizerBaseBoard/>
            <AllBoardContent/>
        </div>
    )
}
export default Forms;