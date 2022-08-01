// import { useRef } from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './field.module.css';

function InvalidFeedback({error}) {
    return(
        <div className={styles.errorMessage}>
            <p>{error}</p>
        </div>
    );
}

export default function FieldForm ({id, placeholder, type, name, handleBlur , err, className}) {
    // const ref = useRef();

    // Handle Events
    function handleFieldFocus(e) {
        let label = e.target.parentNode;
        label.classList.add(styles.focusLabel);
    }

    function handleFieldBlur(e) {
        let label = e.target.parentNode;
        if(e.target.value == "") {
            label.classList.remove(styles.focusLabel);
        }
    }

    return <div className={styles.field + (className == "lastField" ? " " + styles.lastField : '')}>
        <label htmlFor={id}>
            <span>{placeholder}</span>
            <Field
                type={type}
                id={id}
                name={name}
                onFocus={handleFieldFocus}
                onBlur={(e) => {handleBlur(e); handleFieldBlur(e)}}
            />
        </label>
        <ErrorMessage name={name} component={() => <InvalidFeedback error={err} />} />
    </div>
}