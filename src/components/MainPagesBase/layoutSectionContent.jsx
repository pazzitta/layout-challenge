import './layoutSectionContent.css'
// import '../MainPagesBase/mainPagesBase.css'
import OriginalPagesLSC from '../../assets/LandingPages/BackgroundVideoGif.gif'
const LayoutSectionContent = () => {
    return(
        <div className="order-all-layout-section-content">
            <section className='original-page-section-order'>
                <div className='section-identification-posters-order'>
                    <h2 className='section-identification-posters-base'>ORIGINAL PAGE</h2>
                    <div> 
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <img src={OriginalPagesLSC} alt="imagen página original" />
            </section>

            <section className='assets-section-order'>
                <div className='top-box-assets-section-order'>
                    <div className='section-identification-posters-order'>
                        <h2 className='section-identification-posters-base'>ASSETS</h2>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <div className='order-all-wooden-signs-LSC'>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>ICONS</h3>
                                    <div></div>
                                </div>
                            </div>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>MULTIMEDIA</h3>
                                    <div></div>
                                </div>
                            </div>
                            <div className='order-wooden-signs-LSC'>
                                <div>
                                    <div></div>
                                    <h3>ILLUSTRATIONS</h3>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className='order-papers-assets'>
                            <div></div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='botton-box-assets-section-order'>
                    <div className='section-identification-posters-order'>
                        <h2 className='section-identification-posters-base'>RESPONSIVE</h2>
                        <div> 
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='my-layout-section-order'></section>

        </div>
    )
}
export default LayoutSectionContent;