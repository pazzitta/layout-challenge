import './contactUsForm.css'
import BackgroundHeader from '../../../assets/Forms/ContactUs/backgroundHeader.jpg'
import IconPhoneGolden from '../../../assets/Forms/ContactUs/iconPhoneGolden.png'
import IconLocationGolden from '../../../assets/Forms/ContactUs/iconLocationGolden.png'
import IconEmailGolden from '../../../assets/Forms/ContactUs/iconEmailGolden.png'
import IconFacebookBlack from '../../../assets/Forms/Register/iconFacebookBlack.png'
import IconLinkedInBlack from '../../../assets/Forms/Register/iconLinkedInBlack.png'
import IconTwitterBlack from '../../../assets/Forms/ContactUs/iconTwitterBlack0.png'
import IconPinteresBlack from '../../../assets/Forms/ContactUs/iconPinterestBlack.png'
import IconInstagramBlack from '../../../assets/Forms/ContactUs/iconInstagramBlack.png'
import LocationMap from '../../../assets/Forms/ContactUs/locationMap.jpg'
import LogoWithBackground from '../../../assets/Forms/ContactUs/logoWithBackground.jpg'


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
            <main className='body-box-order-contact-us-form'>
                <section className='top-body-section-order-contact-us-form'>
                    <p><i>Get in touch with us !</i></p>
                    <article>
                        <div>
                            <img src={IconPhoneGolden} alt="ícono celular" />
                            <p>PHONE</p>
                            <small>1626673728</small>
                            <small>5367678839</small>
                        </div>
                        <div>
                            <img src={IconLocationGolden} alt="ícono localización" />
                            <p>ADDRESS</p>
                            <small>soy una direccón</small>
                            <small>sigo o soy otra</small>
                        </div>
                        <div>
                            <img src={IconEmailGolden} alt="ícono Email" />
                            <p>EMAIL</p>
                            <small>holis@hoao.com</small>
                            <small>holisdos@hshhd.com</small>
                        </div>
                    </article>
                </section>
                <section className='midsection-body-section-order-contact-us-form'>
                    <h3>IF YOU GOT ANY QUESTIONS <br></br>PLEASE DO NOT ALGO TO SENDUS A MESSAGE.</h3>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder=''/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>SEND MESSAGE</button>
                </section>
                <section className='botton-body-section-order-contact-us-form'>
                    <h3><i>Connect with us !</i></h3>
                    <div>
                        <a href=""><img src={IconFacebookBlack} alt="ícono Facebook" /></a>
                        <a href=""><img src={IconTwitterBlack} alt="ícono Twitter" /></a>
                        <a href=""><img src={IconPinteresBlack} alt="ícono Pinterest" /></a>
                        <a href=""><img src={IconInstagramBlack} alt="ícono Instagram" /></a>
                        <a href=""><img src={IconLinkedInBlack} alt="ícono LinkedIn" /></a>
                    </div>
                    <img src={LocationMap} alt="mapa del lugar" />
                </section>
            </main>
            <footer className='footer-box-order-contact-us-form'>
                <img src={LogoWithBackground} alt="imagen fondo logo" />
                <div>
                    {/* <img src="" alt="logo empresa" /> */}
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