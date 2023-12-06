import {Box, Stack, VStack, Image} from "@chakra-ui/react";

const Footer = () =>{

    const logoImg = {
        title: "Logo",
        imgSrc: "assets/Logo .svg",
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

    return(
        <Box backgroundColor="#18181b" bottom={0}>
            <footer>
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <Stack
                        px = {16}
                        py = {4}
                        justifyContent="space-between"
                        alignItems="stretch"
                        direction="row"
                    >
                        <Image src={logoImg.imgSrc} alt={logoImg.title}/>
                        <VStack spacing={4} align='stretch'>
                            <label>Doormat Navigation</label>
                            <nav>
                                <VStack spacing={4} align='stretch'> 
                                <a href="#home" onClick={ handleClick("home")}>Home</a>
                                <a href="#about" onClick={ handleClick("about")}>About</a>
                                <a href="#menu" onClick={ handleClick("menu")}>Menu</a>
                                <a href="#reservation" onClick={ handleClick("reservation")}>Reservation</a>
                                <a href="#order" onClick={ handleClick("order")}>Order Online</a>
                                <a href="#login" onClick={ handleClick("login")}>Login</a>
                                </VStack>
                            </nav>
                        </VStack>
                        <VStack spacing={4} align='stretch'>
                            <label>Contact</label>
                            <nav>
                                <VStack spacing={4} align='stretch'> 
                                <a href="#address" onClick={ handleClick("address")}>Address</a>
                                <a href="#phone" onClick={ handleClick("phone")}>Phone</a>
                                <a href="#email" onClick={ handleClick("email")}>email</a>
                                </VStack>
                            </nav>
                        </VStack>
                        <VStack spacing={4} align='stretch'>
                        <label>Social Media Links</label>
                        <nav>
                            <VStack spacing={4} align='stretch'> 
                            <a href="#facebook" onClick={ handleClick("address")}>Facebook</a>
                            <a href="#linkedin" onClick={ handleClick("linkedin")}>Linkedin</a>
                            <a href="#instagram" onClick={ handleClick("instagram")}>Instagram</a>
                            <a href="#medium" onClick={ handleClick("medium")}>Medium</a>
                            </VStack>
                        </nav>

                        </VStack>

                    </Stack>
                </Box>
            </footer>
        </Box>
    );
};

export default Footer;