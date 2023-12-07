import React from "react"
import {Heading, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useNavigate } from "react-router-dom";

const storename = "Little Lemon";
const location = "Chicago";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const landingImage = {
    title: "Landing Image",
    source: "/assets/restaurant chef B.jpg",
    //getImageSrc: () => require("/assets/restauranfood.jpg"),
}

const LandingSection = () => {
    const navigate = useNavigate();
    return(
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#2A4365"
        >
            <HStack spacing={8} alignItems='stectch' mt='20vh' mb='10vh'>
                <VStack mb={ 16} spacing={ 4} alignItems="stretch" maxW="30vw">
                    <Heading as="h1" size="2xl">{storename}</Heading>
                    <Heading as="h2" size="md">{location}</Heading>
                    <Text fontSize="sm">{description}</Text>
                    <Button size='lg' colorScheme="green" mt='5vh' onClick={()=> navigate('/booking')}>Reserve a table</Button>
                </VStack>
                <Image src={landingImage.source} alt={landingImage.title}  objectFit='cover' maxH="25vh"/>
            </HStack>

        </FullScreenSection>
    );
};

export default LandingSection;