import { Field, Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import React from "react";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  const sendMail = (object) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        object,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
  };

  return (
    <div id="contact" className="m-10">
      <h1 className="font-bold text-8xl my-10 mx-16 text-gray-700">Contact</h1>
      <p className="text-gray-700 my-5 text-lg leading-relaxed tracking-wider text-center">
        Connect with me at{" "}
        <span className="text-pink-800 underline">
          <a href="mailto:akshaybhardwaj96.ab@gmail.com">
            akshaybhardwaj96.ab@gmail.com
          </a>
        </span>{" "}
        <br /> or simply fill the contact form below:
      </p>
      <div className="text-center">
        <SocialMedia />
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          sendMail(values);
          resetForm();
        }}
      >
        <Form className="mx-auto w-[55%] mt-7">
          <label className="text-gray-700" htmlFor="firstName">
            First Name
          </label>
          <Field
            id="firstName"
            required
            minLength="2"
            className="w-full border border-black rounded-lg mx-2 mt-2 my-6 p-2"
            name="firstName"
            placeholder="Jane"
          />

          <label className="text-gray-700" htmlFor="lastName">
            Last Name
          </label>
          <Field
            id="lastName"
            minLength="2"
            required
            className=" w-full border border-black rounded-lg mx-2 mt-2 my-6 p-2"
            name="lastName"
            placeholder="Doe"
          />

          <label className="text-gray-700" htmlFor="email">
            Email
          </label>

          <Field
            id="email"
            required
            className="w-full border border-black rounded-lg mx-2 mt-2 my-6 p-2"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <label className="text-gray-700" htmlFor="message">
            Message
          </label>
          <br />
          <Field
            id="message"
            required
            className="w-full h-36 border border-black rounded-lg mx-2 my-2 p-2"
            name="message"
            placeholder="Message..."
            as="textarea"
          />

          <button
            type="submit"
            className="m-2 p-2 w-full border border-pink-600 rounded-lg bg-pink-200 text-gray-700"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
