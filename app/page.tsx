"use client"

import { Inter } from '@next/font/google'
import { MetaverseLayer } from '../public/Images'
import Evolution from '../app/components/Evolution'
import Courses from './components/Courses'
import Nutshell from '../app/components/Nutshell'
import Panacloud from '../public/pana.svg';
import Sylani from '../public/saylani.png';
import { Box, Text, Flex } from '@chakra-ui/react'

import TypeWriter from 'typewriter-effect'
import Image from 'next/image'
import SpecializedTracks from './components/SpecializedTracks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box as="section">
      <Flex flexDirection={["column-reverse","column-reverse","row"]}  position="relative" top={["0","0","120"]} justify={"space-between"} >
        <h1 className='typewriter'>

        <TypeWriter
          options={{
            strings: ['Certified web 3.0 and Metaverse Developer', 'Earn as you Learn Program','Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies'],
            autoStart: true,
            loop: true,
            cursor:"_"
          }}/>
       
        </h1>
        < MetaverseLayer /> 
      </Flex>
      <Evolution />
      <Nutshell />
      <Courses />
      <SpecializedTracks />
      <Box bg="gray.100" py='4rem' my='2rem'>
        <Text fontSize={'4xl'} textAlign="center" fontFamily={"fantasy"} fontWeight={'bold'}>Strategic Partner</Text>
        <Flex direction={['column','column','row']} margin="auto" alignItems={'center'} justify={'space-between'} width={['auto','auto',"40rem"]} mt="1rem">

        <Image alt='panacloud' width={230} height={230} src={Panacloud}  />
        <Image alt='sylani' width={230} height={230} src={Sylani} />
        </Flex>
   </Box>
    </Box>
  )
}