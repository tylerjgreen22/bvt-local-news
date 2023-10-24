import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Reset = () => {
  const [email, setEmail] = useState(false);

  const resetValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        "Please enter a valid email"
      )
      .required("Email is required"),
  });

  return (
    <Stack maxW="md" mx="auto" mt="4" px="3" textAlign="center">
      {email ? (
        // Reset email sent confirmation
        <Heading as="h2" size="lg">
          An email has been sent with instructions on how to reset your password
        </Heading>
      ) : (
        // Reset password form
        <>
          <Heading as="h2" size="lg" mb="4">
            Enter your email to receive a password reset link
          </Heading>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={resetValidationSchema}
            onSubmit={() => {
              setEmail(true);
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
                  Reset Password
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Stack>
  );
};

export default Reset;
