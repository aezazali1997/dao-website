import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import Link from 'next/link'
import Timeline from './Timeline'
import typescriptImage from '../../public/TypeScriptImage.jpeg'
import nextImage from '../../public/next.png'
import envato from '../../public/envato.png'
const Courses = () => {

const items = [
  {
    title: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    link: "https://www.typescriptlang.org/docs/",
    image:typescriptImage,
    name:'Typescript'
  },
  {
    title: "Quarter II",
    link: "https://www.typescript.com",

    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    image:nextImage,
    name:'Fullstack apps'
  },
  {
    title: "Quarter III",
    link: "https://themeforest.net/",

    description: "  $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    image:envato,
    name:'Earn dollar'
  }
]
  return (
    <>
   <Box>
    <Flex my="1rem" direction='row' justify={'center'} >
        <Text fontSize="4xl" textAlign={'center'} color={'purple.600'} fontFamily='monospace'>Core Common Courses</Text>
    </Flex>
   </Box>
   <div className="container mx-auto">
      <Timeline items={items} />
    </div>
    </>
  )
}

export default Courses