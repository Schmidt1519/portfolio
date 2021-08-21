import React from 'react';
import { HStack, Link, useMediaQuery} from '@chakra-ui/react';
import {Icon } from '@chakra-ui/icon';
import { FaFacebook, FaTwitter, FaYoutube, FaSpotify, FaInstagramSquare } from 'react-icons/fa';

function Social() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
        <HStack spacing={isNotSmallScreen ? "24" : "3"}>
            <Link href="https://www.facebook.com/leighton.schmidt/" isExternal><Icon as={FaFacebook} boxSize="10"/></Link>
            <Link href="https://twitter.com/Schmidt15" isExternal><Icon as={FaTwitter} boxSize="10"/></Link>
            <Link href="https://www.youtube.com/channel/UCBxQk3QBpPZLkhhdsDoAl3w/" isExternal><Icon as={FaYoutube} boxSize="10"/></Link>
            <Link href="https://open.spotify.com/user/schmidt1519/" isExternal><Icon as={FaSpotify} boxSize="10"/></Link>
            <Link href="https://www.instagram.com/schmidt15/" isExternal><Icon as={FaInstagramSquare} boxSize="10"/></Link>
        </HStack>
    );
}

export default Social;