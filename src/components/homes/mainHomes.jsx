import PersonalPageHome from "./AllHomes/PersonalPage";
import EcommerceHomes from "./AllHomes/Ecommerce";
import MarketplacesHomes from "./AllHomes/Marketplaces";
import DigitalNewspaper from "./AllHomes/DigitalNewspaper";

const MainHomes = () => {
    return(
        <div> 
            {/* <a href="">
                <img src="" alt="Imagen de Landin Page Background Video" />
            </a>
            <a href="">
                <img src="" alt="Imagen de Landin Page Minimalism" />
            </a>
            <a href="">
                <img src="" alt="Imagen de Landin Page Organic Shapes" />
            </a>
            <a href="">
                <img src="" alt="Imagen de Landin Page Advertising" />
            </a>
            <a href="">
                <img src="" alt="Imagen de Landin Page Diseño propio" />
            </a> */}
            <h2>Soy el main de las homes</h2>
            <PersonalPageHome/>
            <EcommerceHomes/>
            <MarketplacesHomes/>
            <DigitalNewspaper/>
        </div>
    )
}
export default MainHomes;