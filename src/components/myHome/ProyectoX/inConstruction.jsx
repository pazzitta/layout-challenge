import './inConstruction.css'
import OrganizerBaseBoard from "../organizerBaseBoard";
import ProyectoXName from './proyectoXName';
// import BoardContentInConstruction from './boardContentInConstruction';

const InConstruction = () => {
    return(
        <div className="base-in-construction-component-order">
            <ProyectoXName/>
            <OrganizerBaseBoard/>
            {/* <BoardContentInConstruction/> */}
        </div>
    )
}
export default InConstruction;