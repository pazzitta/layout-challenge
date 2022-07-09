import MainLandingPages from "../landingsPages/mainLandinPages";
import LandingPages from "../../pages/landinPages";
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
                        <LandingPages/>
                    </nav>
                    <div>
                        {/* aca van los distintos 'mains' con un coandicional según la ruta */}
                        <MainLandingPages/>
                    </div>
                </div>
            </main>
            {/* <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >
            <CreateProduct/>
            </Modal> */}
        </div>
    )
}

export default BaseAllViews;