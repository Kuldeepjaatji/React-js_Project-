import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormikForm.css";

const FORM_KEY = "formData";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "At least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(/^\d{10}$/, "Phone must be 10 digits").required("Phone is required"),
  password: Yup.string().min(6, "Min 6 characters").matches(/\d/, "Must contain a number").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm your password"),
});

const FormikForm = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef(null);

  const savedData = JSON.parse(localStorage.getItem(FORM_KEY)) || {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: savedData,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      toast.success("🎉 Form submitted successfully!");
      localStorage.removeItem(FORM_KEY);
      resetForm();
      setStep(1);
    },
  });

  useEffect(() => {
    localStorage.setItem(FORM_KEY, JSON.stringify(formik.values));
  }, [formik.values]);

  useEffect(() => {
    if (Object.keys(formik.errors).length > 0 && formik.submitCount > 0) {
      formRef.current?.classList.add("shake");
      setTimeout(() => {
        formRef.current?.classList.remove("shake");
      }, 500);
    }
  }, [formik.errors, formik.submitCount]);

  const renderField = (field, label, type = "text") => (
    <div className="form-group">
      <label htmlFor={field}>{label}</label>
      <div className="input-with-icon">
        <input
          id={field}
          type={type}
          name={field}
          value={formik.values[field]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched[field] && formik.errors[field] ? "error" : ""}
        />
        {formik.touched[field] && formik.errors[field] && <span className="error-icon">⚠️</span>}
      </div>
      {formik.touched[field] && formik.errors[field] && (
        <p className="error-msg">{formik.errors[field]}</p>
      )}
    </div>
  );

  return (
    <div className="form-container" ref={formRef}>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            {renderField("name", "Name")}
            {renderField("email", "Email", "email")}
            {renderField("phone", "Phone")}
          </>
        )}

        {step === 2 && (
          <>
            {renderField("password", "Password", "password")}
            {renderField("confirmPassword", "Confirm Password", "password")}
          </>
        )}

        <div className="button-group">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>Back</button>
          )}
          {step < 2 ? (
            <button type="button" onClick={() => setStep(step + 1)}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default FormikForm;
