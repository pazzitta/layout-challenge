import './inConstruction.css'
import imageInC from '../../../assets/myHome/Aiporfolio.png'
const BoardContentInConstruction = () => {
    return(
        <div className="all-board-content-proyect-p">
           <div className="header-proyect-p" >
            <div></div>
            <div>
            <div className='poster-come-back-base-and-order-proyect-p'>
                    <a href='/'>
                        <h2>VOLVER AL INICIO</h2>
                    </a>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
           </div>
           <div className="ux-designe-proyect-p">
            <img src={imageInC} alt="" />
           </div>
        </div>
    )
}
export default BoardContentInConstruction;