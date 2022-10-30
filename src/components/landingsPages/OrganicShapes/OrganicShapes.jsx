import './organicShapes.css'
import BackgroundImageOS from '../../../assets/LandingPages/OrganicShapes/backgroundImageOS2.png'

const OrganicShapes = () => {
    return(
        <div className="box-macro-organic-shapes-LP">
            <img className="image-main-organic-shapes-LP" src={BackgroundImageOS} alt="Ilustración space" />
            <header className="box-header-organic-shapes-LP">
                <div className="box-name-header-organic-shapes-LP">
                    <h3 className="name-header-organic-shapes-LP">NAME</h3>
                </div>
                <div className="box-ancords-header-organic-shapes-LP">
                    <a className="style-ancords-header-organic-shapes-LP" href="">How & works</a>
                    <a className="style-ancords-header-organic-shapes-LP" href="">Pricing</a>
                    <a className="style-ancords-header-organic-shapes-LP" href="">Countact Us</a>                
                </div>
            </header>
            <main className="box-main-organic-shapes-LP">
                <div className="box-text-main-organic-shapes-LP">
                    <h1 className="titel-main-organic-shapes-LP">Welcome to The Galaxy, Enjoy Your Space Trip</h1>
                    <p className="description-main-organic-shapes-LP">A vacations is something you want tom make sore you're paying for exactly what you get, and that means booking through a webside you trust.</p>
                    <div className="box-button-main-organic-shapes-LP">
                        <button className="button-main-organic-shapes-LP">LET'S GO</button>
                    </div>
                </div>
                {/* <div className="box-image-main-organic-shapes-LP">
                </div> */}
            </main>
        </div>
    )

}
export default OrganicShapes;