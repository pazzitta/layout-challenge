import './baseIllustrationStyles.css'
import RowOfPencils from './InternalBoardComponents/rowOfPencils';
import BlackboardCalendar from './InternalBoardComponents/blackboardCalendar';
import WantedPoster from './InternalBoardComponents/wantedPoster';
import FamilyPictureOne from '../../assets/myHome/AllBoardContent/familyPictureOne.jpg'
import FamilyPictureTwo from '../../assets/myHome/AllBoardContent/familyPictureTwo.jpg'
import FamilyPictureThree from '../../assets/myHome/AllBoardContent/familyPictureThree.jpg'
import MetalBasket from './InternalBoardComponents/metalBasket';
import LayoutFolder from './InternalBoardComponents/layoutFolder';

const AllBoardContent = () => {
    return (
        <div className="order-all-board-content">
            <div className='section-one'>
                <a href="/landingPages">
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
            <div className='section-two'>
                <section>
                    <BlackboardCalendar/>
                    <div>
                        <MetalBasket/>
                    </div>
                </section>
                <section>
                    <div className='order-portrait-door-left-aligned'>
                        <div>
                            <img src={FamilyPictureOne} alt="foto familia de 4" />
                        </div>
                    </div>
                    <div className='order-portrait-door-right-aligned'>
                        <div>
                            <img src={FamilyPictureTwo} alt="Con Anto" />
                        </div>
                    </div>
                    <div className='order-portrait-door-left-aligned'>
                        <div>
                            <img src={FamilyPictureThree} alt="Con Magui" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='layouts-poster-wood-order-and-style' >
                        <div></div>
                        <h2>layouts</h2>
                        <div></div>
                    </div>
                    <LayoutFolder/>
                </section>
                <section>
                    <div className='order-note'>
                        <div className='hotpink-note-background-one'>
                            <p>“La lógica te llevará de la A a la Z; la imaginación te llevará a todas partes.“ Albert Einstein</p>
                        </div>
                        <div className='order-note-scotch-tape-one'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='order-note-two'>
                        <div className='hotpink-note-background-two'>
                            <p>"Sé el cambio que quieres ver en el mundo"</p>
                        </div>
                        <div className='order-note-scotch-tape-two'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <section>
                    <WantedPoster/>
                </section>
            </div>
            <div className='section-three'>
                <RowOfPencils/>
            </div>

        </div>
    )
}
 export default AllBoardContent;