import './myLayoutsSection.css'
import { useLocation } from 'react-router-dom';
// import '../myHome/baseIllustrationStyles.css'
import MyLayoutBaseBoard from './myLayoutBaseBoard';
import LayoutSectionContentOne from './layoutSectionContents/layoutSectionContentOne';
import LayoutSectionContentTwo from './layoutSectionContents/layoutSectionContentTwo';
import LayoutSectionContentThree from './layoutSectionContents/layOutSectionContentThree';

const MyLayoutsSection = () => {

    const location = useLocation();
    return(
        <div className='general-order-my-layout-section'>
            <article id='firstSection' className='order-all-componentes-article-one'>
                {
                    location.pathname === '/landingPages'? 
                    <div className='name-background-video-article-one'>
                        <h2>B</h2><h2>A</h2><h2>C</h2><h2>K</h2><h2>G</h2><h2>R</h2><h2>O</h2><h2>U</h2>
                        <h2>N</h2><h2>D</h2><h2>V</h2><h2>I</h2><h2>D</h2><h2>E</h2><h2>0</h2>
                    </div>  :
                    location.pathname === '/homes' ? 
                    <div className='name-personal-page-article-one'>
                        <h2>P</h2><h2>E</h2><h2>R</h2><h2>S</h2><h2>O</h2><h2>N</h2><h2>A</h2><h2>L</h2>
                        <h2>P</h2><h2>A</h2><h2>G</h2><h2>E</h2>
                    </div> : 
                    location.pathname === '/details' ?
                    <div className='name-clothes-article-one'>
                        <h2>C</h2><h2>L</h2><h2>O</h2><h2>T</h2><h2>H</h2><h2>E</h2><h2>S</h2>
                    </div> : 
                    location.pathname === '/forms' ? 
                    <div className='name-login-article-one'>
                        <h2>L</h2><h2>O</h2><h2>G</h2><h2>I</h2><h2>N</h2>
                    </div> :
                    <div className='name-clothes-article-one'>
                        <h2>C</h2><h2>L</h2><h2>O</h2><h2>T</h2><h2>H</h2><h2>E</h2><h2>S</h2>
                    </div> 
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
            <article id='secondSection' className='order-all-componentes-article-two'>
                {
                    location.pathname === '/landingPages'?
                    <div className='name-background-video-article-one'>
                        <h2>M</h2><h2>I</h2><h2>N</h2><h2>I</h2><h2>M</h2><h2>A</h2><h2>L</h2><h2>I</h2><h2>S</h2><h2>M</h2>
                    </div>:
                    location.pathname === '/homes' ? 
                    <div className='name-background-video-article-one'>
                        <h2>E</h2><h2>-</h2><h2>C</h2><h2>O</h2><h2>M</h2><h2>M</h2><h2>E</h2><h2>R</h2><h2>C</h2><h2>E</h2>
                    </div>:
                    location.pathname === '/details' ? 
                    <div className='name-background-video-article-one'>
                        <h2>F</h2><h2>U</h2><h2>R</h2><h2>N</h2><h2>I</h2><h2>T</h2><h2>U</h2><h2>R</h2><h2>E</h2>
                    </div>:
                    location.pathname === '/forms' ? 
                    <div className='name-background-video-article-one'>
                        <h2>R</h2><h2>E</h2><h2>G</h2><h2>I</h2><h2>S</h2><h2>T</h2><h2>E</h2><h2>R</h2>
                    </div>:
                    <div className='name-background-video-article-one'>
                        <h2>F</h2><h2>O</h2><h2>O</h2><h2>D</h2>
                    </div>
                }
                <div className="top-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                {
                    location.pathname === '/homes' ?
                     <div className='big-base-board'>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>

                    </div>:
                    <div className='normal-base-board'>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>
                        <MyLayoutBaseBoard/>
                    </div>
                }
                <div className="botton-frame-styles-and-order-layout-section">
                    <div></div>
                    <div></div>
                </div>
                <LayoutSectionContentTwo/>
            </article>
            <article id='thirdSection' className='order-all-componentes-article-three'>
            {
                    location.pathname === '/landingPages'?
                    <div className='name-background-video-article-one'>
                        <h2>O</h2><h2>R</h2><h2>G</h2><h2>A</h2><h2>N</h2><h2>I</h2> <h2>S</h2><h2>H</h2><h2>A</h2><h2>P</h2><h2>E</h2><h2>S</h2>
                    </div>:
                    location.pathname === '/homes' ? 
                    <div className='name-background-video-article-one'>
                        <h2>M</h2><h2>A</h2><h2>R</h2><h2>K</h2><h2>E</h2><h2>T</h2><h2>P</h2><h2>L</h2><h2>A</h2><h2>C</h2><h2>E</h2>
                    </div>:
                    location.pathname === '/details' ? 
                    <div className='name-background-video-article-one'>
                        <h2>N</h2><h2>E</h2><h2>W</h2><h2>S</h2>
                    </div>:
                    location.pathname === '/forms' ? 
                    <div className='name-background-video-article-one'>
                        <h2>C</h2><h2>H</h2><h2>E</h2><h2>C</h2><h2>K</h2> <h2>O</h2><h2>U</h2><h2>T</h2>
                    </div>:
                    <div className='name-clothes-article-one'>
                        <h2>C</h2><h2>L</h2><h2>O</h2><h2>T</h2><h2>H</h2><h2>E</h2><h2>S</h2>
                    </div> 
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
                <LayoutSectionContentThree/>
            </article>
            <article id='fourthSection' className='order-all-componentes-article-four'>
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