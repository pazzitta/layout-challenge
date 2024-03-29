import './registerForm.css'
import IsologoWhite from '../../../assets/Forms/Register/isologoWhite.png'
import IconFacebookBlack from '../../../assets/Forms/Register/iconFacebookBlack.png'
import IconGoogleBlack from '../../../assets/Forms/Register/iconGoogleBlack.png'
import IconLinkedInBlack from '../../../assets/Forms/Register/iconLinkedInBlack.png'

const RegisterForm = () => {
    return(
        <div className="box-vp-register-form">
            <div className='box-register-form'>
                <section className='box-left-register-form'>
                    <img src={IsologoWhite} alt="Isologo" />
                    <div>
                        <h2>Welcome Back!</h2>
                        <p>To keep connected with us please login with your personal info</p>
                        <button>SING IN</button>
                    </div>
                </section>
                <section className='box-right-register-form'>
                    <div>
                        <h2>Create Account</h2>
                        <div>
                            <a href=""><img src={IconFacebookBlack} alt="ícono Facebook" /></a>
                            <a href=""><img src={IconGoogleBlack} alt="ícono Google" /></a>
                            <a href=""><img src={IconLinkedInBlack} alt="ícono LinkedIn" /></a>
                        </div>
                        <p>or use your email for registration</p>
                        <input className='input-name-resgister-F' type="text" placeholder='Name' required/>
                        <input className='input-email-resgister-F' type="email" placeholder='Email' required/>
                        <input className='input-password-resgister-F' type="password" placeholder='Password' required/>
                        <button>SING UP</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default RegisterForm;