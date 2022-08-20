import './modal.css'
import { useLocation } from 'react-router-dom';
const Modal = ({children, state, setState}) => {
    
    const location = useLocation()
    return(
        <>
        {
            state &&
                <div className="overlay-modal">
                    <div className='modal-container'>
                        <div className='modal-header'>
                            {
                                location.pathname === '/landingPages' ? <h1 className='lettering-style-L-P'>Landing Pages</h1>:
                                location.pathname === '/homes' ? <h1>Homes</h1>:
                                location.pathname === '/details' ? <h1>Details</h1>:
                                location.pathname === '/forms' ? <h1>Forms</h1>:
                                <h1>Cards</h1>
                            }
                            <button onClick={() => setState(false)} className='close-button'>X</button>
                        </div>
                        {children}
                    </div>
                </div>
        }
        </>
    )
}
export default Modal;