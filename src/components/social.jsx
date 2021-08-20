import React from 'react';
import { HStack } from '@chakra-ui/react';
import {Icon } from '@chakra-ui/icon';
import { FaFacebook, FaTwitter, FaYoutube, FaSpotify, FaInstagramSquare } from 'react-icons/fa';
import { Link } from '@chakra-ui/react';


function Social() {
    return (
        <HStack spacing="24">
            <Link href="https://www.facebook.com/leighton.schmidt/" isExternal><Icon as={FaFacebook} boxSize="10"/></Link>
            <Link href="https://twitter.com/Schmidt15" isExternal><Icon as={FaTwitter} boxSize="10"/></Link>
            <Link href="https://www.youtube.com/channel/UCBxQk3QBpPZLkhhdsDoAl3w/" isExternal><Icon as={FaYoutube} boxSize="10"/></Link>
            <Link href="https://open.spotify.com/user/schmidt1519/" isExternal><Icon as={FaSpotify} boxSize="10"/></Link>
            <Link href="https://www.instagram.com/schmidt15/" isExternal><Icon as={FaInstagramSquare} boxSize="10"/></Link>
        </HStack>
    );
}

export default Social;