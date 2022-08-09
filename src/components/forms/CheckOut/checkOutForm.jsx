import './checkOutForm.css'
import IconCard from '../../../assets/Forms/CheckOut/iconCard.png'
import ImageRoom from '../../../assets/Forms/CheckOut/imageRoom.jpg'

const CheckOutForm = () =>{
    return(
        <div className="all-page-order-checkOut-form">
            <header className="header-components-order-checkOut-form">
                <nav>
                    <div className='brand-name-order-checkOut-form'>
                        <h2>VOSSY</h2>
                        <p>BETA</p>
                    </div>
                    <div className='order-right-box-nav-checkOut-form'>
                        <p>Country</p>
                        <select name="" id="">
                            <option value="">Aus</option>
                            <option value="">Arg</option>
                            <option value="">Chi</option>
                            <option value="">Per</option>
                            <option value="">Tur</option>
                        </select>
                    </div>
                </nav>
                <div>
                    {/* <img src="" alt="Isotipo de algo" /> */}
                    <div></div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </div>
            </header>
           
            <main className="body-components-order-checkOut-form">
                <section>
                    <h1>Complete Your Booking</h1>
                    <section className='order-of-internal-sections-body-checkOut-form'>
                        <h3>Gues Details</h3>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>algo1</small>
                                    <span>soy una advertencia</span>
                                </div>
                                <div>
                                    <small>algo2</small>
                                    <span>soy una advertencia 2</span>
                                </div>                               
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>algo3</small>
                                    <span>soy una advertencia 3</span>
                                </div>
                                <div>
                                    <small>algo4</small>
                                    <span>soy una advertencia 4</span>
                                </div>                               
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <section  className='order-of-internal-sections-body-checkOut-form'>
                        <h3>Billing Details</h3>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>alg0 1</small>
                                    <span>soy una advertencia</span>
                                </div>
                                <div>
                                    <small>algo2</small>
                                    <span>soy una advertencia 2</span>
                                </div>                               
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>algo3</small>
                                    <span>soy una advertencia3</span>
                                </div>
                                <div>
                                    <small>algo4</small>
                                    <span>soy una advertencia 2</span>
                                </div>                               
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>algo5</small>
                                    <span>soy una advertencia5</span>
                                </div>
                                <div>
                                    <small>algo6</small>
                                    <span>soy una advertencia 6</span>
                                </div>                               
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='top-box-order-input-sections-body-checkOut-form'>
                            <div>
                                <div>
                                    <small>algo7</small>
                                    <span>soy una advertencia7</span>
                                </div>
                                <div>
                                    <small>algo8</small>
                                    <span>soy una advertencia 8</span>
                                </div>                               
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                                <input type="text" />
                            </div>
                        </div>                           
                    </section>                 
                    <section className='order-of-internal-sections-body-checkOut-form'>
                        <h3>Need to Know Information</h3>
                        <div>
                            <details>
                                    <summary>Cancellation Policy</summary>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque est, minus placeat fugit ipsa error 
                                        delectus culpa perspiciatis accusantium voluptatum veritatis consequatur blanditiis dolorem explicabo, 
                                        aliquam incidunt repudiandae alias. Illum!
                                    </p>
                            </details>
                            <details>
                                    <summary>Check In Instructions</summary>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque est, minus placeat fugit ipsa error 
                                        delectus culpa perspiciatis accusantium voluptatum veritatis consequatur blanditiis dolorem explicabo, 
                                        aliquam incidunt repudiandae alias. Illum!
                                    </p>
                            </details>
                            <details>
                                    <summary>Hotel policy</summary>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque est, minus placeat fugit ipsa error 
                                        delectus culpa perspiciatis accusantium voluptatum veritatis consequatur blanditiis dolorem explicabo, 
                                        aliquam incidunt repudiandae alias. Illum!
                                    </p>
                            </details>
                        </div>
                    </section>
                    <section className='order-of-internal-sections-body-checkOut-form'>
                        <h3>Special Requests*</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <small>* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis numquam.</small>
                    </section>
                    <section className='order-of-internal-sections-body-checkOut-form'>
                        <div className='order-top-section-of-payment-and-confirmation-checkOut-form'>
                            <header>
                                <h3>Payment and Confirmation</h3>
                                <img src={IconCard} alt="Logo de tarjeta" />
                            </header>
                            <div className='top-box-order-input-sections-body-checkOut-form'>
                                <div>
                                    <div>
                                        <small>algo1</small>
                                        <span>soy una advertencia1</span>
                                    </div>
                                    <div>
                                        <small>algo2</small>
                                        <span>soy una advertencia 2</span>
                                    </div>                               
                                </div>
                                <div>
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='botton-box-order-input-sections-body-checkOut-form'>
                                <div>
                                    <div>
                                        <small>algo3</small>
                                        <span>soy una advertencia3</span>
                                    </div>
                                    <div>
                                        <small>algo4</small>
                                        <span>soy una advertencia 4</span>
                                    </div>                               
                                </div>
                                <div>
                                    <input type="text" />
                                    <div>
                                        <input type="text" />
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className='order-terms-and-conditions-checkOut-form'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I agree to the<u>Terms and conditions</u> understand cancellation policy</label>
                            </div>
                            <div className='order-price-checkOut-form'>
                                <h2>Total: AU$2,076.06</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit dignissimos, impedit libero.</p>
                            </div>
                        </div>
                    </section>
                    <div className='order-botton-section-of-payment-and-confirmation-checkOut-form'>
                        <button>CheckOut Now</button>
                        <small>Lorem ipsum dolor sit amet.</small>
                    </div>
                </section>
                <article>
                    <article>
                        <p>&#10004; Best algo algomaslargo</p>
                        <img src={ImageRoom} alt="imagen habitación" />
                        <section>
                            <h3>The St. Regis New York</h3>
                            <p>Direccion lugar- Zona ciudad</p>
                        </section>
                        <section>
                            <table>
                                <tr>
                                    <td>Check in:</td>
                                    <td><b><font color='black'>Wed, Feb. 18 2015</font></b></td>
                                </tr>
                                <tr>
                                    <td>Check Out:</td>
                                    <td><b><font color='black'>Fei, feb. 20 2015</font></b></td>
                                </tr>
                                <tr>
                                    <td>Room type:</td>
                                    <td><b><font color='black'>Superior Room, 1 King Bed, Non Smoking</font></b></td>
                                </tr>
                                <tr>
                                    <td>Rooms:</td>
                                    <td><b><font color='black'>1</font></b></td>
                                </tr>
                                <tr>
                                    <td>Guests:</td>
                                    <td><b><font color='black'>2</font></b></td>
                                </tr>
                                <tr>
                                    <td>Refundable:</td>
                                    <td><b><font color='black'>Yes</font></b></td>
                                </tr>
                            </table>
                        </section>
                        <section>
                            <div>
                                <p>Room price</p>
                                <h3>AU$1,801.30</h3>
                            </div>
                            <div>
                                <p>Hotel occupancy and sales tai</p>
                                <h3>AU$265,63<u>algo algo</u></h3>
                            </div>
                            <div>
                                <p>Tax ni idea ni idea and lala lalala</p>
                                <h3>AU$274,76<u>algo algo</u></h3>
                            </div>
                            <div>
                                <p>Total:</p>
                                <h3>AU$2,076.00</h3>
                            </div>
                        </section>
                    </article>
                </article>
            </main>
            <footer className="footer-components-order-checkOut-form">hay que ver si se hace!</footer>

        </div>
    )
}
export default CheckOutForm;