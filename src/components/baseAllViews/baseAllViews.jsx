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
            <header>
                <div>
                    {
                        location.pathname === "/landingPages"? <h1>Landing Pages</h1>: 
                        location.pathname === "/homes"? <h1>Homes</h1>:
                        location.pathname === "/details"? <h1>Details</h1>:
                        location.pathname === "/forms"? <h1>Forms</h1> : 
                        <h1>Cards</h1>          
                    }
                </div>
            </header>
            <main>
                <div>
                    <nav>
                        <div>
                            <a href="/">
                                <img src="" alt="" />
                            </a>
                        </div>
                        {
                            location.pathname === "/landingPages"? <LinkLandingPages/>:
                            location.pathname === "/homes"? <LinkHomes/>:
                            location.pathname === "/details"? <LinkDetails/>:
                            location.pathname === "/forms"? <LinkForms/> :
                            <LinkCards/>
                        }                       
                    </nav>
                    {/* EL MODAL ES LO QUE HAY DENTRO DE LOS MAIN... */}
                    <div>
                        {
                            location.pathname === "/landingPages"? <MainLandingPages/>:
                            location.pathname === "/homes"? <MainHomes/>:
                            location.pathname === "/details"? <MainDetails/>:
                            location.pathname === "/forms"? <MainForms/>:
                            <MainCards/>                  
                        }
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