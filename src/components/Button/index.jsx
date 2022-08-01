import styles from './button.module.css';

function roundedClass (rounded) {
    let res = (
        rounded == "4" ? styles.rounded4
        : rounded == "8" ? styles.rounded8
        : rounded == "10" ? styles.rounded10
        : rounded == "12" ? styles.rounded12
        : rounded == "14" ? styles.rounded14
        : ''
    );
    return res;
}

function themeClass (theme) {
    let res = (
        theme == "primary" ? styles.primary
        : theme == "secondary" ? styles.secondary
        : theme == "info" ? styles.info
        : theme == "warning" ? styles.warning
        : theme == "danger" ? styles.danger
        : theme == "success" ? styles.success
        : theme == "dark" ? styles.dark
        : theme == "light" ? styles.light
        : ''
    );
    return res;
}

function sizeClass (size) {
    let res = size == "lg" ? styles.largeButton : '';
    return res;
}

// Valores de rounded: 4 6 8 10 12 14
// Valores de theme: primary secondary info warning danger success dark light
export function Button ({ rounded, theme, message, fs, mr, size, onClick }) {
    return <button
        onClick={onClick}
        style={{fontSize: fs, marginRight: mr}}
        className={styles.btn + " " + roundedClass(rounded) + " " + themeClass(theme) + " " + sizeClass(size)}
    >
        {message}
    </button>
}

Button.defaultProps = {
    rounded: '12',
    theme: 'primary',
    message: 'message',
    fs: '1rem'
}
