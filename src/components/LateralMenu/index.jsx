import { useContext } from 'react';
import styles from './lateralmenu.module.css';
import MenuItem from '../MenuItem';
import Context from '../../context/collapseContext';

// Data Arrays
import { MENU_ITEMS, SUBJECTS } from './data';

function List ({ arr }) {
    const { collapse } = useContext(Context);
    
    return <ul className={arr ? styles.ListCollapse : ''}>
        {arr.map(({title, icon}) => (
            <MenuItem key={title} title={title} icon={icon} />
        ))}
    </ul>
}

export default function LateralMenu ({ className }) {
    return <div className={styles.lateralMenu + " " + className}>
        <div className={styles.content}>
            <List arr={MENU_ITEMS} />
            <List arr={SUBJECTS} />
        </div>
    </div>
}
