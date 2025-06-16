import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(`Form Submitted!\nName: ${data.name}\nEmail: ${data.email}`);
    reset();
  };

  return (
    <div className="container">
      <h2 className="fade-in">Contact Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form fade-in">
        <label>Name:</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}
