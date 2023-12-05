import React from "react";
import { VStack, HStack, Image, Heading, Text, Button, Box, Flex, Wrap } from "@chakra-ui/react";


const Card = ({title, description, imageSrc,price}) => {

    return(
        <VStack spacing={4} m="auto" color="black" bg = "white" border="1px" borderRadius='10px' textAlign='left' alignItems='stretch' p="20px" minW={200}>
            <Image src={imageSrc} alt={title} height="200" fit="cover"/>
            <HStack spacing={4} alignItems="flex-end">
                <Heading as='h2' noOfLines={1}>{title}</Heading>
                <Box align="flex-end"><Text fontSize="lg" align="end">{price}</Text></Box>
            </HStack>
            
            <Text fontSize='sm' noOfLines={1} h="5vh">{description}</Text>
            <Button>Order a delivery</Button>
        </VStack>
    );
};

export default Card;