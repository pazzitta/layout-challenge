import './layoutFolder.css'

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
                            <h4>Namename</h4>
                        </div>
                    </div>                
                    <div className='base-front-folder-style'></div>
                </div>
            </div>
            
            <div className='box-fron-folder'>
                <div className='front-front-cover-folde-order'>
                    <div className='flap-front-front-folder-order-and-style'></div>                
                    <div className='base-front-front-folder-style'></div>
                </div>
                <div className='box-paper-markets'>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
        
            </div>

        </div>
    )
}
export default LayoutFolder;