
const NewsDetail = () => {
    return(
        <div>
            <header>
                <nav>
                    <div>
                        <img src="" alt="Isotipo" />
                        <h4>Nombre empresa</h4>
                    </div>
                    <div>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Detail</a>
                        {/* EL DETALLE ESTÁ CON UN FOCUS */}
                        <a href="">Contact</a>
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div>Soy una línea</div>
                    <h1>Título de la noticia</h1>
                    <h5>Breve descripción</h5>
                    {/* buscar como se llaman las partes de una noticia */}
                </section>
                <section>
                    <article>
                        <img src="" alt="ícono 1" />
                        <p>Descripción í 1</p>
                        <img src="" alt="ícono 2" />
                        <p>Descripción í 2</p>
                        <img src="" alt="ícono 3" />
                        <p>Descripción í 3</p>
                    </article>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint similique suscipit libero. Eligendi, mollitia! Blanditiis cum illum delectus. Modi perspiciatis nobis corrupti, exercitationem et rem accusamus excepturi aut distinctio.</p>
                </section>
                <section>
                    <img src="" alt="Imagen de la noticia" />
                    <div>
                        <small>Breve descripción</small>
                    </div>
                    {/* el div de arriba va a tener un borde superior para marcar la línea roja */}
                </section>
                <section>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.</p>
                        <div>
                            <img src="" alt="ícono" />
                            <small>Descripción í</small>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores molestiae rerum incidunt necessitatibus ipsa facere quae tempora nobis, totam voluptatem quo quod sint, unde perferendis fugit illum? Ipsa, reiciendis alias.</p>
                        <div>
                            <div>
                                <img src="" alt="ícono 2" />
                                <small>Descripción í 2</small>
                            </div>
                            <div>
                                <img src="" alt="ícono 3" />
                                <small>Descripción í 3</small>
                            </div>
                        </div>
                    </div>
                    <figure>
                        <img src="" alt="Imagen representativa" />
                        <figcaption>Descripción de la Imagen</figcaption>
                        <p>Detalle breve</p>
                    </figure>
                </section>
                <section>
                    <textarea name="comentario" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Add comment</button>
                </section>
            </main>
            <footer>
                <div>
                    <div>
                        <button>&lt;</button>
                        <small>Algo</small>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <small>Algo</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>&gt;</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default NewsDetail;