import './forms.css'
import '../../components/MainPagesBase/mainPagesBase.css'
import FormsName from '../../components/MainPagesBase/formsName';
import OrganizingBoardBase from "../../components/myHome/organizingBoardBase";
import MainPagesBoardContent from '../../components/MainPagesBase/mainPagesBoardContent';
import MyLayoutsSection from '../../components/MainPagesBase/myLayoutsSection';
const Forms = () => {
    return(
        <div>
            <div className="base-illustration-component-order-forms">
                <FormsName/>
                <OrganizingBoardBase/>
                <MainPagesBoardContent/>
            </div>
            <MyLayoutsSection/>
        </div>
    )
}
export default Forms;