"use client"
import {Box,Flex,Text,Button} from '@chakra-ui/react';
import Link from 'next/link'
import ProgramOfStudies from '../components/ProgramOfStudies'
import Outcomes from '../components/Outomes'
export default function About(){
    return (
        <Box position="relative" top="120">
        <ProgramOfStudies />
        <Box my="5rem">
        <hr />
        </Box>
        <Outcomes />
        </Box>
    )

}