import { VStack, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/color-mode';
import Profile from './components/profile';
import Header from './components/header';
import Social from './components/social';

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <VStack p={5}>
      <Flex w="100%">
        {/* insert logo here */}
        <Heading ml="6" size="md" fontWeight="semibold" color="blue.300">L S</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
        <IconButton icon={<FaGithub />} isRound="true"></IconButton>
        <IconButton icon={<FiMail />} isRound="true"></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
        <Header></Header>
        <Social></Social>
        <Profile></Profile>
    </VStack>
  );
}

export default App;
