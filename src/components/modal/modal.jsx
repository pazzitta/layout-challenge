
const Modal = ({children, state, changeState}) => {

    function handleClikX (e) {
        changeState(false)
    }
        return (
        <>
        {state &&
        <div className="overLayModal">
            <div className="contenedorModal">
                <button 
                onClick={handleClikX}
                className="buttonXModal"
                >X</button>
                {children}
            </div>
        </div>
        }
        </>
        )
    }
    export default Modal;