import CardOneDN from "./Cards/DigitalNewspaper/CardOneDN";
import IsologoDNP from '../../../assets/homes/DigitalNewsPaper/isologoDNP.png'
import AutorImage from '../../../assets/Cards/imageProfileP.jpg'
import IconWordlDNP from '../../../assets/homes/DigitalNewsPaper/iconWorldDNP.png'
import IconAtomDNP from '../../../assets/homes/DigitalNewsPaper/iconAtomDNP.png'
import IconPieChartDNP from '../../../assets/homes/DigitalNewsPaper/iconPieChartDNP.png'
import IconHandDNP from '../../../assets/homes/DigitalNewsPaper/iconHandDNP.png'
import IconBallDNP from '../../../assets/homes/DigitalNewsPaper/iconBallDNP.png'
import ImageSectionTwoDNP from '../../../assets/homes/DigitalNewsPaper/imageSectionTwo.png'
import ImageSectionThreeDNP from '../../../assets/homes/DigitalNewsPaper/imageSectionThree.jpg'
import TeamOneShieldDNP from '../../../assets/homes/DigitalNewsPaper/teamOneShield.png'
import TeamTwoShieldDNP from '../../../assets/homes/DigitalNewsPaper/teamTwoShield.png'


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
                        <h6>Politic</h6>
                        <p>fecha</p>
                    </div>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, delectus! Quisquam cum praesentium ratione doloribus.</h2>
                </section>
                <section className="section-two-body-digital-newspaper-homes">
                    <div className="box-left-news-section-two-body-digital-newspaper-homes">
                        <article>
                            <div>
                                <img src={IconHandDNP} alt="Isotipo" />
                                <h6>Politic</h6>
                                <p>fecha</p>
                            </div>
                            <h4>Trump's Twitter war Friday hits multiple targets</h4>
                            <p className="crest-news-igital-newspaper-homes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </article>
                        <article>
                            <div>
                                <img src={IconBallDNP} alt="Isotipo" />
                                <h6>Sport</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>Watson's TD lifts Texans over Bengals in slog</h4>
                            <p className="crest-news-igital-newspaper-homes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, blanditiis nisi ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </article>
                    </div>
                    <div className="box-right-news-section-two-body-digital-newspaper-homes">
                        <img src={ImageSectionTwoDNP} alt="Imagen noticia 1" />
                        <div className="internal-box-image-right-news-section-two-body-digital-newspaper-homes">
                            <div>
                                <img src={IconAtomDNP} alt="Isotipo" />
                                <h6>Technology</h6>
                                <p>fecha</p>
                            </div>
                            <h4>Tim Cook talks about the future</h4>
                        </div>
                    </div>
                </section>
                    <section className="section-three-body-digital-newspaper-homes">
                        <img src={ImageSectionThreeDNP} alt="Imagen noticia 2" />
                        <div>
                            <article>
                                <div className="box-section-and-date-body-digital-newspaper-homes">
                                    <img src={IconBallDNP} alt="Isotipo" />
                                    <h6>Sport</h6>
                                    <p>fecha</p> 
                                </div>
                                <h4>Chicago Bears wins the title for the best team</h4>
                            </article>
                            <section className="box-result-body-digital-newspaper-homes">
                                <div><img src={TeamOneShieldDNP} alt="Escudo 1" /></div>
                                <h3>8<i>-</i>6</h3>
                                <div><img src={TeamTwoShieldDNP} alt="Escudo 2" /></div>
                            </section>
                        </div>
                    </section>

                    <section className="section-four-body-digital-newspaper-homes">
                        <article className="article-one-section-four-body-digital-newspaper-homes">
                            <div className="box-section-and-date-body-digital-newspaper-homes">
                                <img src={IconHandDNP} alt="Isotipo" />
                                <h6>Sección</h6>
                                <p>fecha</p> 
                            </div>
                            <h4>When U.N. Envoy Nikki Haley Talks, Does President Trump Listen?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa 
                                commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa 
                                commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa 
                                commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa 
                                commodi hic, temporibus dolor nihil officia cumque ut veniam nostrum omnis vel! Ipsa nostrum.
                .</p>
                        </article>
                        <div className="article-two-section-four-body-digital-newspaper-homes">
                            <article>
                                <div className="box-section-and-date-body-digital-newspaper-homes">
                                    <img src={IconPieChartDNP} alt="Isotipo" />
                                    <h6>Money</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>You Don't have to Be College-Bound to Take a Gap Year</h4>
                            </article>
                            <article>
                                <div className="box-section-and-date-body-digital-newspaper-homes">
                                    <img src={IconAtomDNP} alt="Isotipo" />
                                    <h6>Technology</h6>
                                    <p>fecha</p>
                                </div>
                                <h4>Facebook Navigates an Internet Fractured by Governmental Controls</h4>
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