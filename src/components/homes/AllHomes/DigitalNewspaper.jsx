import CardOneDN from "./Cards/DigitalNewspaper/CardOneDN";
import IsologoDNP from '../../../assets/homes/DigitalNewsPaper/isologoDNP.png'
import AutorImage from '../../../assets/Cards/imageProfileP.jpg'
import IconWordlDNP from '../../../assets/homes/DigitalNewsPaper/iconWorldDNP.png'
import IconAtomDNP from '../../../assets/homes/DigitalNewsPaper/iconAtomDNP.png'
import IconPieChartDNP from '../../../assets/homes/DigitalNewsPaper/iconPieChartDNP.png'
import IconHandDNP from '../../../assets/homes/DigitalNewsPaper/iconHandDNP.png'
import IconBallDNP from '../../../assets/homes/DigitalNewsPaper/iconBallDNP.png'



const DigitalNewspaper = () =>{
    return(
        <div className="box-macro-digital-newspaper-homes">
            <section className="box-vertical-nav-digital-newspaper-homes">
                <nav>
                    <div className="isologo-vertical-nav-digital-newspaper-homes">
                        <img src={IsologoDNP} alt="Isotipo" />
                    </div>
                    <div className="order-ancords-vertical-nav-digital-newspaper-homes">
                        <a href=""><img src={IconWordlDNP} alt="ícono mundo" /></a>
                        <a href=""><img src={IconAtomDNP} alt="ícono átomo" /></a>
                        <a href=""><img src={IconPieChartDNP} alt="ícono gráfico de torta" /></a>
                        <a href=""><img src={IconHandDNP} alt="ícono saludo de manos" /></a>
                        <a href=""><img src={IconBallDNP} alt="ícono pelota" /></a>                        
                    </div>
                    <img className="autor-image-vertical-nav-digital-newspaper-homes" src={AutorImage} alt="Imagen autor" />
                </nav>
            </section>
            <section className="box-body-digital-newspaper-homes">
                <nav>
                    <div className="box-buttons-body-digital-newspaper-homes">
                        <button>#noticia1</button>
                        <button>#noticia2</button>
                        <button>#noticia3</button>
                        <button>#noticia4</button>
                    </div>
                    <div className="box-search-body-digital-newspaper-homes">
                        <label htmlFor="">Search</label>
                        {/* <input type="text" placeholder="Search" /> */}
                        <button></button>
                    </div>
                </nav>               
                <section className="section-one-body-digital-newspaper-homes">
                    <div>
                        <img src={IconHandDNP} alt="Isotipo" />
                        <h6>Sección</h6>
                        <p>fecha</p>
                    </div>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, delectus! Quisquam cum praesentium ratione doloribus.</h2>
                </section>
                    <section>
                        <article>
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p>
                            </div>
                            <h4>Título Noticia 1</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione.</p>
                        </article>
                        <article>
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>Título Noticia 2</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione.</p>
                        </article>
                        <div>
                            <img src="" alt="Imagen noticia 1" />
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p>
                            </div>
                            <h4>Título Imagen 3</h4>
                        </div>
                    </section>
                    <hr />
                    <section>
                        <img src="" alt="Imagen noticia 2" />
                        <article>
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>Título Noticia </h4>
                        </article>
                        <div><img src="" alt="Escudo 1" /></div>
                        <h3>Resul</h3>
                        <div><img src="" alt="Escudo 2" /></div>
                    </section>
                    <section>
                        <article>
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>Título Noticia </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.</p>
                        </article>
                        <div>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                            </article>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                            </article>
                        </div>
                    </section>
                    <section>
                        <div>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                            </article>
                            <div>
                                <div>
                                    <img src="" alt="ícono +" />
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </div>
                                <div>
                                    <img src="" alt="ícono +" />
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                                </div>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <img src="" alt="Imagen .png" />
                    </section>
                    <section>
                        <article>
                            <h4>Stock Spotlight</h4>
                            <CardOneDN/>
                            <CardOneDN/>
                            <CardOneDN/>
                        </article>
                        <div>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.</p>
                            </article>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.</p>
                            </article>
                        </div>
                    </section>
                    <section>
                        <div>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h3>Título Noticia </h3>
                            </article>
                            <img src="" alt="Gráfico (como el de torta pero con columnitas)" />
                        </div>
                        <img src="" alt="Imágen noticia" />
                    </section>
                    <section>
                        <div>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                            </article>
                            <article>
                                <div>
                                    <img src="" alt="Isotipo" />
                                    <h6>Sección</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Título Noticia </h4>
                            </article>
                        </div>
                        <article>
                            <div>
                                <img src="" alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>Título Noticia </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.</p>
                        </article>
                    </section>
                </section>
        </div>
    )
}
export default DigitalNewspaper;