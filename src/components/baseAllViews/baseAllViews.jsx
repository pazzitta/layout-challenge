import { useState } from "react";
import LinkLandingPages from "../landingsPages/LinksLandinPages";
import LinkHomes from "../homes/linkHomes";
import LinkDetails from "../details/linkDetails";
import LinkForms from "../forms/linkForms";
import LinkCards from "../Cards/linkCards";
import {useLocation} from 'react-router-dom'
import OriginalPage from "./originalPage";
import Mannequin from '../../assets/myHome/mannequinAllViews.png'
import './baseAllViews.css'
import Modal from '../modal/modal'
import BackgroundVideo from "../landingsPages/layoutsToReplicate/BackgroundVideo";

// VER SI LOS CONDICIONALES LOS TERMINO CON NULL

const BaseAllViews = () => {
    
    // const [stateModalCreate, setStateModalCreate] = useState (false)
    const location = useLocation ()
    
    // function handleClickModalC(e) {
    //     setStateModalCreate(!stateModalCreate);
    //   }
    
    // //   const [modal, setModal] = useState(false);
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
            
            <main className="main-base-all-views">
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
                        <div className="stained-glass-wall-all-views"></div>
                        <div className="base-stained-glass-all-views"></div>
                    </div>
                    <img  className="mannequin-all-views" src={Mannequin} alt="Maniquí" />

                </div>
            </main>
            {/* CADA MODAL TIENE 2 COMPONENTES,LA IMAGEN ORIGINAL Y LA REPLICA, LA REPLICA VA A TENER DENTRO INFO DEL REPO Y UNA PEQUEÑA DOC */}
            
        </div>
    )
}

export default BaseAllViews;