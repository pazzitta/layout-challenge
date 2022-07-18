import MainLandingPages from "../landingsPages/mainLandinPages";
import LinkLandingPages from "../landingsPages/LinksLandinPages";
import MainHomes from "../homes/mainHomes";
import LinkHomes from "../homes/linkHomes";
import MainDetails from "../details/mainDetails";
import LinkDetails from "../details/linkDetails";
import MainForms from "../forms/mainForms";
import LinkForms from "../forms/linkForms";
import MainCards from "../Cards/mainCards";
import LinkCards from "../Cards/linkCards";
import {useLocation} from 'react-router-dom'
import OriginalPage from "./originalPage";
import './baseAllViews.css'
// import Modal from '../modal/modal'

// VER SI LOS CONDICIONALES LOS TERMINO CON NULL

const BaseAllViews = () => {
    // const [stateModalCreate, setStateModalCreate] = useState (false)
   
    const location = useLocation ()
    // function handleClickModalC(e) {
    //     setStateModalCreate(!stateModalCreate);
    //   }
    
    //   const [modal, setModal] = useState(false);
    return(
        <div>
            <header className="macro-name-box-all-views">
                <div className="box-name-all-views">
                    {
                        location.pathname === "/landingPages"? <h1 className="page-names-all-views">Landing Pages</h1>: 
                        location.pathname === "/homes"? <h1 className="page-names-all-views">Homes</h1>:
                        location.pathname === "/details"? <h1 className="page-names-all-views">Details</h1>:
                        location.pathname === "/forms"? <h1 className="page-names-all-views">Forms</h1> : 
                        <h1 className="page-names-all-views">Cards</h1>          
                    }
                </div>
            </header>
            
            <main>
                <div className="door-frame-all-views">
                    <nav className="internal-door-frame-all-views">
                        <div className="stained-glass-door-all-views">
                            <a href="/">
                                <img src="" alt="" />
                            </a>
                        </div>
                        <div className="letter-box-all-views"></div>
                        <div className="link-box-all-views">
                            {
                            location.pathname === "/landingPages"? <LinkLandingPages/>:
                            location.pathname === "/homes"? <LinkHomes/>:
                            location.pathname === "/details"? <LinkDetails/>:
                            location.pathname === "/forms"? <LinkForms/> :
                            <LinkCards/>
                            }                       
                        </div>
                    </nav>
                    {/* EL MODAL ES LO QUE HAY DENTRO DE LOS MAIN... */}
                </div>
                
                <div  className="stained-glass-border-all-views">
                    <div className="internal-stained-glass-border-all-views">
                    <div className="glass-roof-all-views"></div>
                        <OriginalPage/>
                    <div>
                        <div className="stained-glass-wall-all-views"></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>

                </div>
            </main>
            {/* CADA MODAL TIENE 2 COMPNENTES,LA IMAGEN ORIGINAL Y LA REPLICA, LA REPLICA VA A TENER DENTRO INFO DEL REPO Y UNA PEQUEÑA DOC
            <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >
            </Modal> */}
        </div>
    )
}

export default BaseAllViews;