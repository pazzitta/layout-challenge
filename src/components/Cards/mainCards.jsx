import ClothesCard from "./allCards/Clothes";
import FoodCard from "./allCards/Food";
import PeopleCard from "./allCards/People";
import NewsCard from "./allCards/News";
import Oclothes from "../../assets/Cards/ClothesOriginal.jpg"
import Ofood from "../../assets/Cards/FoodOriginal.jpg"
import Opeople from "../../assets/Cards/PeopleOriginal.jpg"
import Onews from "../../assets/Cards/NewsOriginal.jpg"
const MainCards = () => {
    return(
        <div> 
            {/* LOS DE LOS BUTTON NO VA A ASÍ, VA A SER UN BUTTON CON UN BACKGROUD IMAGE, ES PROVISORIA ESTA ESTRUCTURA HASTA QUE LE PONGA CSS. */}
            <button>
                <img src={Oclothes} alt="Imagen de Landin Page Background Video" />
            </button>
            <button>
                <img src={Ofood} alt="Imagen de Landin Page Minimalism" />
            </button>
            <button>
                <img src={Opeople} alt="Imagen de Landin Page Organic Shapes" />
            </button>
            <button>
                <img src={Onews} alt="Imagen de Landin Page Advertising" />
            </button>
            {/* <button>
                <img src="" alt="Imagen de Landin Page Diseño propio" />
            </button> */}
            <h2>Soy el main de las Cards</h2>
            <ClothesCard/>
            <FoodCard/>
            <PeopleCard/>
            <NewsCard/>
        </div>
    )
}
export default MainCards;