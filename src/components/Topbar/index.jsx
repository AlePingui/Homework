import { useState } from 'react';
import styles from './topbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

// React Icons
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFilePlus } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

function justifyClass (justify) {
    let res = (
        justify == "start" ? styles.start
        : justify == "center" ? styles.center
        : justify == "end" ? styles.end
        : justify == "between" ? styles.between
        : styles.start
    );
    return res;
}

export function Brand ({ onClick, path, isMenuEnabled }) {
    return <div className={styles.brand}>
        {isMenuEnabled &&
            <button onClick={onClick}>
                <HiMenu />
            </button>
        }
        <Link to={path}><img src={logo} alt="logo-diseñado-por-vegui" /></Link>
    </div>
}

export function Nav ({ children, className, justify }) {
    return <nav className={styles.topbar + " " + justifyClass(justify) + " " + className}>
        {children}
    </nav>
}

export default function Topbar({ username, onClick, className }) {
    const [searchValue, changeSearchValue] = useState('');
    return(
        <Nav className={className}>
            {/* Parte de la navegación */}
            <div className={styles.topbarBody}>
                <Brand path="/home" onClick={onClick} isMenuEnabled={true} />
                <div className={styles.topbarSearch}>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => changeSearchValue(e.target.value)}
                        placeholder="Buscar Tarea..."
                    />
                    <div>
                        <button className={styles.addButton}>
                            <BsFilePlus />
                        </button>
                    </div>
                </div>
            </div>

            {/* Parte de opciones de usuario */}
            <div className={styles.topbarUtilities}>
                <button>
                    <span>{username}</span> <FaRegUserCircle />
                </button>
            </div>
        </Nav>
    );
}