import React from "react";
import TextInputField from "../form/TextInputField";
import TextAreaField from "../form/TextAreaField";
import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";

interface Props {
  next: (values: any) => void;
  previous: () => void;
}

const DonationDetails = ({ next, previous }: Props) => {
  // const submit = (values: any) => {
  //   console.log(values + " 1");
  //   next(values);
  // };
  const formik = useFormik({
    initialValues: {
      displayName: "",
      team: "",
      email: "",
      message: "",
    },
    onSubmit: (values: any) => {
      // console.log(values + " 1");
      next(values);
    },
    validationSchema: Yup.object({
      displayName: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(20, "Must be less than 20 characters")
        .required("Display Name is required")
        .matches(/^[a-zA-Z0-9_ .]*$/, "Cannot contain special characters"),
      team: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(20, "Must be less than 20 characters")
        .matches(/^[a-zA-Z0-9_ .]*$/, "Cannot contain special characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().max(140, "Must be less than 140 characters"),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <div className="text-xl font-bold uppercase">Detail</div>
      <p>Every $1 is one less pound of junk in the space.</p>
      <Form className="w-full md:w-2/3">
        <TextInputField
          label="Display Name*"
          id="displayName"
          name="displayName"
          helptext=""
          isRequired={true}
          placeholder="Display Name"
          type="text"
        />
        <TextInputField
          label="Team Name"
          id="team"
          name="team"
          isRequired={false}
          helptext="* Team name to display on donation detail"
          placeholder="Team Name (Optional)"
          type="text"
        />
        <TextInputField
          label="Email Address*"
          id="email"
          name="email"
          helptext=""
          isRequired={true}
          placeholder="Email"
          type="email"
        />
        <TextAreaField
          label="Message"
          id="message"
          name="message"
          placeholder="Message (140 characters max)"
          type="textarea"
        />
        <div className="flex flex-row">
          <button className="btn btn-ghost basis-1/2" onClick={previous}>
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-info border-0 bg-sky-300 basis-1/2"
          >
            Next
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default DonationDetails;
