import styles from './tareas.module.css';
import { useSearchParams } from 'react-router-dom';
import Lista from 'pages/TareasFiltradas';

// Voy a hacer q el map sea un componente aparte con un estado que sea el array
// y que cuando hago click en todas, asignadas u otro que cambie la funcion,
// la funcion se va a llamar dentro del estado con un useEffect()

// al final lo que voy a hacer es separar la lista en un componente aparte
// que va a ser una pagina, entonces aca importo link y uso los parametros
// de react router para que cuando se haga click en Todas vaya a /home/tareas?filter=Todas
// y en ese componente tareas filtradas, va a tener la funcion de getTask
// y el argumento de esta va a ser el parametro de la url

function Tareas() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleClick(filter = "Todas") {
        if(filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    }

    return(
        <div className={styles.Tareas}>
            <div className={styles.TareasHeader}>
                <button onClick={() => handleClick("Todas")}>Todas</button>
                <button onClick={() => handleClick("Asignadas")}>Asignadas</button>
                <button onClick={() => handleClick("Pendientes")}>Pendientes</button>
                <button onClick={() => handleClick("Completadas")}>Completadas</button>
            </div>
            <div className={styles.TareasContent}>
               <Lista filter={searchParams.get("filter")} />
            </div>
        </div>
    );
}

export default Tareas;
