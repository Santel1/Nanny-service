import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import icons from "../images/icons.svg";

import { Overlay, StyledAppointmentModal } from "./AppointmentModal.styled";
import TimePicker from "./Time";

const AppointmentModal = ({ nanny, onClose }) => {
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

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Phone number is invalid")
      .required("Phone is required"),
    age: Yup.number().required("Age is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    time: Yup.string().required("Time is required"),
    parentsName: Yup.string().required("Name is required"),
    comment: Yup.string(),
  });

  const onSubmit = async () => {
    toast.success("Thank you! Have a nice day!");
    formik.resetForm();
    onClose();
  };

  const handleTimeChange = (time) => {
    formik.setFieldValue("time", time);
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      phone: "+380",
      age: "",
      time: "",
      email: "",
      parentsName: "",
      comment: "",
    },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Overlay onClick={onBackDropClick}>
      <StyledAppointmentModal onSubmit={formik.handleSubmit}>
        <h3 className="formTitle">Make an appointment with a babysitter</h3>
        <p className="formText">
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
        <div className="nannyInfoModal">
          <img className="nannyImg" src={nanny.avatar_url} alt="nanny_photo" />
          <div className="textWrapper">
            <p className="nannyTextModal">Your nanny</p>
            <p className="nannyNameModal">{nanny.name}</p>
          </div>
        </div>
        <div className="inputForm">
          <div className="wrapper">
            <div className="inputWrapper">
              <div
                className="signAuth"
                style={{
                  borderColor:
                    formik.errors.address && formik.touched.address
                      ? "#ef5050"
                      : "#9ebbff",

                  color: "#ef5050",
                }}
              >
                <input
                  className="appointmentInput"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formik.values.address}
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
                {formik.errors.address &&
                  formik.touched.address &&
                  formik.errors.address}
              </span>
            </div>
            <div className="inputWrapper">
              <div
                className="signAuth"
                style={{
                  borderColor:
                    formik.errors.phone && formik.touched.phone
                      ? "#ef5050"
                      : "#9ebbff",

                  color: "#ef5050",
                }}
              >
                <input
                  className="appointmentInput"
                  type="tel"
                  // placeholder=""
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    color:
                      formik.errors.phone && formik.touched.phone
                        ? "#ef5050"
                        : "#103931",
                  }}
                />
              </div>
              <span>
                {formik.errors.phone &&
                  formik.touched.phone &&
                  formik.errors.phone}
              </span>
            </div>
            <div className="inputWrapper">
              <div
                className="signAuth pass"
                style={{
                  borderColor:
                    formik.errors.age && formik.touched.age
                      ? "#ef5050"
                      : "#103931",
                  color: "#ef5050",
                }}
              >
                <input
                  className="appointmentInput"
                  placeholder="Age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    color:
                      formik.errors.age && formik.touched.age
                        ? "#ef5050"
                        : "#103931",
                  }}
                />
              </div>
              <span>
                {formik.errors.age && formik.touched.age && formik.errors.age}
              </span>
            </div>
            <div className="inputWrapper time">
              <div
                className="signAuth pass"
                style={{
                  borderColor:
                    formik.errors.time && formik.touched.time
                      ? "#ef5050"
                      : "#103931",
                  color: "#ef5050",
                }}
              >
                <input
                  className="appointmentInput"
                  placeholder="00:00"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    color:
                      formik.errors.time && formik.touched.time
                        ? "#ef5050"
                        : "#103931",
                  }}
                />

                <div className="timeBtn">
                  <TimePicker
                    selectedTime={formik.values.time}
                    onChange={handleTimeChange}
                  />
                </div>
              </div>
              <span>
                {formik.errors.time &&
                  formik.touched.time &&
                  formik.errors.time}
              </span>
            </div>
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
                className="appointmentInput"
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
          <div className="inputWrapper">
            <div
              className="signAuth pass"
              style={{
                borderColor:
                  formik.errors.parentsName && formik.touched.parentsName
                    ? "#ef5050"
                    : "#103931",
                color: "#ef5050",
              }}
            >
              <input
                className="appointmentInput"
                placeholder="Father's or mother's name"
                name="parentsName"
                value={formik.values.parentsName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  color:
                    formik.errors.parentsName && formik.touched.parentsName
                      ? "#ef5050"
                      : "#103931",
                }}
              />
            </div>
            <span>
              {formik.errors.parentsName &&
                formik.touched.parentsName &&
                formik.errors.parentsName}
            </span>
          </div>
          <div className="inputWrapper">
            <div
              className="signAuth pass"
              style={{
                borderColor:
                  formik.errors.comment && formik.touched.comment
                    ? "#ef5050"
                    : "#103931",
                color: "#ef5050",
              }}
            >
              <textarea
                className="commentInput"
                placeholder="Comment"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  color:
                    formik.errors.comment && formik.touched.comment
                      ? "#ef5050"
                      : "#103931",
                }}
              />
            </div>
            <span>
              {formik.errors.comment &&
                formik.touched.comment &&
                formik.errors.comment}
            </span>
          </div>
        </div>
        <button type="submit" className="appointmentModalBtn">
          Send
        </button>
        <button className="closeBtn" onClick={onClose}>
          <svg className="closeBtnImage" width="32" height="32">
            <use href={icons + "#icon-close"}></use>
          </svg>
        </button>
      </StyledAppointmentModal>
    </Overlay>
  );
};

export default AppointmentModal;
