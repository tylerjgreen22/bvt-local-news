import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Image,
  Heading,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./Login.css";
import googleLogo from "../../assets/google-icon-logo.svg";
import facebookLogo from "../../assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [email, setEmail] = useState("");

  const emailValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const passwordValidationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
  });

  return (
    <Stack maxW="md" mx="auto" mt="4" px="3" textAlign="center">
      {email ? (
        // Log in form
        <>
          <Heading as="h2" size="lg" mb="2">
            Enter your password to log in
          </Heading>

          <Formik
            initialValues={{ password: "" }}
            enableReinitialize={true}
            validationSchema={passwordValidationSchema}
            onSubmit={(values) => {
              console.log(email);
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
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

                <Button w="100%" bg="accent" mt="4" type="submit">
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        // Check email form
        <>
          <Heading as="h2" size="lg" mb="2">
            Enter your email to log in or create an account
          </Heading>

          <Formik
            initialValues={{ email: "" }}
            enableReinitialize={true}
            validationSchema={emailValidationSchema}
            onSubmit={(values) => {
              setEmail(values.email);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Email  */}
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field as={Input} id="email" name="email" type="email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <Button w="100%" bg="accent" mt="4" type="submit">
                  Continue
                </Button>
              </Form>
            )}
          </Formik>

          {/* 3rd party log in  */}
          <Text className="hr-lines">Or</Text>

          {/* Google  */}
          <Box
            border="1px"
            borderColor="gray.400"
            borderRadius="5px"
            p="2"
            display="flex"
            justifyContent="center"
          >
            <Image src={googleLogo} alt="Google" w="4%" mx="2" />
            <Text>Login with Google</Text>
          </Box>

          {/* Facebook  */}
          <Box
            border="1px"
            borderColor="gray.400"
            borderRadius="5px"
            p="2"
            display="flex"
            justifyContent="center"
          >
            <Image src={facebookLogo} alt="Facebook" w="5%" mx="2" />
            <Text>Login with Facebook</Text>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default Login;
