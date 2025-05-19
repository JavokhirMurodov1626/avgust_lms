"use client";

import { EyeOff, Eye } from "lucide-react";
import { Formik, Form } from "formik";
import { CustomInput } from "@/components";
import { PatternFormat } from "react-number-format";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        phone: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="grid gap-5">
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

          <CustomInput
            label="Parol"
            error={errors.password}
            touched={touched.password}
            name="password"
          >
            <div className="relative">
              <Input
                className="input"
                placeholder="Kiriting"
                type={showPassword ? "text" : "password"}
              />

              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="absolute right-4 top-1/2  -translate-y-1/2"
              >
                {showPassword ? (
                  <Eye className="text-slate-500" size={20} />
                ) : (
                  <EyeOff className="text-slate-500" size={20} />
                )}
              </button>
            </div>
          </CustomInput>

          <Button className="rounded-lg bg-violet-500 px-4 py-3 font-interMedium h-auto hover:bg-violet-500/90 cursor-pointer">
            Kirish
          </Button>
        </Form>
      )}
    </Formik>
  );
};
