import './forms.css'
import FormsName from '../../components/MainPagesBase/formsName';
import OrganizerBaseBoard from "../../components/myHome/organizerBaseBoard";
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
const Forms = () => {
    return(
        <div className="base-illustration-component-order-forms">
            <FormsName/>
            <OrganizerBaseBoard/>
            <MainPagesBoardContent/>
        </div>
    )
}
export default Forms;