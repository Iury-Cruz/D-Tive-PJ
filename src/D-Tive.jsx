import pointsicon from './icons/file-search.png'
import detectiveicon from './icons/detective.png'
import searchicon from './icons/lkcode.png'
import keyicon from './icons/keyboard.png'
import micicon from './icons/mic.png'
import cameraicon from './icons/camera.png'

function DTive(){

    return(

        <>
        
        <header className="header-top-container">

            <div className="div-top-container">

                <nav className="nav-top-container">
                    <ul className="ul-top-container">
                        <li>
                            <a className='gmail-top-container' href="">

                                Gmail

                            </a>
                        </li>
                        <li>
                            <a className='images-top-container' href="">
                                Imagens
                            </a>
                        </li>
                        <li className="dtive-apps-container">
                            <a href="">

                            <img src={pointsicon} alt="Apps" />
                             {/* <span>img</span> */}

                            </a>
                        </li>
                        <li className="dtive-user-container">
                            <a href="">

                                <img src={detectiveicon} alt="User" />
                                {/* <span>img</span> */}

                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>

        <section className='section-container'>
            <div className='div-section-container'>
                <h1 className='h1-section-container'>D-Tive</h1>
            </div>
            <div className='div-2-section-container'>
                <a className='search-a-container' href="">
                    <img src={searchicon} alt="" />
                </a>
                <input type="search" className='search-container' />
                <a className='key-a-container' href="">
                    <img src={keyicon} alt="" />
                </a>
                <a className='mic-a-container' href="">
                    <img src={micicon} alt="" />
                </a>
                <a className='camera-a-container' href="">
                    <img src={cameraicon} alt="" />
                </a>
            </div>

            <div className='div-3-section-container'>
                <input className='button-1-section-container' type="button" value="Pesquisa D-Tive" />
                <input className='button-2-section-container' type="button" value="Estou com sorte" />
            </div>
        </section>

        <footer className='footer-container'>
            <div className='div-1-footer-container'>
                <p className='p-1-footer-container'>Brasil</p>
            </div>
            <div className='div-2-footer-container'>
                <ul className='ul-1-footer-container'>
                    <div className='div-1-ul-footer-container'>
                        <li>Sobre</li>
                        <li>Publicidade</li>
                        <li>Negócios</li>
                        <li>Como funciona a Pesquisa</li>
                    </div>
                    <div className='div-ul-footer-spacer-container'></div>
                    <div className='div-2-ul-footer-container'>
                        <li>Privacidade</li>
                        <li>Termos</li>
                        <li>Configurações</li>
                    </div>
                </ul>
            </div>
        </footer>
        
        
        </>


    )
}

export default DTive