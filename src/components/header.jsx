import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery, Stack, Flex, Box, Text, Image } from '@chakra-ui/react';

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
                    <Text fontSize="5x1" fontWeight="semibold">Hello, I am</Text>
                    <Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, teal.600)"
                        bgClip="text">Leighton Schmidt</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Developer. Husband. Father.</Text>
                </Box>
                <Image alignSelf="center" mt={isNotSmallScreen ? "0" : "12"}
                    mb={isNotSmallScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="https://avatars.githubusercontent.com/u/82241251?v=4"/>
                </Flex>
        </Stack>
    )
}

export default Header;