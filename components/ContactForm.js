import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { supabase } from "supabaseClient";
import Link from "next/link";
import { useEffect } from "react";
import * as Yup from "yup";
import { Formik, useFormik, Field, ErrorMessage } from "formik";

export default function ContactForm() {
  function cleanPhone(phoneNumber) {
    const regexPattern = /[^0-9]+/g;
    const newPhoneNumber = phoneNumber.replace(regexPattern, "");
    let desiredPhoneFormat = "";
    if (newPhoneNumber.length == 10) {
      const areaCode = newPhoneNumber.slice(0, 3);
      const cityCode = newPhoneNumber.slice(3, 6);
      const lastFour = newPhoneNumber.slice(6);
      desiredPhoneFormat = `(${areaCode}) ${cityCode}-${lastFour}`;
    } else if (newPhoneNumber.length == 11) {
      const countryCode = newPhoneNumber.slice(0, 1);
      const areaCode = newPhoneNumber.slice(1, 4);
      const cityCode = newPhoneNumber.slice(4, 7);
      const lastFour = newPhoneNumber.slice(7);
      desiredPhoneFormat = `${countryCode} (${areaCode}) ${cityCode}-${lastFour}`;
    }

    if (desiredPhoneFormat.length > newPhoneNumber.length) {
      return desiredPhoneFormat;
    } else {
      return newPhoneNumber;
    }
  }

  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  let captchaValue = "";

  function handleRecaptcha(value) {
    if (value !== null && value !== "") {
      captchaValue = value;
    }
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please provide your first name")
      .min(2, "First Name must be at least 2 characters")
      .max(50, "First Name must not exceed 50 characters"),
    lastName: Yup.string()
      .required("Please provide your last name")
      .min(2, "Last Name must be at least 2 characters")
      .max(50, "Last Name must not exceed 50 characters"),
    companyName: Yup.string()
      .min(2, "Company Name must be at least 2 characters")
      .max(100, "Last Name must not exceed 10 characters"),
    companyWebsite: Yup.string()
      .min(6, "Company Website must be at least 2 characters")
      .max(100, "Company Website must not exceed 10 characters"),
    email: Yup.string()
      .required("Please provide your email address")
      .min(8, "Email Address must be at least 2 characters")
      .max(75, "Email Address must not exceed 75 characters"),
    phone: Yup.string()
      .min(8, "Email Address must be at least 10 characters")
      .max(20, "Email Address must be at least 10 characters"),
    subject: Yup.string()
      .required("Please provide the subject of your message.")
      .min(10, "Subject must be at least 10 characters")
      .max(100, "Subject must be at least 100 characters"),
    message: Yup.string()
      .required("Please provide the body of your message.")
      .min(50, "Message body must be at least 50 characters")
      .max(1000, "Message body be at least 1000 characters"),
  });

  async function postToDb(values) {
    const { data } = await supabase.from("ContactForm").insert([
      {
        firstName: values.firstName,
        lastName: values.lastName,
        companyName: values.companyName,
        companyWebsite: values.companyWebsite,
        email: values.email,
        phone: cleanPhone(values.phone),
        subject: values.subject,
        message: values.message,
      },
    ]);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      companyWebsite: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      postToDb(values);
    },
  });

  const renderError = (message) => <p className="help is-danger">{message}</p>;
  return (
    <div className="bg-white mt-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden py-10 px-6 bg-blue-light sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white text-center tracking-wide">
                Contact Me
              </h3>
              <p className="mt-6 text-base text-gray-dark max-w-3xl">
                Please fill out this contact form, and let me know what I can
                help you with. Turn around time for email responses is usually
                one to two business days.
              </p>
              <p className="mt-6 text-base text-gray-dark max-w-3xl">
                I can do everything from consulting, to new development, or
                overhauling your current site or web app.
              </p>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-dark tracking-wide">
                Send Me a Message
              </h3>
              <form
                onSubmit={formik.handleSubmit}
                validationSchema={validationSchema}
                action="/api/handleContactForm"
                method="post"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-dark"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("firstName")}
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.firstName}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-dark"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("lastName")}
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.lastName}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-dark"
                    >
                      Company Name
                    </label>
                    <span
                      id="phone-optional"
                      className="text-sm text-gray-medium"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("companyName")}
                      name="companyName"
                      id="company-name"
                      autoComplete="company-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="company-name-optional"
                    />
                    {formik.touched.companyName && formik.errors.companyName ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.companyName}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="companyWebsite"
                      className="block text-sm font-medium text-gray-dark"
                    >
                      Company Website
                    </label>
                    <span
                      id="phone-optional"
                      className="text-sm text-gray-medium"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="url"
                      value={formik.values.companyWebsite}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("companyWebsite")}
                      name="companyWebsite"
                      id="company-website"
                      autoComplete="company-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="company-website-optional"
                    />
                    {formik.touched.companyWebsite &&
                    formik.errors.companyWebsite ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.companyWebsite}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-dark"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("email")}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.email}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-dark"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-optional"
                      className="text-sm text-gray-medium"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("phone")}
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.phone}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-dark"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("subject")}
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.subject}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-dark"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-medium">
                      Max. 1000 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("message")}
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      required
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div>
                        <p style={{ color: "red", fontSize: ".75rem" }}>
                          {formik.errors.message}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="grid justify-items-center justify-self-center sm:col-span-2 sm:flex sm:justify-end">
                  <ReCAPTCHA
                    size="normal"
                    sitekey={sitekey}
                    onChange={handleRecaptcha}
                  />
                </div>
                <div className="grid justify-items-center justify-self-center sm:col-span-2 sm:flex sm:justify-end">
                  <Link href="/thank-you" passHref>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-light hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={(e) => {
                        if (captchaValue === null || captchaValue === "") {
                          e.preventDefault();
                          document.getElementById(
                            "recaptchaError"
                          ).style.display = "block";
                          return;
                        }
                        postToDb(formik.values);
                      }}
                    >
                      Send Message
                    </button>
                  </Link>
                </div>
              </form>
              <div
                id="recaptchaError"
                className="grid grid-cols-1 text-center pt-5 text-red-warning text-sm hidden"
              >
                <p>You must pass the captcha before submitting the form.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
