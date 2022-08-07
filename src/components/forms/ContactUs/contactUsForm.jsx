import './contactUsForm.css'
import BackgroundHeader from '../../../assets/Forms/ContactUs/backgroundHeader.jpg'

const ContactUsForm = () => {
    return(
        <div className="box-vp-contact-us-form">
            <header className='box-header-contact-us-form'>
                <img src={BackgroundHeader} alt="imagen ciudad" />
                <div className='header-header-contact-us-form'>
                    <div className='order-top-header-contact-us-form'>
                        <h2>KAPANDESAL INC.</h2>
                        <div>
                            <select name="" id="">
                                <option value="">holis 1</option>
                                <option value="">holis 2</option>
                                <option value="">holis 3</option>
                            </select>
                            <p>MENU</p>
                        </div>
                    </div>
                    <div className='box-titel-header-contact-us-form'>
                        <h1>CONTACT US</h1>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <p>Get in touch with us!</p>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>PHONE</p>
                            <small>1626673728</small>
                            <small>5367678839</small>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>ADDRESS</p>
                            <small>soy una direccón</small>
                            <small>sigo o soy otra</small>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>EMAIL</p>
                            <small>holis@hoao.com</small>
                            <small>holisdos@hshhd.com</small>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>IF YOU GOT ANY QUESTIONS PLEASE DO NOT ALGO TO SENDUS A MESSAGE.</h3>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder=''/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>SEND MESSAGE</button>
                </section>
                <section>
                    <h3><i>Connect with us !</i></h3>
                    <div>
                        <a href=""><img src="" alt="ícono Facebook" /></a>
                        <a href=""><img src="" alt="ícono Twitter" /></a>
                        <a href=""><img src="" alt="ícono Pinterest" /></a>
                        <a href=""><img src="" alt="ícono Instagram" /></a>
                        <a href=""><img src="" alt="ícono LinkedIn" /></a>
                    </div>
                    <img src="" alt="mapa del lugar" />
                </section>
            </main>
            <footer>
                <img src="" alt="imagen fondo logo" />
                <div>
                    <img src="" alt="logo empresa" />
                    <a href="">TWITTER</a>
                    <a href="">FACEBOOK</a>
                    <a href="">INSTAGRAM</a>
                    <a href="">PINTEREST</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore odit suscipit. Ea consectetur quis unde delectus 
                eaque assumenda, adipisci maiores maxime rerum odit quia id enim ex excepturi a!</p>
            </footer>
        </div>
    )
}
export default ContactUsForm;