import Box from "@mui/material/Box";
import * as yup from "yup";
import { Formik, FormikValues } from "formik";
import { useState } from "react";
import Billing from "./Billing";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import UserData from "./UserData";
import { useEffect } from "react";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const initialValue = {
  billing: {
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shipping: {
    sameAsBilling: true,
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

export type ValueType = typeof initialValue;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = [
  yup.object().shape({
    billing: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      streetAddress: yup.string().required("required"),
      streetAddress2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shipping: yup.object().shape({
      sameAsBilling: yup.boolean(),
      firstName: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      lastName: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      country: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      streetAddress: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      streetAddress2: yup.string(),
      city: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      state: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
      zipCode: yup.string().when("sameAsBilling", {
        is: false,
        then: (schema) => schema.required("Required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().email("Invalid Email").required("required"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number invalid")
      .required("required"),
  }),
];

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function Checkout() {
  const [pageIndex, setPageIndex] = useState(0);
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }

    window.scrollTo({
      top: 0,
    });
  }, []);

  const isFirstStep = pageIndex === 0;

  const isSecondStep = pageIndex === 1;

  const handleSubmit = async (values: FormikValues) => {
    try {
      const stripe = await stripePromise;

      const requestBody = {
        name: `${values.billing.firstName} ${values.billing.lastName}`,
        email: values.email,
        products: cart.map((c) => ({
          id: c.id,
          qty: c.qty,
        })),
      };

      //Send Request to backend
      const response = await fetch("http://localhost:1337/api/orders", {
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        method: "POST",
      });
      const { session } = await response.json();

      //Redirect to stripe
      stripe?.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (err) {
      throw err as Error;
    }
  };

  return (
    <Box
      width={{ xs: "100%", sm: "90%" }}
      margin="auto"
      padding={{ xs: "12px 16px", sm: "12px 0" }}
    >
      <Stepper activeStep={pageIndex}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema[pageIndex]}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            {isFirstStep && (
              <Billing
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setPageIndex={setPageIndex}
              />
            )}
            {isSecondStep && (
              <UserData
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                setPageIndex={setPageIndex}
              />
            )}
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Checkout;
