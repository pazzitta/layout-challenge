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
// import Modal from '../modal/modal'

const BaseAllViews = () => {
    // const [stateModalCreate, setStateModalCreate] = useState (false)
   
    // function handleClickModalC(e) {
    //     setStateModalCreate(!stateModalCreate);
    //   }
    
    //   const [modal, setModal] = useState(false);
    return(
        <div>
            <header>
                {/* esto tiene un condicional según la ruta... */}
                <div>
                    <h1>Landing Pages</h1>
                    {/* <h1>Homes</h1>
                    <h1>Details</h1>
                    <h1>Forms</h1>
                    <h1>Cards</h1> */}
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
                        <LinkLandingPages/>
                        <LinkHomes/>
                        <LinkDetails/>
                        <LinkForms/>
                        <LinkCards/>
                    </nav>
                    <div>
                        {/* aca van los distintos 'mains' con un condicional según la ruta */}
                        <MainLandingPages/>
                        <MainHomes/>
                        <MainDetails/>
                        <MainForms/>
                        <MainCards/>
                    </div>
                </div>
            </main>
            {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >
            
            </Modal> */}
        </div>
    )
}

export default BaseAllViews;