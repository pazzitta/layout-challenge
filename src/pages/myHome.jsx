import '../components/myHome/myHome.css'
import folderLandingPages from '../assets/myHome/folder.png'

const MyHome = () => {
    return(
        <div className='order-my-home'>
            <div className='orderButtons'>
                <img src={folderLandingPages} className='folders'/>
                <img src={folderLandingPages} className='folders'/>
                <img src={folderLandingPages} className='folders'/>
                <img src={folderLandingPages} className='folders'/>
                <img src={folderLandingPages} className='folders'/>
            </div>
            <div>sol la ilustración</div>
        </div>
    )
}
export default MyHome;