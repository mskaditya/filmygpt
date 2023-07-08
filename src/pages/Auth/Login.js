import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup } from 'reactstrap';
import { connect, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import withRouter from "../../components/withRouter";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from 'react-google-login';

//i18n
import { useTranslation } from 'react-i18next';

//redux store
import { loginUser, apiError } from '../../redux/actions';

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

const clientId = '326532477740-cogh2554qvs891p5v7nnamld0kbdtkpf.apps.googleusercontent.com'

/**
 * Login component
 * @param {*} props 
 */
const Login = (props) => {
    const dispatch = useDispatch();
    /* intilize t variable for multi language implementation */
    const { t } = useTranslation();

    const clearError = useCallback(() => {
       dispatch(apiError(""));
    },[dispatch])

    useEffect(() => {
        clearError();
    }, [clearError])

    // validation
    const formik = useFormik({
        initialValues: {
            email: 'admin@themesbrand.com',
            password: '123456'
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Please Enter Your Username'),
            password: Yup.string().required('Please Enter Your Password')
        }),
        onSubmit: values => {
            props.loginUser(values.email, values.password, props.router.navigate);
        },
    });

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        console.log('[Login Success] token:', res.accessToken);
        localStorage.setItem("authUser", JSON.stringify(res.accessToken));
        if (localStorage.getItem("authUser")) {
            return <Navigate to="/" />;
        }
    }

    const onFailure = (res) => {
        console.log('[Login failed] res: ', res);
    }

    if (localStorage.getItem("authUser")) {
        return <Navigate to="/" />;
    }

    return (
        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
                                <Link to="/" className="auth-logo mb-5 d-block">
                                    <img src={logodark} alt="" height="30" className="logo logo-dark" />
                                    <img src={logolight} alt="" height="30" className="logo logo-light" />
                                </Link>

                                <h4>{t('Sign in')}</h4>
                                <p className="text-muted mb-4">{t('to continue to FilmiGPT')}</p>

                            </div>

                            <Card>
                                <CardBody className="p-4">
                                    {
                                        props.error && <Alert color="danger">{props.error}</Alert>
                                    }
                                    <div className="p-3">
                                        <div className="d-grid">

                                            <GoogleLogin clientId={clientId} 
                                                render={renderProps => (
                                                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} block className="waves-effect waves-light red">
                                                <span class="signup"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg> </span>
                                                    {t('Sign in With Google')}</Button>
                                                )}
                                                buttonText={t('Sign in With Google')}
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'}
                                                isSignedIn={true}>
                                            </GoogleLogin>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="d-grid">
                                            <Button color='primary' block className="waves-effect waves-light red" type="submit">
                                            <span class="signup"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7269ef" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg></span>                                            {t('Sign in With Facebook')}</Button>
                                        </div>
                                    </div>
                                    <div className="p-3">

                                        <Form onSubmit={formik.handleSubmit}>

                                            <div className="mb-3">
                                                <Label className="form-label">{t('Username')}</Label>
                                                <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                    <span className="input-group-text text-muted" id="basic-addon3">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                    <Input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className="form-control form-control-lg border-light bg-soft-light"
                                                        placeholder="Enter email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                        invalid={formik.touched.email && formik.errors.email ? true : false}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                                    ) : null}
                                                </InputGroup>
                                            </div>

                                            <FormGroup className="mb-4">
                                                <div className="float-end">
                                                    <Link to="forget-password" className="text-muted font-size-13">{t('Forgot password')}?</Link>
                                                </div>
                                                <Label className="form-label">{t('Password')}</Label>
                                                <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                    <span className="input-group-text text-muted">
                                                        <i className="ri-lock-2-line"></i>
                                                    </span>
                                                    <Input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="form-control form-control-lg border-light bg-soft-light"
                                                        placeholder="Enter Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                                        invalid={formik.touched.password && formik.errors.password ? true : false}
                                                    />
                                                    {formik.touched.password && formik.errors.password ? (
                                                        <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                    ) : null}

                                                </InputGroup>
                                            </FormGroup>

                                            <div className="form-check mb-4">
                                                <Input type="checkbox" className="form-check-input" id="remember-check" />
                                                <Label className="form-check-label" htmlFor="remember-check">{t('Remember me')}</Label>
                                            </div>

                                            <div className="d-grid">
                                                <Button color="primary" block className=" waves-effect waves-light" type="submit">{t('Sign in')}</Button>
                                            </div>

                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>

                            <div className="mt-5 text-center">
                                {/* <p>{t("Don't have an account")} ? <Link to="/register" className="font-weight-medium text-primary"> {t('Signup now')} </Link> </p> */}
                                <p>© {new Date().getFullYear()} {t('FilmiGPT')}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default withRouter(connect(mapStateToProps, { loginUser, apiError })(Login));