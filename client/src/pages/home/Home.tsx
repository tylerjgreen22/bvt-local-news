import { Heading,Button,Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Home = () => {
  return <Flex  flexDirection="column" className="h-screen">
    <div className=" h-full">
      <div className=" h-1/2 ">
        <Heading className=" pl-4 pt-3"as="h1" size="4xl"> Your Local News.</Heading>
        <Heading className=" pl-8" size="4xl">All in One Place.</Heading>
        <Heading className="pl-3 pt-5" as="h4" size="lg">Read All the news from your favorite sources in the Valley.</Heading>
      </div>
      <div className=" h-1/2">
        <Button as={Link} to="/news" bg="accent" className="bg-gray-700 p-2 m-4">
          Continue Free
        </Button>
        <Button as={Link} to="/login" bg="accent" className="bg-gray-700 p-2 m-4">
          Log In
        </Button>
        <Button as={Link} to="/register" bg="accent" className="bg-gray-700 p-2 m-4">
          Sign Up
        </Button>
      </div>
    </div>
    <div className=" bg-slate-700">[Logos Go Here]</div>
  </Flex>;
};

export default Home;