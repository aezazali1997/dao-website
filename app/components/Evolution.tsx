import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
const Evolution = () => {
    return (
        <Box as='section'  bg="gray.100" py="2rem" px="4rem" zIndex="100" position="relative">
            <Flex direction="column" justify="center" alignItems="center">
                <Text color="purple.600" fontSize="3xl" fontFamily="heading" mb="1rem">Evolution</Text>
                <Text fontSize="md" textAlign={["left","left","center"]} w={["auto","auto","50rem"]}>The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.

                Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
                </Text>
            </Flex>
        </Box>
    )
}

export default Evolution