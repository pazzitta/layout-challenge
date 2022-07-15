import BackgroundVideo from "./layoutsToReplicate/BackgroundVideo";
import Minimalism from "./layoutsToReplicate/Minimalism";
import OrganicShapes from "./layoutsToReplicate/OrganicShapes";
import Advertisings from "./layoutsToReplicate/Advertising";

const MainLandingPages = () => {
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
            <BackgroundVideo/>
            <Minimalism/>
            <OrganicShapes/>
            <Advertisings/>
        </div>
    )
}
export default MainLandingPages;