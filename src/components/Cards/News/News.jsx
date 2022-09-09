import './news.css'
import ImageNews from '../../../assets/Cards/News/imageNewsC.jpg'
import ImageAutor from '../../../assets/Cards/imageProfileP.jpg'

const NewsCard = () => {
    return(
        <div className='caja-para-ver'>
            <div className='box-macro-news-card'>
                <img className='image-news-card' src={ImageNews} alt="Imagen ilustrativa" />
                <div className='box-text-news-card'>
                    <div className='internal-box-text-news-card'>
                        <p className='section-text-news-card'>Travel</p>
                        <h2 className='titel-text-news-card'>A Beautiful Morning In London</h2>
                        <p className='decription-text-news-card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus sunt voluptatibus repudiandae quasi sint. Enim dolores laudantium blanditiis mollitia tenetur 
                        nisi. Culpa, quaerat a! Eos ipsum quas consectetur totam</p>
                        <p className='decription2-text-news-card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus sunt voluptatibus repudiandae quasi sint. Enim dolores laudantium blanditiis mollitia tenetur 
                        nisi. Culpa, quaerat a! Eos ipsum quas consectetur totam nemo.Enim dolores laudantium blanditiis 
                        mollitia tenetur nisi. Culpa, quaerat a! Eos ipsum quas consectetur totam.</p>
                        <div className='box-autor-text-news-card'>
                            <div className='box-image-and-autor-news-card'>
                                <img className='image-autor-news-card' src={ImageAutor} alt="Foto autor" />
                                <div>
                                    <h4 className='name-autor-news-card'>Nombre autor</h4>
                                    <p className='profesion-autor-news-card'>Profesión</p>
                                </div>
                            </div>
                            <button className='button-next-news-card'>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsCard;