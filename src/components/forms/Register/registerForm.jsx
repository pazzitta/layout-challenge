import './registerForm.css'

const RegisterForm = () => {
    return(
        <div className="box-vp-register-form">
            {/* <img src="" alt="Imagen de fondo" /> va a ser u background en el div mayor */} 
            <div className='box-register-form'>
                <section className='box-left-register-form'>
                    <img src="" alt="Logo" />
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with please login with your personal info</p>
                    <button>Sing in</button>
                </section>
                <section className='box-right-register-form'>
                    <h1>Create Account</h1>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
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