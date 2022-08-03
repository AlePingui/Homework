import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LateralMenu from 'components/LateralMenu';
import Topbar from 'components/Topbar';
import styles from './home.module.css';
import Context from 'context/collapseContext';

function Home () {
    const [collapse, setCollapse] = useState(false);

    // Events Handlers
    function handleClick() {
        setCollapse(!collapse)
    }

    // Render
    return(
        <Context.Provider value={{collapse}}>
            <div className={styles.Home + (collapse ? ` ${styles.HomeCollapse}` : '')}>
                {/* El username va a venir desde la base de datos */}
                <Topbar className={styles.Topbar} username="Alejo Molla" onClick={handleClick} />
                <LateralMenu className={styles.LateralMenu} />
                <Outlet className={styles.Outlet} />
            </div>
        </Context.Provider>
    );
}

export default Home;
