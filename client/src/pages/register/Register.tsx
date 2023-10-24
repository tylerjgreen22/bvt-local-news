import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Register = () => {
  const [accountType, setAccountType] = useState("user");

  const initialUserRegistrationValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialBusinessRegistrationValues = {
    email: "",
    phone: "",
    business: "",
    website: "",
    password: "",
    confirmPassword: "",
  };

  const userRegistrationValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        "Please enter a valid email"
      )
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .max(10, "Max 10 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const businessRegistrationValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        "Please enter a valid email"
      )
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        "Please enter a valid phone number, seperated by dashes, spaces, or periods"
      )
      .required("Phone number is required"),
    business: Yup.string().required("Business name is required"),
    website: Yup.string().required("Website is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .max(10, "Max 10 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Stack maxW="md" mx="auto" mt="4" px="3" textAlign="center">
      <Heading as="h2" size="lg" mb="2">
        Enter a password to create an account
      </Heading>

      {/* Account type  */}
      <RadioGroup onChange={setAccountType} value={accountType}>
        <Stack direction="row">
          <Radio value="user">User</Radio>
          <Radio value="business">Business</Radio>
        </Stack>
      </RadioGroup>

      {accountType == "user" ? (
        // User registration form
        <Formik
          initialValues={initialUserRegistrationValues}
          enableReinitialize={true}
          validationSchema={userRegistrationValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Email  */}
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} id="email" name="email" type="email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              {/* Password  */}
              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              {/* Confirm password  */}
              <FormControl
                isInvalid={!!errors.confirmPassword && touched.confirmPassword}
              >
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>

              <Button w="100%" bg="accent" mt="4" type="submit">
                Create Account
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        // Business registration form
        <Formik
          initialValues={initialBusinessRegistrationValues}
          enableReinitialize={true}
          validationSchema={businessRegistrationValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Email  */}
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} id="email" name="email" type="email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              {/* Phone number  */}
              <FormControl isInvalid={!!errors.phone && touched.phone}>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Field as={Input} id="phone" name="phone" />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>

              {/* Business name  */}
              <FormControl isInvalid={!!errors.business && touched.business}>
                <FormLabel htmlFor="business">Business Name</FormLabel>
                <Field as={Input} id="business" name="business" />
                <FormErrorMessage>{errors.business}</FormErrorMessage>
              </FormControl>

              {/* Business email */}
              <FormControl isInvalid={!!errors.website && touched.website}>
                <FormLabel htmlFor="website">Business Website</FormLabel>
                <Field as={Input} id="website" name="website" />
                <FormErrorMessage>{errors.website}</FormErrorMessage>
              </FormControl>

              {/* Password  */}
              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              {/* Confirm Password  */}
              <FormControl
                isInvalid={!!errors.confirmPassword && touched.confirmPassword}
              >
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>

              <Button w="100%" bg="accent" mt="4" type="submit">
                Create Account
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Stack>
  );
};

export default Register;
