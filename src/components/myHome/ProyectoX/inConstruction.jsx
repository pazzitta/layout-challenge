import './inConstruction.css'
import OrganizingBoardBase from "../organizingBoardBase";
import ProyectoPName from './proyectoPName';
import BoardContentInConstruction from './boardContentInConstruction';

const InConstruction = () => {
    return(
        <div className="base-in-construction-component-order">
            <ProyectoPName/>
            <OrganizingBoardBase/>
            <BoardContentInConstruction/>
        </div>
    )
}
export default InConstruction;