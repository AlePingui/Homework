import { useState } from 'react';
import styles from './modal.module.css';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { Button } from 'components/Button';

function Fieldset ({ field, name, placeholder, type, blurFunction }) {
    const [isActive, setActive] = useState(false);
    const [loaded, setLoad] = useState(false);
    
    const handleInputFocus = () => setActive(prevState => !prevState);

    function handleInputBlur (evt) {
        blurFunction(evt);
        setActive(prevState => !prevState);
    }

    function handleFile (evt) {
        let element = evt.target;
        
        if (element.value != "") setLoad(true);
        else setLoad(false);
    }

    if (type == "file") {
        return <div className={styles.fileinput + (loaded ? " " + styles.fileinput_active : '')}>
            <label htmlFor={name}>
                <Field name={name} id={name} type="file" onChange={handleFile} />
                <span>{placeholder}</span>
            </label>
        </div>
    }

    return <div
        className={styles.input + (isActive ? " " + styles.input_active : '')}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
    >
        <label htmlFor={name}>
            {field}
            <span>{placeholder}</span>
        </label>
    </div>
}

export default function ModalTarea ({ materias = [], closeModal } = {}) {
    const handleCloseModal = () => closeModal(false);

    return <div className={styles.modal}>
        <div className={styles.modal__dialog}>
            <div className={styles.modal__header}>
                <h3>Agregar Tarea</h3>
            </div>
            <div className={styles.modal__body}>
                {/* Nombre - Materia - Fecha - Imagen/PDF */}
                <Formik
                    initialValues={{
                        nombre: '',
                        materia: '',
                        fecha: '',
                        archivo: ''
                    }}

                    validate={(values) => {
                        let errors = {};

                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {
                        resetForm();
                        console.log(values);
                    }}
                >
                    {({ errors, handleBlur }) => (
                        <Form>
                            <Fieldset
                                name="nombre"
                                field={<Field name="nombre" id="nombre" type="text" />}
                                placeholder="Nombre"
                                blurFunction={handleBlur}
                            />

                            <Fieldset
                                name="materia"
                                field={<Field name="materia" id="materia" type="text" />}
                                placeholder="Materia"
                                blurFunction={handleBlur}
                            />

                            <Fieldset
                                name="fecha"
                                field={<Field name="fecha" id="fecha" type="text" />}
                                placeholder="Fecha de Entrega"
                                blurFunction={handleBlur}
                            />

                            <Fieldset
                                name="archivo"
                                placeholder="ADJUNTAR ARCHIVO"
                                type="file"
                            />

                            <div className={styles.buttonContainer}>
                                <Button message="Cancelar" type="button" onClick={handleCloseModal} theme="light" rounded="8" />
                                <Button message="Aceptar" type="submit" rounded="8" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
}
