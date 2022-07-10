
const PeopleCard = () => {
    return(
        <div>
            <header>
                <button>Like</button>
            </header>
            <div>
                <img src="" alt="Imagen perfil" />
                <h2>Nombre Apellido</h2>
                <div>
                    <div>
                        <img src="" alt="Ícono personas" />
                        <p>Followers</p>
                        <h3>------</h3>
                    </div>
                    <div>
                        <img src="" alt="Íconos views" />
                        <p>Views</p>
                        <h3>------</h3>
                    </div>
                    <div>
                        <img src="" alt="Ícono videos" />
                        <p>Videos</p>
                        <h3>----</h3>
                    </div>
                </div>
                
            </div>
            <footer>
                <button>View profile</button>
                <button>Ícono add</button>
            </footer>
        </div>
    )
}
export default PeopleCard;