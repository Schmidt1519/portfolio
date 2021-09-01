import React from 'react';
import { useMediaQuery, Flex, Box, Text, Link, HStack, Stack } from '@chakra-ui/react';
import './projects.css';

function Projects() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
        <Flex direction={isNotSmallScreen ? "row" : "column"} w="100%" 
            maxWidth={{ base: "100vh", md:"130vh", lg: "130vh", xl: "130vh" }} >
        
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="3xl" align="center">Projects</Text>
            
                <Flex direction={isNotSmallScreen ? "row" : "column"} mt={1}>

                    <Flex rounded="xl" direction="column" mt={2} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center" margin="auto">Med Spa</Text>
                            <Flex alignSelf="center">
                                <Link href="https://github.com/Schmidt1519/med-spa-frontend/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold" >Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/med-spa-backend/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={2} ml={isNotSmallScreen ? 4 : 0}
                        bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center" margin="auto">Star Wars E-Commerce</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/StarWarsECommerce/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server/Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={2} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center" margin="auto">Flashcards</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/flashcard-react/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/flashcards-django-rest/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={2} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }} >
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center" margin="auto">Music Library</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/music-library-react/" isExternal >
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/music-library/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={2} ml={isNotSmallScreen ? 4 : 0}
                        bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center" margin="auto">Trash Collector</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/trash-collector/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server/Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                </Flex>
     
            </Box>

        </Flex>
        </Stack>
        );
}

export default Projects;