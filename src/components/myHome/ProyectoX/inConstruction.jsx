import './inConstruction.css'
import OrganizingBoardBase from "../organizingBoardBase";
import ProyectoXName from './proyectoXName';
// import BoardContentInConstruction from './boardContentInConstruction';

const InConstruction = () => {
    return(
        <div className="base-in-construction-component-order">
            <ProyectoXName/>
            <OrganizingBoardBase/>
            {/* <BoardContentInConstruction/> */}
        </div>
    )
}
export default InConstruction;