import { Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ConfirmedBooking = () =>{
    return (
        <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}
        >
            <Heading mt="30vh" mb="30vh">Your Booking has been confirmed! See you then!</Heading>
        </FullScreenSection>
        )
    ;
};

export default ConfirmedBooking;