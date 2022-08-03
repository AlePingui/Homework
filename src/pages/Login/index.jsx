import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import FieldForm from 'components/Field';
import styles from './login.module.css';
import { BsCheckLg } from 'react-icons/bs';
import { useRef, useEffect } from 'react';

// Este array simula uno extraido de una base de datos, igual aun no se como funcionan estas
let CLASS_CODES = ['yTph2fvcC732fsd', 'pPflbLfnf3FgnL'];

function Formulario({ isLogged }) {
    let navigate = useNavigate();

    return(
        <Formik
            initialValues={{
                username: '',
                password: '',
                classcode: '',
                remind: false
            }}

            validate={(values) => {
                let errors = {};

                if(values.username.trim() == "") {
                    errors.username = "Este campo no puede estar vacio.";
                }

                if(values.password.trim() == "") {
                    errors.password = "Este campo no puede estar vacio.";
                } else if(values.password.length < 5 || values.password.length > 16) {
                    errors.password = "La contraseña debe tener de 5 a 16 caracteres.";
                }

                if(!CLASS_CODES.find(code => code == values.classcode)) {
                    errors.classcode = "La clase no existe o esta mal escrito el código."
                }

                return errors;
            }}

            onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values);
                navigate('/home');
            }}
        >
            {({ errors, values, handleBlur }) => (
                <Form autoComplete="off">
                    {/* id, placeholder, type, name, onFocus, onBlur, err */}
                    <FieldForm
                        id="usr"
                        placeholder="Nombre de usuario"
                        type="text"
                        name="username"
                        handleBlur={handleBlur}
                        err={errors.username}
                    />
                    <FieldForm
                        id="pwd"
                        placeholder="Contraseña"
                        type="password"
                        name="password"
                        handleBlur={handleBlur}
                        err={errors.password}
                        // className="lastField"
                    />
                    <FieldForm
                        id="cde"
                        placeholder="Codigo de clase"
                        type="text"
                        name="classcode"
                        handleBlur={handleBlur}
                        err={errors.classcode}
                        // className="lastField"
                    />
                    <div className={styles.fieldCheck}>
                        <label htmlFor="chk" className={values.remind ? styles.remind : styles.remindless}>
                            <BsCheckLg className={values.remind ? styles.remindIcon : styles.remindlessIcon} />
                            <Field
                                type="checkbox"
                                id="chk"
                                name="remind"
                            />Recordarme
                        </label>
                    </div>
                    <button className={styles.button} type="submit">
                        {isLogged ? 'Inciar sesión' : 'Registrarse'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

// el isLogged y el remind van a venir desde localstorage
export default function LoginBox({ isLogged }) {
    return(
        <div className={styles.form}>
            <div className={styles.loginbox}>
                <div className={styles.body}>
                    <h2>{isLogged ? 'Inciar sesión' : 'Registrarse'}</h2>
                    <Formulario isLogged={isLogged} />
                </div>
                <div className={styles.footer}>
                    <Link to={isLogged ? '/register' : '/login'}>{isLogged ? 'Registrarse': 'Iniciar Sesión'}</Link>
                </div>
            </div>
        </div>
    );
}