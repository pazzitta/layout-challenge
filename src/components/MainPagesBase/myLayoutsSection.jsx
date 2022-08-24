import './myLayoutsSection.css'
import { useLocation } from 'react-router-dom';
// import '../myHome/baseIllustrationStyles.css'
import MyLayoutBaseBoard from './myLayoutBaseBoard';
import LayoutSectionContentOne from './layoutSectionContents/layoutSectionContentOne';
import LayoutSectionContentTwo from './layoutSectionContents/layoutSectionContentTwo';

const MyLayoutsSection = () => {

    const location = useLocation();
    return(
        <div className='general-order-my-layout-section'>
            <article className='order-all-componentes-article-one'>
                {
                    location.pathname === '/landingPages'? <h2>BACKGROUND VIDEO</h2> :
                    location.pathname === '/homes' ? <h2>PERSONAL PAGE</h2> :
                    location.pathname === '/details' ? <h2>CLOTHES</h2> :
                    location.pathname === '/forms' ? <h2>LOGIN</h2> :
                    <h2>CLOTHES</h2>
                }
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
                <LayoutSectionContentOne/>
            </article>
            <article className='order-all-componentes-article-two'>
                {
                    location.pathname === '/landingPages'? <h2>MINIMALISM</h2> :
                    location.pathname === '/homes' ? <h2>E-COMMERCE</h2> :
                    location.pathname === '/details' ? <h2>FURNITURE</h2> :
                    location.pathname === '/forms' ? <h2>REGISTER</h2> :
                    <h2>FOOD</h2>
                }
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
                <LayoutSectionContentTwo/>
            </article>
            <article className='order-all-componentes-article-three'>
                {
                    location.pathname === '/landingPages'?  <h2>ORGANIC SHAPES</h2> :
                    location.pathname === '/homes' ? <h2>MARKETPLACE</h2> :
                    location.pathname === '/details' ? <h2>NEWS</h2> :
                    location.pathname === '/forms' ? <h2>CHECK OUT</h2> :
                    <h2>NEWS</h2>
                }
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
                {
                    location.pathname === '/landingPages'?   <h2>PROMOTIONAL</h2> :
                    location.pathname === '/homes' ? <h2>NEWS</h2> :
                    location.pathname === '/details' ? <h2>PROFILE</h2> :
                    location.pathname === '/forms' ? <h2>CONTACT US</h2> :
                    <h2>PROFILE</h2>
                }
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