import React from "react";
import { Heading, Box, VStack, HStack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";


const foods = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        imageSource: "/assets/greek salad.jpg",
        price: "$12.99",
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        imageSource: "/assets/bruchetta.svg",
        price: "$5.99",
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSource: "/assets/lemon dessert.jpg",
        price: "$5.00",
    },
];


const Specials = () => {
    return(
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <VStack spacing={8} mt='20vh' mb='20vh'>
                <HStack spacing="60vw"  alignItems="stretch">
                    <Heading as="h1" id="projects-section">
                        Specials
                    </Heading>
                    <Button>Online Menu</Button>
                </HStack>
            <Box
                display="grid"
                gridTemplateColumns="repeat(3,1fr)"
                gridGap={8}
            >
                {foods.map((food) => (
                    <Card
                        key={food.title}
                        title={food.title}
                        description={food.description}
                        imageSrc={food.imageSource}
                        price={food.price}
                    />
                ))}
            </Box>
            </VStack>
    </FullScreenSection>
    );
};

export default Specials;