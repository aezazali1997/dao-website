import React from 'react'
import {Box,Text} from "@chakra-ui/react"
const ProgramOfStudies = () => {
  return (
    <Box position="relative" marginX="auto" top="30" w={["auto","auto","50rem"]} borderRadius="5" borderWidth="1px" borderStyle="solid" borderColor="purple.600" mx={["1rem","1rem","auto"]}>
    <Text textAlign="center" fontSize="3xl" color="purple.600">Program of studies</Text>
    <Text textAlign="left" p="1rem" mt="2rem">This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
</Text>
</Box>
  )
}

export default ProgramOfStudies