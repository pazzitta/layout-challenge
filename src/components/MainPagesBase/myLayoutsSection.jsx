import './myLayoutsSection.css'
// import '../myHome/baseIllustrationStyles.css'
import MyLayoutBaseBoard from './myLayoutBaseBoard';

const MyLayoutsSection = () => {
    return(
        <div className='general-order-my-layout-section'>
            <article className='order-all-componentes-article-one'>
                <h2>BACKGROUND VIDEO</h2>
                <div className="top-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <div className="botton-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
            </article>
            <article className='order-all-componentes-article-two'>
                <h2>MINIMALISM</h2>
                <div className="top-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <div className="botton-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
            </article>
            <article className='order-all-componentes-article-three'>
                <h2>ORGANIC SHAPES</h2>
                <div className="top-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <div className="botton-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
            </article>
            <article className='order-all-componentes-article-four'>
                <h2>PROMOTIONAL</h2>
                <div className="top-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <MyLayoutBaseBoard/>
                <div className="botton-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
            </article>
        </div>
    )
}
export default MyLayoutsSection;