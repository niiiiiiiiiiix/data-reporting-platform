import "./SignUpForm.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class SignUpForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
      >
        {({ errors, status, touched }) => (
          <Form className="form">
            <div className="sub-form">
              <div className="all-form-inputs">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-input" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="all-form-inputs">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-input" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="all-form-inputs">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-input" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="all-form-inputs">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-input" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <button type="submit" className="form-input-btn">
                Sign Up
              </button>
              <span className="form-input-login">
                Already have an account? Sign in <a href="/sign-in">here</a>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default SignUpForm;
