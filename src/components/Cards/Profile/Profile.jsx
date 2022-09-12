import './profile.css'
import ImageProfile from '../../../assets/Cards/Profile/imageProfileP.jpg'
import IconPeople from '../../../assets/Cards/Profile/iconPeople.png'
import IconViews from '../../../assets/Cards/Profile/iconViews.png'
import IconVideos from '../../../assets/Cards/Profile/iconVideo.png'
import IconAdd from '../../../assets/Cards/Profile/iconAdd.png'


const ProfileCard = () => {
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
                    <h2 className='name-data-profile-people-card'>Erik Jonson</h2>
                    <div className='box-data-profile-people-card'>
                        <div>
                            <img className='icon-images-profile-people-card' src={IconPeople} alt="Ícono personas" />
                            <div className='box-statistics-profile-people-card'>
                                <p>Followers</p>
                                <h3>200,000</h3>
                            </div>
                        </div>
                        <div>
                            <img className='icon-images-profile-people-card' src={IconViews} alt="Íconos views" />
                            <div className='box-statistics-profile-people-card'>
                                <p>Views</p>
                                <h3>400,000.20</h3>
                            </div>
                        </div>
                        <div>
                            <img className='icon-images-profile-people-card' src={IconVideos} alt="Ícono videos" />
                            <div className='box-statistics-profile-people-card'>
                                <p>Videos</p>
                                <h3>1300</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <footer className='box-buttons-footer-people-card'>
                <button>View profile</button>
                <button><img src={IconAdd} alt="icono agregar" /></button>
            </footer>
        </div>

        </div>
    )
}
export default ProfileCard;