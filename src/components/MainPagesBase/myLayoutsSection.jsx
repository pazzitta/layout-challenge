import './myLayoutsSection.css'
import { useLocation } from 'react-router-dom';
import {Element, scroller} from 'react-scroll'
import MyLayoutBaseBoard from './myLayoutBaseBoard';
import LayoutSectionContentOne from './layoutSectionContents/layoutSectionContentOne';
import LayoutSectionContentTwo from './layoutSectionContents/layoutSectionContentTwo';
import LayoutSectionContentThree from './layoutSectionContents/layOutSectionContentThree';
import LayoutSectionContentFour from './layoutSectionContents/layoutSectionContentFour';

const MyLayoutsSection = () => {
    
    const { pathname } = useLocation();

    const handleScrollStart = () =>{
        scroller.scrollTo('start')
    }
    const handleScrollSectionOneNext = () =>{
        scroller.scrollTo('sectionTwo')
    }
    const handleScrollSectionTwoPrevious = () =>{
        scroller.scrollTo('sectionOne')
    }
    const handleScrollSectionTwoNext = () =>{
        scroller.scrollTo('sectionThree')
    }
    const handleScrollSectionThreePrevious = () =>{
        scroller.scrollTo('sectionTwo')
    }
    const handleScrollSectionThreeNext = () =>{
        scroller.scrollTo('sectionFour')
    }
    const handleScrollSectionFourPrevious = () =>{
        scroller.scrollTo('sectionThree')
    }

    return(
        <div className='general-order-my-layout-section'>
            <article id='firstSection' className='order-all-componentes-article-one'>
                {
                    pathname === '/landingPages'? 
                    <Element className='titel-order-BV' name='sectionOne'>
                        <div className='name-background-video-article-one'>
                            <h2>B</h2><h2>A</h2><h2>C</h2><h2>K</h2><h2>G</h2><h2>R</h2><h2>O</h2><h2>U</h2>
                            <h2>N</h2><h2>D</h2><h2>V</h2><h2>I</h2><h2>D</h2><h2>E</h2><h2>0</h2>
                        </div>
                    </Element> :
                    pathname === '/homes' ? 
                    <Element name='sectionOne'>
                        <div className='name-personal-page-article-one'>
                            <h2>P</h2><h2>E</h2><h2>R</h2><h2>S</h2><h2>O</h2><h2>N</h2><h2>A</h2><h2>L</h2>
                            <h2>P</h2><h2>A</h2><h2>G</h2><h2>E</h2>
                        </div> 
                    </Element> : 
                    pathname === '/details' ?
                    <Element name='sectionOne'>
                        <div className='name-clothes-article-one'>
                            <h2>C</h2><h2>L</h2><h2>O</h2><h2>T</h2><h2>H</h2><h2>E</h2><h2>S</h2>
                        </div> 
                    </Element>: 
                    pathname === '/forms' ? 
                    <Element name='sectionOne'>
                        <div className='name-login-article-one'>
                            <h2>L</h2><h2>O</h2><h2>G</h2><h2>I</h2><h2>N</h2>
                        </div> 
                    </Element> :
                    <Element name='sectionOne'>
                        <div className='name-news-article-one'>
                            <h2>N</h2><h2>E</h2><h2>W</h2><h2>S</h2>
                        </div> 
                    </Element>
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
                    <article className='box-two-buttons-order'>
                        <button onClick={handleScrollStart} className='back-to-top-style'>Volver al inicio</button>
                        <button onClick={handleScrollSectionOneNext} className='go-to-the-next-style'>&#8681; Ir al siguiente</button>
                    </article>
                    <div></div>
                </div>
                <LayoutSectionContentOne/>
            </article>
            <article id='secondSection' className='order-all-componentes-article-two'>
                {
                    pathname === '/landingPages'?
                    <Element name='sectionTwo'>
                        <div className='name-background-video-article-one'>
                            <h2>M</h2><h2>I</h2><h2>N</h2><h2>I</h2><h2>M</h2><h2>A</h2><h2>L</h2><h2>I</h2><h2>S</h2><h2>M</h2>
                        </div>
                    </Element> :
                    pathname === '/homes' ? 
                    <Element name='sectionTwo'>
                        <div className='name-background-video-article-one'>
                            <h2>E</h2><h2>-</h2><h2>C</h2><h2>O</h2><h2>M</h2><h2>M</h2><h2>E</h2><h2>R</h2><h2>C</h2><h2>E</h2>
                        </div>
                    </Element> :
                    pathname === '/details' ? 
                    <Element name='sectionTwo'>
                        <div className='name-background-video-article-one'>
                            <h2>F</h2><h2>U</h2><h2>R</h2><h2>N</h2><h2>I</h2><h2>T</h2><h2>U</h2><h2>R</h2><h2>E</h2>
                        </div>
                    </Element> :
                    pathname === '/forms' ? 
                    <Element name='sectionTwo'>
                        <div className='name-register-article-one'>
                            <h2>R</h2><h2>E</h2><h2>G</h2><h2>I</h2><h2>S</h2><h2>T</h2><h2>E</h2><h2>R</h2>
                        </div>
                    </Element> :
                    <Element name='sectionTwo'>
                        <div className='name-profile-article-one'>
                            <h2>P</h2><h2>R</h2><h2>O</h2><h2>F</h2><h2>I</h2><h2>L</h2><h2>E</h2>
                        </div>
                    </Element>
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
                    <article className='box-buttons-three-order'>
                        <button onClick={handleScrollStart} className='back-to-top-style'>Volver al inicio</button>
                        <button onClick={handleScrollSectionTwoPrevious} className='back-to-top-style'>&#8679; Volver a la anterior</button>
                        <button onClick={handleScrollSectionTwoNext} className='go-to-the-next-style'>&#8681; Ir a la siguiente</button>
                    </article>
                    <div></div>
                </div>
                <LayoutSectionContentTwo/>
            </article>
            <article id='thirdSection' className='order-all-componentes-article-three'>
            {
                    pathname === '/landingPages'?
                    <Element name='sectionThree'>
                        <div className='name-original-shapes-article-one'>
                            <h2>O</h2><h2>R</h2><h2>G</h2><h2>A</h2><h2>N</h2><h2>I</h2><h2>C</h2> <h2>S</h2><h2>H</h2><h2>A</h2><h2>P</h2><h2>E</h2><h2>S</h2>
                        </div>
                    </Element> :
                    pathname === '/homes' ? 
                    <Element name='sectionThree'>
                        <div className='name-marketplace-article-one'>
                            <h2>M</h2><h2>A</h2><h2>R</h2><h2>K</h2><h2>E</h2><h2>T</h2><h2>P</h2><h2>L</h2><h2>A</h2><h2>C</h2><h2>E</h2>
                        </div>
                    </Element>
                    :
                    pathname === '/details' ? 
                    <Element name='sectionThree'>
                        <div className='name-news-article-one'>
                            <h2>N</h2><h2>E</h2><h2>W</h2><h2>S</h2>
                        </div>
                    </Element> :
                    pathname === '/forms' ? 
                    <Element name='sectionThree'>
                        <div className='name-check-out-article-one'>
                            <h2>C</h2><h2>H</h2><h2>E</h2><h2>C</h2><h2>K</h2> <h2>O</h2><h2>U</h2><h2>T</h2>
                        </div>
                    </Element> :
                    <Element name='sectionThree'>
                        <div className='name-clothes-article-one'>
                            <h2>C</h2><h2>L</h2><h2>O</h2><h2>T</h2><h2>H</h2><h2>E</h2><h2>S</h2>
                        </div> 
                    </Element>
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
                    <article className='box-buttons-three-order'>
                        <button onClick={handleScrollStart} className='back-to-top-style'>Volver al inicio</button>
                        <button onClick={handleScrollSectionThreePrevious} className='back-to-top-style'>&#8679; Volver a la anterior</button>
                        <button onClick={handleScrollSectionThreeNext} className='go-to-the-next-style'>&#8681; Ir a la siguiente</button>
                    </article>
                    <div></div>
                </div>
                <LayoutSectionContentThree/>
            </article>
            <article id='fourthSection' className='order-all-componentes-article-four'>
            {
                    pathname === '/landingPages'?
                    <Element name='sectionFour'>
                        <div className='name-promotional-article-one'>
                            <h2>P</h2><h2>R</h2><h2>O</h2><h2>M</h2><h2>O</h2><h2>T</h2><h2>I</h2><h2>O</h2><h2>N</h2><h2>A</h2><h2>L</h2>
                        </div>
                    </Element> :
                    pathname === '/homes' ?
                    <Element name='sectionFour'>
                        <div className='name-digital-newspaper-article-one'>
                            <h2>D</h2><h2>I</h2><h2>G</h2><h2>I</h2><h2>T</h2><h2>A</h2><h2>L</h2> <h2>N</h2><h2>E</h2><h2>W</h2><h2>S</h2>
                            <h2>P</h2><h2>A</h2><h2>P</h2><h2>E</h2><h2>R</h2>
                        </div>
                    </Element> :
                    pathname === '/details' ? 
                    <Element name='sectionFour'>
                        <div className='name-profile-article-one'>
                            <h2>P</h2><h2>R</h2><h2>O</h2><h2>F</h2><h2>I</h2><h2>L</h2><h2>E</h2>
                        </div>
                    </Element> :
                    pathname === '/forms' ? 
                    <Element name='sectionFour'>
                        <div className='name-contact-us-article-one'>
                            <h2>C</h2><h2>O</h2><h2>N</h2><h2>T</h2><h2>A</h2><h2>C</h2><h2>T</h2> <h2>U</h2><h2>S</h2>
                        </div>
                    </Element> :
                    <Element name='sectionFour'>
                        <div className='name-news-article-one'>
                            <h2>F</h2><h2>O</h2><h2>O</h2><h2>D</h2>
                        </div>
                    </Element>
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
                    <article className='box-two-buttons-order'>
                        <button onClick={handleScrollStart} className='back-to-top-style'>Volver al inicio</button>
                        <button onClick={handleScrollSectionFourPrevious} className='back-to-top-style'>&#8679; Volver a la anterior</button>
                    </article>
                    <div></div>
                </div>
                <LayoutSectionContentFour/>
            </article>
        </div>
    )
}
export default MyLayoutsSection;