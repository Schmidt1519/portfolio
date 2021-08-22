import React from 'react';
import { useMediaQuery, Flex, Box, Text, Link } from '@chakra-ui/react';

function Projects() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallScreen ? "row" : "column"} w="100%" 
            maxWidth={{ base: "100vh", md:"130vh", lg: "130vh", xl: "130vh" }}>
        
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="3xl" align="center">Projects</Text>
            
                <Flex direction={isNotSmallScreen ? "row" : "column"} mt={8}>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center">Med Spa</Text>
                            <Flex alignSelf="center">
                                <Link href="https://github.com/Schmidt1519/med-spa-frontend/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold" >Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/med-spa-backend/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                        bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center">Star Wars E-Commerce</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/StarWarsECommerce/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server/Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center">Flashcards</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/flashcard-react/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/flashcards-django-rest/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                    bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }} >
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center">Music Library</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/music-library-react/" isExternal >
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server</Text>
                                </Link>
                                <Link href="https://github.com/Schmidt1519/music-library/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallScreen ? 4 : 0}
                        bg="blue.400" h="20vh" w="20vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold" align="center">Trash Collector</Text>
                            <Flex alignSelf="center">
                            <Link href="https://github.com/Schmidt1519/trash-collector/" isExternal>
                                    <Text color="white" p="4" fontSize="sm" fontWeight="semibold">Server/Client</Text>
                                </Link>
                            </Flex>
                    </Flex>

                </Flex>
     
            </Box>

        </Flex>
        )
}

export default Projects;