import React, {useEffect,useRef} from "react";
import {Box, HStack, Image} from "@chakra-ui/react";
const Header = () =>{


    const imageSrc = {
            title: "Logo",
            getImageSrc: () => require("../assets/Logo .svg"),
        }

    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <HStack
                        px = {16}
                        py = {4}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Image src={imageSrc.getImageSrc()} alt={imageSrc.title}/>
                        <nav>
                            <HStack spacing={8}>
                                <a href="#home" onClick={ handleClick("home")}>Home</a>
                                <a href="#about" onClick={ handleClick("about")}>About</a>
                                <a href="#menu" onClick={ handleClick("menu")}>Menu</a>
                                <a href="#reservation" onClick={ handleClick("reservation")}>Reservation</a>
                                <a href="#order" onClick={ handleClick("order")}>Order Online</a>
                                <a href="#login" onClick={ handleClick("login")}>Login</a>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
        </Box>
    );
};


export default Header;