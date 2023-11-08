import React from "react";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css"
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";

const LoginPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch()
    const initialValues = {
        email: 'nishithakur04@gmail.com',
        password: 'Nishi@12356'
    }
    const onSubmit = (values) => {
        dispatch(login(true));
        navigation('/home');
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is Required").email("Email must be a valid Email"),
        password: Yup.string().required("Password is Required").min(6, 'Password should be atleast 6 characters long').max(20, 'Password must be at most 20 characters').matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            'Password must contain at least one digit, one lowercase letter, and one uppercase letter'
        )
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className={ `col-md-6 ${styles.wrapper}` }>
                        <div className="text-center">
                            <h2>Login</h2>
                        </div>
                        <Formik
                            initialValues={ initialValues }
                            onSubmit={ onSubmit }
                            validationSchema={ validationSchema }
                            validateOnMount
                        >
                            {
                                (formik) => {
                                    return (
                                        <Form onSubmit={ formik.handleSubmit }>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <Field type="text" className={ formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control" } name="email"></Field>
                                                <ErrorMessage name="email">
                                                    { (errorMessage) => (
                                                        <small className="text-danger">{ errorMessage }</small>
                                                    ) }
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <Field type="password" className={ formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control" } name="password" ></Field>
                                                <ErrorMessage name="password">
                                                    { (errorMessage) => (
                                                        <small className="text-danger">{ errorMessage }</small>
                                                    ) }
                                                </ErrorMessage>
                                            </div>

                                            <br />
                                            <p className="text-center">If you are new user? please <Link to="/register"> click here</Link> for registration
                                            </p>
                                            <div className="text-center">
                                                <button type="submit" value="Login" className="btn btn-dark DOP  ```3" disabled={ !formik.isValid }>Login</button>
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        </>
    );
}
export default LoginPage