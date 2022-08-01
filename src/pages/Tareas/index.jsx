import style from './tareas.module.css';
import { BsCheckSquare } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

const STATE_COLORS = {
    Asignada: "#17B1D2",
    Pendiente: "#FF4545",
    Completada: "#32E364",
    Desconocido: "#444444"
}

function Card({state, cardType, date, title, subject}) {
    return(
        <div className={style.card + ' ' + (
            cardType == "cardRed" ? style.cardRed
            : cardType == "cardBlue" ? style.cardBlue
            : cardType == "cardBlack" ? style.cardBlack
            : cardType == "cardGrey" ? style.cardGrey
            : style.cardYellow
        )}>
            <div className={style.cardHeader}>
                <h2>{title}</h2>
                <h3>{subject}</h3>
            </div>
            <div className={style.cardBody}>
                <div className={style.pdfViewer}>
                    <div><BsFillFileEarmarkTextFill /></div>
                </div>
                <div className={style.description}>
                    <span
                        id="estado"
                        value={state}
                        style={{color: STATE_COLORS[state]}} 
                    >
                        {state}
                    </span>
                    <div>
                        <button>
                            <IoMdTrash />
                        </button>
                        <button>
                            <BsCheckSquare />
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.cardFooter}>
                <span>Fecha de entrega:</span>
                <span id="fecha">{date}</span>
            </div>
        </div>
    );
}

let CARD_STYLES = ['cardRed', 'cardBlue', 'cardBlack', 'cardGrey', 'cardYellow'];

Card.defaultProps = {
    state: "Desconocido",
    date: "27/05/22",
    title: "Titulo de la tarea",
    subject: "Materia",
    cardType: CARD_STYLES[Math.round(Math.random()*CARD_STYLES.length-1)]
}

const listCards = [
    {
        "state": "Asignada",
        "date": "27/05/2022",
        "title": "Enlaces covalentes",
        "subject": "Quimica II",
        "cardType": "cardBlue",
        "key": "quimica-802"
    },
    {
        "state": "Pendiente",
        "date": "20/05/2022",
        "title": "Resumen del libro Geografia V",
        "subject": "Geografia",
        "cardType": "cardGrey",
        "key": "geografia-082"
    },
    {
        "state": "Asignada",
        "date": "27/05/2022",
        "title": "Funciones Lineales",
        "subject": "Analisis Matematico",
        "cardType": "cardYellow",
        "key": "amatematica-0321"
    },
    {
        "state": "Pendiente",
        "date": "23/04/2022",
        "title": "Historia - Red conceptual",
        "subject": "Historia",
        "cardType": "cardBlack",
        "key": "historia-312"
    },
    {
        "state": "Asignada",
        "date": "30/05/2022",
        "title": "Oscar Mayer",
        "subject": "Geografia",
        "cardType": "cardBlue",
        "key": "oscarl07"
    },
    {
        "state": "Completada",
        "date": "20/05/2022",
        "title": "Resumen del libro",
        "subject": "Literatura",
        "cardType": "cardRed",
        "key": "literatura-082"
    },
    {
        "state": "Asignada",
        "date": "27/05/2022",
        "title": "Mariano Lamadrid",
        "subject": "Circuitos",
        "cardType": "cardGrey",
        "key": "mariano080"
    },
    {
        "state": "Asignada",
        "date": "30/05/2022",
        "title": "Jorgito el Glafico",
        "subject": "Salud y Adolescencia",
        "cardType": "cardYellow",
        "key": "glafico-milanesa-0214"
    },
    {
        "state": "Pendiente",
        "date": "27/05/2022",
        "title": "Lo peor de todo",
        "subject": "Politica y ciudadania",
        "cardType": "cardBlack",
        "key": "miriam-b-naider"
    }
];

function Tareas() {
    return(
        <div className={style.Tareas}>
            <div className={style.TareasHeader}>
                <a href="#">Asignadas</a>
                <a href="#">Pendientes</a>
                <a href="#">Completadas</a>
            </div>
            <div className={style.TareasContent}>
               {listCards.map(item => (
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
