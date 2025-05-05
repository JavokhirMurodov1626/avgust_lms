"use client";

import { Formik, Form } from "formik";
import { CustomInput } from "@/components";
import { PatternFormat } from "react-number-format";

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        phone: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <CustomInput
            label="Telefon raqam"
            error={errors.phone}
            touched={touched.phone}
            name="phone"
          >
            <PatternFormat
              className="input"
              format="+998 (##) ###-##-##"
              mask="_"
              value={values.phone}
              onValueChange={({ value }) => {
                setFieldValue("phone", value);
              }}
              placeholder="+998 (__) ___-__-__"
              id="phone"
              name="phone"
            />
          </CustomInput>
        </Form>
      )}
    </Formik>
  );
};
