import './checkOutForm.css'
import ImageSelect from '../../../assets/Forms/ContactUs/imageMenu.png'
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
                   {/* hasta acá llegué (15:53) */}
                    <section>
                        <h3>Need to Know Information</h3>
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
                    </section>
                    <section>
                        <h3>Special Requests*</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <small>* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis numquam.</small>
                    </section>
                    <section>
                        <div>
                            <header>
                                <h3>Payment and Confirmation</h3>
                                <img src="" alt="Logo de tarjeta" />
                            </header>
                            <div>
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
                            <div>
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
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I agree to the<u>Terms and conditions</u> understand cancellation policy</label>
                            </div>
                            <div>
                                <h2>Total:AU$2,076.06</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit dignissimos, impedit libero.</p>
                            </div>
                        </div>
                        <div>
                            <button>CheckOut Now</button>
                            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                        </div>
                    </section>
                </section>
                <article>
                    <p></p>
                    <img src="" alt="" />
                    <section>hols</section>
                    <section></section>
                    <section></section>
                </article>
            </main>
            <footer className="footer-components-order-checkOut-form">hay que ver si se hace!</footer>

        </div>
    )
}
export default CheckOutForm;