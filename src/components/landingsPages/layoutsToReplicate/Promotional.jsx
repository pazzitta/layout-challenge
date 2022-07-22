import ImagePromotional from '../../../assets/LandingPages/imageP.jpg'

const Promotional= () => {
    return(
        <div className='box-macro-promotional-LP'>
            <img className='image-promotional-LP' src={ImagePromotional} alt="Imagen diseño interior"/>
            <header className='box-header-promotional-LP'>
                <div className='box-ancords-header-promotional-LP'>
                    <img src="" alt="Logo" />
                    <a href="">Home</a>
                    <a href="">Interiors</a>
                    <a href="">About</a>
                </div>
                <div className='box-search-header-promotional-LP'>
                    <div>
                        <button>Lupa</button>
                        {/* <input type="text" /> */}
                    </div>                
                    <select name="" id="">
                        <option selected></option>
                        <option>Interior 1</option>
                        <option>Interior 2</option>
                    </select>
                </div>
            </header>
            <main className='box-main-promotional-LP'>
                <div>
                    <h1>Interior design for you</h1>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum odit ipsam eveniet saepe, quibusdam neque, quia iusto fuga.</small>
                    <button>EXPLORE</button>
                </div>
            </main>
            <footer className='box-footer-promotional-LP'>
                <div>
                    <h5>Single price</h5>
                    <p>Lorem ipsum dolor sit.Repellendus, officia?</p>
                </div>
                <div>
                    <h5>Adaptation</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h6>NEXT FACTORY</h6>
                </div>
            </footer>
            
        </div>
    )
}
export default Promotional;