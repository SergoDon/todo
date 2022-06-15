import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

export const Activation = () => {
  const [initialValues] = useState({
    first_name: "",
    last_name: "",
    age: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationSchema] = useState(
    Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
      age: Yup.number().required().min(18).max(99),
      first_name: Yup.string().required(),
      last_name: Yup.string().required(),
    })
  );

  const onSubmit = (initialValues) => {
    setTimeout(() => {
      console.log(initialValues);
    }, 400);
  };

  return (
    <div>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form>
          <Field type="text" name="first_name" placeholder="first name" />
          <ErrorMessage name="first_name" component="div" />

          <Field type="text" name="last_name" placeholder="last name" />
          <ErrorMessage name="email" component="div" />

          <Field type="number" name="age" placeholder="age" />
          <ErrorMessage name="age" component="div" />

          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />

          <Field type="password" name="confirmPassword" placeholder="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
