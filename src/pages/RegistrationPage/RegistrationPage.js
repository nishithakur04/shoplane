import styles from "./RegistrationPage.module.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const RegistrationPage = () => {
    const [isSuccessful, setIsSuccessful] = useState(false);

    const initialValues = {
        firstName: 'Nishi',
        lastName: 'Thakur',
        email: 'nishithakur04@gmail.com',
        password: 'Nishi@12356',
        confirmPassword: 'Nishi@12356'
    }
    const onSubmit = (values) => {
        setIsSuccessful(!isSuccessful)
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Firstname is Required"),
        lastName: Yup.string().required("Lastname is Required"),
        email: Yup.string().required("Email is Required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is Required").min(6, 'Password should be atleast 6 characters long').max(20, 'Password must be at most 20 characters').matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            'Password must contain at least one digit, one lowercase letter, and one uppercase letter'
        ),
        confirmPassword: Yup.string().required("confirm Password is Required").oneOf([Yup.ref('password'), null], 'passwords must match'),
    });
    const formik = useFormik({
        initialValues, onSubmit, validationSchema, validateOnMount: true
    });
    return (
        <>
            <div className="container" >
                <div className="row">
                    <div className="col-md-3"></div>
                    { isSuccessful ? <div className={ `col-md-6 ${styles.wrapper}` } >
                        you are successfully register. Please <Link to="/">Click here</Link> to Login.
                    </div> : <div className={ `col-md-6 ${styles.wrapper}` }>
                        <div className="text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={ formik.handleSubmit }>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className={ formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control" } name="firstName" value={ formik.values.firstName } onChange={ formik.handleChange } onBlur={ formik.handleBlur }></input>
                                { formik.touched.firstName && formik.errors.firstName ? (<small className="text-danger">{ formik.errors.firstName }</small>) : null }
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className={ formik.touched.lastName && formik.errors.lastName ? "form-control is-invalid" : "form-control" } name="lastName" value={ formik.values.lastName } onChange={ formik.handleChange } onBlur={ formik.handleBlur }></input>
                                { formik.touched.lastName && formik.errors.lastName ? (<small className="text-danger">{ formik.errors.lastName }</small>) : null }
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" className={ formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control" } name="email" value={ formik.values.email } onChange={ formik.handleChange } onBlur={ formik.handleBlur }></input>
                                { formik.touched.email && formik.errors.email ? (<small className="text-danger">{ formik.errors.email }</small>) : null }
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className={ formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control" } name="password" value={ formik.values.password } onChange={ formik.handleChange } onBlur={ formik.handleBlur }></input>
                                { formik.touched.password && formik.errors.password ? (<small className="text-danger">{ formik.errors.password }</small>) : null }
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className={ formik.touched.confirmPassword && formik.errors.confirmPassword ? "form-control is-invalid" : "form-control" } name="confirmPassword" value={ formik.values.confirmPassword } onChange={ formik.handleChange } onBlur={ formik.handleBlur }></input>
                                { formik.touched.confirmPassword && formik.errors.confirmPassword ? (<small className="text-danger">{ formik.errors.confirmPassword }</small>) : null }
                            </div>
                            <br />
                            <p className="text-center">Already have an account? Login <Link to="/">here</Link></p>
                            <div className="text-center">
                                <button type="submit" value="SignUp" className="btn btn-dark DOP  ```3" disabled={ !formik.isValid }>Sign Up</button>
                            </div>
                        </form>
                    </div> }


                    <div className="col-md-3"></div>
                </div>
            </div >

        </>
    );
}
export default RegistrationPage