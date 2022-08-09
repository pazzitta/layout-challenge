
const ProfileDetail = () => {
    return(
        <div>
            <header>
                <nav>
                    <img src="" alt="Logo" />
                    <form action="">
                        <input type="text" />
                        <button type="submit">Lupa</button>
                    </form>
                    <div>
                        <a href="">Find profile</a>
                        <div>
                            <a href="">Messages</a>
                            <h4>--</h4>
                        </div>
                        <a href="">My contacts</a>
                        <img src="" alt="Foto perfil" />
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <img src="" alt="Foto perfil" />
                        <small>Algo 0</small>
                    </div>
                    <div>
                        <div>
                            <h4>Spotify New York</h4>
                            <button>Algo 1</button>
                        </div>
                        <p>algo 2</p>
                        <p>algo 3</p>
                    </div>
                    <div>
                        <div>
                            <h4>Metropolitan Museum</h4>
                            <button>Algo 4</button>
                        </div>
                        <p>algo 5</p>
                        <p>algo 6</p>
                        <small>Algo 7</small>
                    </div>
                    <div>
                        <h5>Algo 8</h5>
                        <h5>Algo 9</h5>
                        <h5>Algo 10</h5>
                        <h5>Algo 11</h5>
                        <h5>Algo 12</h5>
                    </div>
                </section>
                <section>
                    <div>
                        <div>
                            <h1>Nombre Apellido</h1>
                            <img src="" alt="ícono localización" />
                            <small>Nombre lugar Loc.</small>
                            <button><img src="" alt="Banderita fav" />Like</button>
                            <h4>Profesión</h4>
                        </div>
                        <br />
                        <div>
                            <small>Valoración</small>
                            <div>
                                <h3>--</h3>
                                {/* creo que son inputs */}
                                <img src="" alt="estrellitas" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <button><img src="" alt="Mensaje ícono" />Send Message</button>
                            <button><img src="" alt="ícono tilde" />Contact</button>
                            <small>Algo 13</small>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div>
                            <a href="">
                                <img src="" alt="ícono algo 14" />
                                algo 14
                            </a>
                            <a href="">
                                <img src="" alt="ícono persona" />
                                About
                            </a>
                        </div>
                        <br />
                        <table>
                            <tr>
                                <td><small>Título 1</small></td>
                                <td><small>Título 2</small></td>
                            </tr>
                            <tr>
                                <td>Contenido 1 1</td>
                                <td>Contenido 1 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 2 1</td>
                                <td>Contenido 2 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 3 1</td>
                                <td>Contenido 3 2</td>
                            </tr>
                            <tr>
                                <td>Contenido 4 1</td>
                                <td>Contenido 4 2</td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <td><small>Título 1.2</small></td>
                                <td><small>Título 2.2</small></td>
                            </tr>
                            <tr>
                                <td>Contenido 1 1.2</td>
                                <td>Contenido 1 2.2</td>
                            </tr>
                            <tr>
                                <td>Contenido 2 1.2</td>
                                <td>Contenido 2 2.2</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default ProfileDetail;