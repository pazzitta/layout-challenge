import './styleReplicateCards.css'
import ImageProfile from '../../../assets/Cards/imageProfileP.jpg'

const PeopleCard = () => {
    return(
        <div className='caja-para-ver'>
        <div className='box-macro-people-card'>
            <header className='box-header-people-card'>
                <div className='box-button-header-people-card'><button className='button-star-header-people-card'></button></div>
            </header>
            <div className='box-profile-data-people-card'>
                <div className='box-image-profile-people-card'>
                    <img className='image-profile-people-card' src={ImageProfile} alt="Imagen perfil" />
                </div>
                <div className='box-all-data-profile-people-card'>
                    <h2 className='name-data-profile-people-card'>Nombre Apellido</h2>
                    <div className='box-data-profile-people-card'>
                        <div>
                            <img src="" alt="Ícono personas" />
                            <p>Followers</p>
                            <h3>------</h3>
                        </div>
                        <div>
                            <img src="" alt="Íconos views" />
                            <p>Views</p>
                            <h3>------</h3>
                        </div>
                        <div>
                            <img src="" alt="Ícono videos" />
                            <p>Videos</p>
                            <h3>----</h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <footer>
                <button>View profile</button>
                <button>Ícono add</button>
            </footer>
        </div>

        </div>
    )
}
export default PeopleCard;