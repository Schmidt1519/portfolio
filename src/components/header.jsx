import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery, Stack, Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react';

function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={isNotSmallScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallScreen ? "0" : "16"} align="flex-start">
                    <Text fontSize="4xl" fontWeight="semibold">Hello, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, teal.600)"
                        bgClip="text">Leighton Schmidt</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} fontWeight="bold" mt="2">Developer. Husband. Father.</Text>

                    <Text color={isDark ? "gray.200" : "gray.500"} mt="3">I recently left 10+ years in the Accounting/Finance field behind me to pursue Software Engineering! My love for computers and fascination with the amazing software that makes our lives easier drove me to make a change in my life.</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} mt="3">While I am grateful for the knowledge gained through my career thus far, I believe my future holds much more rewarding work. With young kids, I know how valuable time is and how important technology is in getting things done efficiently.</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} mt="3">I live in the Kansas City metro and when not spending time with family, I enjoy working out and playing sports, concerts, cyrptocurrencies, and traveling to Colorado for outdoor adventures.</Text>

                <Link href="https://schmidt1519.github.io/resume/" isExternal><Button mt={8} colorScheme="blue" _hover={{ bg: "teal.400", }}>My Resume</Button></Link>

                </Box>
                
                <Image alignSelf="center" mt={isNotSmallScreen ? "0" : "12"}
                    mb={isNotSmallScreen ? "0" : "12"} ml={isNotSmallScreen ? "5" : "0"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="https://avatars.githubusercontent.com/u/82241251?v=4"/>
                </Flex>
        </Stack>
    );
}

export default Header;