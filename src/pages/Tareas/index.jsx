import styles from './tareas.module.css';
import Card from 'components/Card';
import { LIST_CARDS } from './listcards';

function Tareas() {
    return(
        <div className={styles.Tareas}>
            <div className={styles.TareasHeader}>
                <a href="#">Asignadas</a>
                <a href="#">Pendientes</a>
                <a href="#">Completadas</a>
            </div>
            <div className={styles.TareasContent}>
               {LIST_CARDS.map(item => (
                   <Card
                        state={item.state}
                        date={item.date}
                        title={item.title}
                        subject={item.subject}
                        cardType={item.cardType}
                        key={item.key}
                    />
               ))}
            </div>
        </div>
    );
}

export default Tareas;
