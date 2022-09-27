import './baseIllustrationStyles.css'
import RowOfPencils from '../myHome/InternalBoardComponents/RowOfPencils/rowOfPencils'
import Blackboard from './InternalBoardComponents/BlackBoard/blackboard';
import WantedPoster from './InternalBoardComponents/WantedPoster/wantedPoster';
import MetalBasket from './InternalBoardComponents/MetalBasket/metalBasket';
import LayoutFolder from './InternalBoardComponents/LayoutFolder/layoutFolder';

const AllBoardContent = () => {
    return (
        <div className="order-all-board-content">
            <div className='section-one'>
                <section>
                    <div>
                        <Blackboard/>
                    </div>
                    <div>
                        <div className='hotpink-note-background-one'>
                            <p>Contacto</p>
                        </div>
                        <div className='order-note-scotch-tape-one'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <WantedPoster/>
                    </div>
                </section>
                <section>
                    <div>
                        <div className='layouts-poster-wood-order-and-style' >
                            <div></div>
                            <h2>maquetaciones terminadas</h2>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <a href="/landingPages">
                            <div className='order-folders-in-back-of-metal-basket'>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                            </div>
                            <div className='position-metal-basket'>
                                <MetalBasket/>
                            </div>
                            <div className='poster-wood-order-and-style' >
                                <div></div>
                                <h2>landing pages</h2>
                                <div></div>
                            </div>
                        </a>
                        <a href="/homes">
                            <div className='order-folders-in-back-of-metal-basket'>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                            </div>
                            <div className='position-metal-basket'>
                                <MetalBasket/>
                            </div>
                            <div className='poster-wood-order-and-style' >
                                <div></div>
                                <h2>homes</h2>
                                <div></div>
                            </div>
                        </a>
                        <a href="/details">
                            <div className='order-folders-in-back-of-metal-basket'>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                            </div>
                            <div className='position-metal-basket'>
                                <MetalBasket/>
                            </div>
                            <div className='poster-wood-order-and-style' >
                                <div></div>
                                <h2>details</h2>
                                <div></div>
                            </div>
                        </a>
                        <a href="/forms">
                            <div className='order-folders-in-back-of-metal-basket'>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                            </div>
                            <div className='position-metal-basket'>
                                <MetalBasket/>
                            </div>
                            <div className='poster-wood-order-and-style' >
                                <div></div>
                                <h2>forms</h2>
                                <div></div>
                            </div>
                        </a>
                        <a href="/cards">
                            <div className='order-folders-in-back-of-metal-basket'>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                                <div>
                                    <LayoutFolder/>
                                </div>
                            </div>
                            <div className='position-metal-basket'>
                                <MetalBasket/>
                            </div>
                            <div className='poster-wood-order-and-style' >
                                <div></div>
                                <h2>cards</h2>
                                <div></div>
                            </div>
                        </a>
                    </div>                  
                    <div>
                        <div className='proyect-p-poster-wood-order-and-style' >
                            <div></div>
                            <h2>trabajando...</h2>
                            <div></div>
                        </div>
                        <a className='anchord-proyect-p-styles' href="/inConstruction">
                            <div className='in-process-position-metal-baske-order'>
                                <div className='order-folders-in-back-of-metal-basket-two'>
                                    <div>
                                        <LayoutFolder/>
                                    </div>
                                </div>
                                <div className='in-process-position-metal-basket'>
                                    <MetalBasket/>
                                </div>
                                <div className='in-process-poster-wood-order-and-style' >
                                    <div></div>
                                    <h2>proyecto P</h2>
                                    <div></div>
                                </div>
                            </div>                         
                        </a>
                    </div>
                </section>
            </div>
            <div className='section-two'>
                <RowOfPencils/>
            </div>
        </div>
    )
}
export default AllBoardContent;