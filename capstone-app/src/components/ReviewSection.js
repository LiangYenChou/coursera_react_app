import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Card, CardBody, Avatar, Heading, VStack, HStack, Text, Box } from '@chakra-ui/react'

const ratingData = [
    {
        firstName: "Leo",
        score: "5",
        reviewText: "Love the foods and vibes.",
        userImageSrc: "https://i.pravatar.cc/150?img=7",
    },
    {
        firstName: "Cathy",
        score: "4.8",
        reviewText: "It's pet-friendly!",
        userImageSrc: "https://i.pravatar.cc/150?img=7",
    },
    {
        firstName: "Puff",
        score: "4.5",
        reviewText: "The view is perfect.",
        userImageSrc: "https://i.pravatar.cc/150?img=7",
    },{
        firstName: "Hertz",
        score: "5",
        reviewText: "Yummy",
        userImageSrc: "https://i.pravatar.cc/150?img=7",
    }
];
const ReviewSection = () => {
    return(
        <FullScreenSection
            backgroundColor="#512DA8"
            isDarkBackground
            p={8}
            alignItems="center"
            spacing={8}
        >
            <VStack spacing={8}>
            <Heading as="h2" mt={12}>Testimonials</Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(4,1fr)"
                gridGap={8}
            >
                {ratingData.map((rating) => (
                    <Card maxW="sm">

                        <CardBody>
                            <VStack spacing={8} >
                                <Heading as="h3" size="lg" alignItems="center">{rating.score} / 5</Heading>
                                <HStack spacing={4}>
                                    <Avatar src={rating.userImageSrc} alt="userPhoto" />
                                    <Heading as="h4" size="md">{rating.firstName}</Heading>
                                </HStack>
                                <Text color="grey" fontStyle="italic" >{rating.reviewText}</Text>
                            </VStack>
                        </CardBody>
                    </Card>
                ))}
            </Box>
            </VStack>
        </FullScreenSection>
    );
};


export default ReviewSection;