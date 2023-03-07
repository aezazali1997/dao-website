import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { EarnWhileLearn } from '../../public/Images'
const Nutshell = () => {
    return (
        <Box py="4rem" px="2rem" bg="purple.300">
            <Flex direction={['column','column',"row"]} justify={["justify-center","justify-center","space-between"]}>
                <Box w={['auto','auto',"50%"]}>
                    <Text textAlign="center" fontFamily="monospace" textTransform="uppercase" fontSize="4xl" color="white">
                        Program In a Nutshell
                    </Text>
                    <Text textAlign="center" fontFamily="monospace" fontSize="lg" color="white">
                    Earn While You Learn
                    </Text>
                    <Text  w={['auto','auto',"25rem"]}  margin="auto" mt="8" fontSize="1xl" >In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
                </Box>
                <Box mt="2" w={['auto','auto',"50%"]}>

                    <EarnWhileLearn />

                </Box>
            </Flex>
        </Box>
    )
}

export default Nutshell