import React from "react"
import {Heading, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const storename = "Little Lemon";
const location = "Chicago";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const landingImage = {
    title: "Landing Image",
    source: "/assets/restaurant chef B.jpg",
    //getImageSrc: () => require("/assets/restauranfood.jpg"),
}

const LandingSection = () => {
    return(
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#2A4365"
        >
            <HStack spacing={8} alignItems='stectch' mt='24px'>
                <VStack mb={ 16} spacing={ 4} alignItems="stretch" maxW="30vw">
                    <Heading as="h1" size="2xl">{storename}</Heading>
                    <Heading as="h2" size="md">{location}</Heading>
                    <Text fontSize="sm">{description}</Text>
                    <Button size='lg' colorScheme="green" mt='24px'>Reserve a table</Button>
                </VStack>
                <Image src={landingImage.source} alt={landingImage.title}  objectFit='cover' height="200px"/>
            </HStack>

        </FullScreenSection>
    );
};

export default LandingSection;