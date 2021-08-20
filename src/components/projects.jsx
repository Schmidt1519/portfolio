import React from 'react';
import { useMediaQuery, Flex, Box, Text, Image } from '@chakra-ui/react';

function Projects() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallScreen ? "row" : "column"} w="100%" 
            maxWidth={{ base: "100vh", md:"130vh", lg: "130vh", xl: "130vh" }}>
        
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2x1">Projects</Text>
            
                <Flex direction={isNotSmallScreen ? "row" : "column"} mt={8}>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Med Spa</Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                        bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Star Wars E-Commerce</Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Flashcards</Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Music Library</Text>
                    </Flex>
                </Flex>
     
            </Box>

        </Flex>
        )
}

export default Projects;