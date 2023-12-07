import { Heading } from "@chakra-ui/react";
import FullScreenSection from "./components/FullScreenSection";

const Login = ()=> {
    return(
        <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
            <Heading mt="30vh" mb="30vh">This is Login Page</Heading>
        </FullScreenSection>
    );
};

export default Login;