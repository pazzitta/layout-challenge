import './profile.css'
import BrandLogo from '../../../assets/Details/Profile/brandLogo.png'
import ImageProfile from '../../../assets/Cards/imageProfileP.jpg'
import LocationGray from '../../../assets/Details/Profile/locationGray.png'
import IconFavGray from '../../../assets/Details/Profile/iconFavGray.png'
import StarBlue from '../../../assets/Details/Profile/starBlue.png'
import IconMessage from '../../../assets/Details/Profile/iconMessage.png'
import IconDarkGrayEye from '../../../assets/Details/Profile/iconDarkGrayEye.png'
import IconPersonDarkGray from '../../../assets/Details/Profile/iconPersonDarkGray.png'


const ProfileDetail = () => {
    return(
        <div className='order-all-page-profile-detail'>
            <header className='header-order-profile-detail'>
                <nav>
                    <img src={BrandLogo} alt="Logo" />
                    <form action="">
                        <input type="text" />
                        {/* <button type="submit">Lupa</button> */}
                    </form>
                    <div>
                        <a href="">Find profile</a>
                        <div>
                            <a href="">Messages</a>
                            <h4>15</h4>
                        </div>
                        <a href="">My contacts</a>
                        <img src={ImageProfile} alt="Foto perfil" />
                    </div>
                </nav>
            </header>
            <main className='main-order-profile-detail'>
                <section className='order-left-section-profile-detail'>
                    <div>
                        <img src={ImageProfile} alt="Foto perfil" />
                        <small>Algo 0</small>
                    </div>
                    <div>
                        <div className='box-titel-and-button-main-profile-detail'>
                            <h4>Spotify New York</h4>
                            <button>Algo 1</button>
                        </div>
                        <p>algo 2</p>
                        <p>algo 3</p>
                    </div>
                    <div>
                        <div className='box-titel-and-button-main-profile-detail'>
                            <h4>Metropolitan Museum</h4>
                            <button>Algo 4</button>
                        </div>
                        <p>algo 5</p>
                        <p>algo 6</p>
                        <small>Algo 7</small>
                    </div>
                    <div>
                        <h5>Algo 8</h5>
                        <h5>Algo 9</h5>
                        <h5>Algo 10</h5>
                        <h5>Algo 11</h5>
                        <h5>Algo 12</h5>
                    </div>
                </section>
                <section className='order-right-section-profile-detail'>
                    <section>
                        <div className='order-box-name-right-section-profile-detail'>
                            <div>
                                <h1>Jeremy Rose</h1>
                                <img src={LocationGray} alt="ícono localización" />
                                <small>Nombre lugar Loc.</small>
                            </div>
                            <button><img src={IconFavGray} alt="Banderita fav" />LikeLike</button>
                        </div>
                        <h4>Profesión</h4>
                        <small>Valoración</small>
                        <div className='order-box-qualification-right-section-profile-detail'>
                            <h3>8.6</h3>
                                {/* creo que son inputs */}
                            <img src={StarBlue} alt="estrellitas" />
                            <img src={StarBlue} alt="estrellitas" />
                            <img src={StarBlue} alt="estrellitas" />
                            <img src={StarBlue} alt="estrellitas" />
                            <small>25</small>
                        </div>
                        <div className='order-box-buutons-right-section-profile-detail'>
                            <button><img src={IconMessage} alt="Mensaje ícono" />Send Message</button>
                            <button><p>&#10004;</p> Contact</button>
                            <small>Algo algo</small>
                        </div>
                        <div className='order-box-anchords-right-section-profile-detail'>
                            <a href="">
                                <img src={IconDarkGrayEye} alt="ícono algo 14" />
                                <label htmlFor="">algo 14</label> 
                            </a>
                            <a href="">
                                <img src={IconPersonDarkGray} alt="ícono persona" />
                                <label htmlFor="">algo 15</label> 
                            </a>
                        </div>
                    </section>
                    
                    <section>
                        <br />
                        <table>
                            <tr>
                                <td><small>Título 1</small></td>
                                <td><small>Título 2</small></td>
                            </tr>
                            <tr>
                                <td>Contenido 1 1</td>
                                <td>Contenido 1 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 2 1</td>
                                <td>Contenido 2 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 3 1</td>
                                <td>Contenido 3 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 4 1</td>
                                <td>Contenido 4 2</td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <td><small>Título 1.2</small></td>
                                <td><small>Título 2.2</small></td>
                            </tr>
                            <tr>
                                <td>Contenido 1 1.2</td>
                                <td>Contenido 1 2.2</td>
                            </tr>
                            <tr>
                                <td>Contenido 2 1.2</td>
                                <td>Contenido 2 2.2</td>
                            </tr>
                        </table>
                    </section>
                </section>
            </main>
        </div>
    )
}
export default ProfileDetail;