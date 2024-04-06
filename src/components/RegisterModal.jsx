import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import icons from "../images/icons.svg";
import { Overlay, StyledRegisterModal } from "./RegisterModal.styled";
import { registerUser } from "../redux/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsLoading } from "../redux/auth/auth.selectors";
import { Loader } from "./Loader";
import { toast } from "react-toastify";

const RegisterModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const isLoading = useSelector(selectAuthIsLoading);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  const onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password is too long")
      .required("Password is required"),
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      await dispatch(registerUser({ name, email, password })).unwrap();
      formik.resetForm();
      onClose();
    } catch (error) {
      toast.error("Invalid user data");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Overlay onClick={onBackDropClick}>
      <StyledRegisterModal onSubmit={formik.handleSubmit}>
        <h3 className="formTitle">Registration</h3>
        <p className="formText">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <div className="inputForm">
          <div className="inputWrapper">
            <div
              className="signAuth"
              style={{
                borderColor:
                  formik.errors.name && formik.touched.name
                    ? "#ef5050"
                    : "#9ebbff",

                color: "#ef5050",
              }}
            >
              <input
                className="registerInput"
                type="text"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  color:
                    formik.errors.name && formik.touched.name
                      ? "#ef5050"
                      : "#103931",
                }}
              />
            </div>
            <span>
              {formik.errors.name && formik.touched.name && formik.errors.name}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              className="signAuth"
              style={{
                borderColor:
                  formik.errors.email && formik.touched.email
                    ? "#ef5050"
                    : "#9ebbff",

                color: "#ef5050",
              }}
            >
              <input
                className="registerInput"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  color:
                    formik.errors.email && formik.touched.email
                      ? "#ef5050"
                      : "#103931",
                }}
              />
            </div>
            <span>
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </span>
          </div>
          {isLoading && <Loader />}
          <div className="inputWrapper">
            <div
              className="signAuth pass"
              style={{
                borderColor:
                  formik.errors.password && formik.touched.password
                    ? "#ef5050"
                    : "#103931",
                color: "#ef5050",
              }}
            >
              <input
                className="registerInput"
                type={visible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  color:
                    formik.errors.password && formik.touched.password
                      ? "#ef5050"
                      : "#103931",
                }}
              />
              <button
                type="button"
                className="icon-wrapper"
                onClick={() => setVisible(!visible)}
              >
                <svg className="icon-eye" width="18" height="18">
                  <use
                    href={
                      visible
                        ? icons + "#icon-open-eye"
                        : icons + "#icon-closed-eye"
                    }
                  ></use>
                </svg>
              </button>
            </div>
            <span>
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </span>
          </div>
        </div>
        <button type="submit" className="registerModalBtn">
          Sign Up
        </button>
        <button className="closeBtn" onClick={onClose}>
          <svg className="closeBtnImage" width="32" height="32">
            <use href={icons + "#icon-close"}></use>
          </svg>
        </button>
      </StyledRegisterModal>
    </Overlay>
  );
};

export default RegisterModal;
