import './registerForm.css'
import IsologoWhite from '../../../assets/Forms/Register/isologoWhite.png'
import IconFacebookBlack from '../../../assets/Forms/Register/iconFacebookBlack.png'
import IconGoogleBlack from '../../../assets/Forms/Register/iconGoogleBlack.png'
import IconLinkedInBlack from '../../../assets/Forms/Register/iconLinkedInBlack.png'


const RegisterForm = () => {
    return(
        <div className="box-vp-register-form">
            {/* <img src="" alt="Imagen de fondo" /> va a ser u background en el div mayor */} 
            <div className='box-register-form'>
                <section className='box-left-register-form'>
                    <img src={IsologoWhite} alt="Isologo" />
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <button>SING IN</button>
                </section>
                <section className='box-right-register-form'>
                    <h1>Create Account</h1>
                    <div>
                       <a href=""><img src={IconFacebookBlack} alt="ícono Facebook" /></a>
                       <a href=""><img src={IconGoogleBlack} alt="ícono Google" /></a>
                       <a href=""><img src={IconLinkedInBlack} alt="ícono LinkedIn" /></a>
                    </div>
                    <p>or use your email for registration</p>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>SING UP</button>
                </section>
            </div>
        </div>
    )
}
export default RegisterForm;