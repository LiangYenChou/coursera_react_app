import React from "react";
import FullScreenSection from "./FullScreenSection";
import { HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";

const About = () =>{
    const storename = "Little Lemon";
    const location = "Chicago";
    const description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ";
    const overlayIamgeBack = {
        title: "Food Image",
        imgSrc: "/assets/restaurantfood.jpg",
    }
    const overlayIamgeFront = {
        title: "Food Image",
        imgSrc: "/assets/restaurant chef B.jpg",
    }
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
                    <Heading as="h2" size="md" mb={12}>{location}</Heading>
                    <Text fontSize="md">{description}</Text>
                </VStack>
                <Image src={overlayIamgeBack.imgSrc} alt={overlayIamgeBack.title}  objectFit='cover' height="300px"/>
            </HStack>

        </FullScreenSection>
    );
};

export default About;