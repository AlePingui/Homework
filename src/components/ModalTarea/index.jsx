import styles from './modal.module.css';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { Button } from 'components/Button';

export default function ModalTarea ({ materias = [] } = {}) {
    return <div className={styles.modal}>
        <div className={styles.modalDialog}>
            <div className={styles.modalHeader}>
                <h3>Agregar Tarea</h3>
            </div>
            <div className={styles.modalBody}>
                {/* Nombre - Materia - Fecha - Imagen/PDF */}
                <Formik
                    initialValues={{
                        nombre: '',
                        materia: '',
                        fecha: '',
                        archivo: null
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
                    {() => (
                        <Form>
                            <div className={styles.input + " " + (false ? styles.active : '')}>
                                <label htmlFor="name">
                                    <Field name="nombre" id="nombre" type="text" />
                                    <span>Nombre</span>
                                </label>
                            </div>
                            <div className={styles.inputSelect}>
                                <label htmlFor="materia">
                                    <select name="materia" id="materia">
                                        {materias.map(materia => (
                                            <option key={materia} value={materia}>{materia}</option>
                                        ))}
                                    </select>
                                    <span>Materia</span>
                                </label>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="fecha">
                                    <input type="text" id="fecha" />
                                    <span>dd/mm</span>
                                </label>
                            </div>
                            <div className={styles.inputResource}>
                                <label htmlFor="resource">
                                    <input type="file" id="resource" />
                                    <span>Archivo</span>
                                </label>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles.modalFooter}>
                <Button message="Cancelar" theme="light" rounded="8" />
                <Button message="Aceptar" rounded="8" />
            </div>
        </div>
    </div>
}

// Agregue formik, pero no se actualiza el valor, voy a terminar de hacerlo
// con formik y dps veo cual es el error, tmb el boton me quedo afuera
// tengo q ver como se hace para hacer un submit con un boton que esta afuera
