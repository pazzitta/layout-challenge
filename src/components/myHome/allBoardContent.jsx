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
                    <MetalBasket/>
                </a>
                <a href="/homes">
                    <MetalBasket/>
                </a>
                <MetalBasket/>
                <MetalBasket/>
                <MetalBasket/>
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
                    <div className='order-note'>
                        <div className='hotpink-note-background-two'>
                            <p>No sé aún...</p>
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