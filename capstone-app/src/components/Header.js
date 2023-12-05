import React, {useEffect,useRef} from "react";
import {Box, HStack, Image} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

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
                                <Link to="/" className="nav-item">Home</Link>
                                <Link to="/about-me" className="nav-item">About</Link>
                                <Link to="/menu" className="nav-item">Menu</Link>
                                <Link to="/booking" className="nav-item">Reservation</Link>
                                <Link to="/ordering" className="nav-item">Order Online</Link>
                                <Link to="/login" className="nav-item">Order Login</Link>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
        </Box>
    );
};


export default Header;