import './layoutFolder.css'
import PapersTop from '../../../../assets/myHome/AllBoardContent/papersTop.png'
import PaperUx from '../../../../assets/myHome/AllBoardContent/SheetHomesUX.png'

const LayoutFolder = () => {
    return(
        <div className='box-layout-folder'>
            <div className='box-back-folder'>
                <div className='back-folde-order'>
                    <div className='flap-folder-order-and-style'></div>                
                    <div className='base-folder-style'></div>
                </div>
                <div className='front-folde-order'>
                    <div className='flap-front-folder-order-and-style'>
                        <div>
                            <div></div>
                        </div>
                    </div>                
                    <div className='base-front-folder-style'></div>
                </div>
            </div>
            <img className='paper-ux-order' src={PaperUx} alt="hoja UX para la carpeta de maquetación" />
            <div className='box-fron-folder'>
                <div className='front-front-cover-folde-order'>
                    <div className='flap-front-front-folder-order-and-style'></div>                
                    <div className='base-front-front-folder-style'></div>
                </div>
                <div className='box-paper-markets'>
                    <img src={PapersTop} alt="Pales marcadores amarillos" />
                </div>        
            </div>
        </div>
    )
}
export default LayoutFolder;