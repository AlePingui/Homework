import styles from './card.module.css';
import { CARD_STYLES, STATE_COLORS } from './config';
import { BsCheckSquare } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

function typeClass (cardType) {
    return cardType == "cardRed"? styles.cardRed
        : cardType == "cardBlue" ? styles.cardBlue
        : cardType == "cardBlack" ? styles.cardBlack
        : cardType == "cardGrey" ? styles.cardGrey
        : styles.cardYellow
}

export default function Card({state, cardType, date, title, subject}) {
    return(
        <div className={styles.card + ' ' + typeClass(cardType)}>
            <div className={styles.cardHeader}>
                <h2>{title}</h2>
                <h3>{subject}</h3>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.pdfViewer}>
                    <div><BsFillFileEarmarkTextFill /></div>
                </div>
                <div className={styles.description}>
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
            <div className={styles.cardFooter}>
                <span>Fecha de entrega:</span>
                <span id="fecha">{date}</span>
            </div>
        </div>
    );
}

Card.defaultProps = {
    state: "Desconocido",
    date: "27/05/22",
    title: "Titulo de la tarea",
    subject: "Materia",
    cardType: CARD_STYLES[Math.round(Math.random()*CARD_STYLES.length-1)]
}
