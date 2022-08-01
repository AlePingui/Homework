import { Nav, Brand } from './components/Topbar';
import { Button } from './components/Button';
import { useNavigate } from 'react-router-dom';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import styles from './app.module.css';

function App() {
    let navigate = useNavigate();
    return (
        <div className={styles.App}>
            <header>
                <Nav justify="between">
                    <Brand path="/" isMenuEnabled={false} />
                    <div>
                        <Button
                            onClick={() => navigate('/signup')}
                            mr="6px"
                            theme="light"
                            rounded="12"
                            message="Registrarse"
                        />
                        <Button
                            theme="primary"
                            rounded="12"
                            message="Entrar"
                            onClick={() => navigate('/login')}
                        />
                    </div>
                </Nav>
            </header>
            <main className={styles.main}>
                <header>
                    <h2 className={styles.headingTitle}>
                        Guarda o comparte tus tareas y resúmenes con tus compañeros de clase
                    </h2>
                </header>
                <section className={styles.description}>
                    <p>
                        Homework es una app diseñada para poder ayudarse entre compañeros, 
                        pasar tareas, resúmenes y dar explicaciones de algúna materia o ejercicio.
                        Para registrarte vas a necesitar el codigo de tu clase, asi que verifica que tu 
                        clase exista. Un usuario no puede crear clases, solo el programador puede hacerlo, 
                        ya que Homework fue diseñado para un uso propio.
                    </p>
                    <div>
                        <Button
                            onClick={() => navigate('/signup')}
                            size="lg"
                            fs="1.4rem"
                            mr="16px"
                            theme="light"
                            rounded="14"
                            message="Registrarse"
                        />
                        <Button
                            size="lg"
                            fs="1.4rem"
                            theme="primary"
                            rounded="14"
                            message="Entrar"
                            onClick={() => navigate('/login')}
                        />
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <a target="_blank" href="https://www.instagram.com/alepingui06/"><BsCode /> 2022 Alejo Molla <BsCodeSlash /></a>
            </footer>
        </div>
    );
}

export default App;
