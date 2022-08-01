import styles from './tooltip.module.css';

export const showTooltip = styles.showTooltip;

export default function Tooltip({ text }) {
    return(
        <span className={styles.tooltip}>
            {text}
        </span>
    );
}
