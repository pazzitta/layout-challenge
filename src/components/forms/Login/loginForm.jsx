import './loginForm.css'
import IconPerson from '../../../assets/Forms/Login/iconPerson.png'
import IconPadlock from '../../../assets/Forms/Login/iconPadlock.png'
import IconLoginButton from '../../../assets/Forms/Login/iconLoginButton.png'
import IconFacebookWhite from '../../../assets/Forms/Login/iconFacebookWhite.png'
import IconGoogleWhite from '../../../assets/Forms/Login/iconGoogleWhite.png'
import IcontwitterWhite from '../../../assets/Forms/Login/iconTwitterWhite.png'

const LoginForm = () => {
    return (
    <div className='box-all-login-form'>
        <article>
            <h1>$ budge<font color='#4395e7'>tale</font> login</h1>
            <p className='order-caption-login-form'>You do not have an account? Create your account at takes a minute</p>
            <form>
                <div className='box-inputs-login-form'>
                    <img src={IconPerson} alt="ícono persona" />
                    <input type="text" placeholder='Your email'/>
                    <button className='button-password-ok-login-form'></button>
                </div>
                <div className='box-inputs-login-form'>
                    <img src={IconPadlock} alt="ícono candado" />
                    <input type="password" name="" id="" placeholder='Password' />
                    <button className='button-password-off-login-form'></button>
                </div>
                <div className='box-inputs-caption-login-form'>
                    <div>
                        <div><p>&#10004;</p></div>
                        <small>remember me</small>
                    </div>
                    <small>forgot password</small>
                </div>
                <button className='style-button-login-form' type="submit"><img src={IconLoginButton} alt="ícono ingresar" />Login</button>
            </form>
            <p className='style-caption-button-login-form'>Login with</p>
            <div>
                <button className='style-button-facebook-login-form'><img src={IconFacebookWhite} alt="Iso Facebook" /></button>
                <button className='style-button-google-login-form'><img src={IconGoogleWhite} alt="Iso Google+" /></button>
                <button className='style-button-twitter-login-form'><img src={IcontwitterWhite} alt="Iso Twitter" /></button>
            </div>
            <p className='order-copyright-login-form'>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Maiores vitae dolor eaque consequuntur.</p>
        </article>
    </div>

    )
}
export default LoginForm;