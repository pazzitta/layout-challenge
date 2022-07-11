import ProductOneDetail from "./AllDetails/ProductOne";
import ProductTwoDetail from "./AllDetails/ProductTwo";
import NewsDetail from "./AllDetails/News";
import ProfileDetail from "./AllDetails/Profile";

const MainDetails = () => {
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
            <h2>Soy el main de los details</h2>
            <ProductOneDetail/>
            <ProductTwoDetail/>
            <NewsDetail/>
            <ProfileDetail/>
        </div>
    )
}
export default MainDetails;