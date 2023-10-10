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
} from "@chakra-ui/react";
import "./Login.css";
import googleLogo from "../../assets/google-icon-logo.svg";
import facebookLogo from "../../assets/Facebook-f_Logo-Blue-Logo.wine.svg";

const Login = () => {
  return (
    <Stack maxW="md" spacing="1rem" mx="auto" mt="4" p="4" textAlign="center">
      <Heading as="h2" size="lg">
        Enter your email to log in or create an account
      </Heading>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <Button w="100%" bg="accent" mt="4">
          Continue
        </Button>
      </FormControl>

      <Box>
        <Text className="hr-lines">Or</Text>
      </Box>

      <Box
        border="1px"
        borderColor="gray.400"
        borderRadius="5px"
        p="2"
        display="flex"
        justifyContent="center"
      >
        <Image src={googleLogo} alt="Google" w="5%" mx="2" />
        <Text>Login with Google</Text>
      </Box>

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
    </Stack>
  );
};

export default Login;
