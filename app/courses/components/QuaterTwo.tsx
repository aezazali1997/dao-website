import React from 'react'

import {Flex,Stack,Box,Text,OrderedList,ListItem, UnorderedList} from '@chakra-ui/react'
import Link from 'next/link'
const QuaterTwo = () => {
  return (
    <>


    <Text fontSize={'2xl'} textAlign="center">
Quarter II (Core)
</Text>
    <Text fontSize={'2xl'} fontFamily='bold' textAlign="center">CS-101: W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

    </Text>
    <Text fontSize={'1xl'} textAlign='center'>Duration: 13 Weeks
    </Text>
    <Flex direction={'column'} textAlign="left" px="5rem" >
      <Text textDecoration={'underline'} >Course Description</Text>
      <Text mt="2rem">The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).

      </Text>
      <Text textDecoration={'underline'} >Course Outline</Text>

    </Flex>
    <Flex px="2rem" my="2rem">
      <OrderedList>
        <ListItem width={['25rem','25rem','auto']} fontSize={'2xl'}>Next.js 13 Web Development 
          <Text
            fontSize={'20px'}
            my='1rem'
            width={
              'auto'
            }
          >Next 13 Official Documentation
          </Text>
          <Link href='https://beta.nextjs.org/docs'> <Text  textDecoration={'underline'} color={'blue'} fontSize="16px" >https://beta.nextjs.org/docs</Text></Link>
          <Text fontSize={'20px'} my={'1rem'} wordBreak="break-word">Latest Learn React Official Website
          </Text>
          <Link href='https://beta.reactjs.org/learn'> <Text textDecoration={'underline'} mb="1rem" color={'blue'} fontSize={'16px'}>https://beta.reactjs.org/learn
            </Text></Link>
        </ListItem>
        <ListItem fontSize={'2xl'} width={['25rem','25rem','auto']}>Web 3.0 and Metaverse Theory
          <Text fontSize='20px' my="1rem" > 	Introduction to Panaverse DAO
          </Text>
          <Link href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing 
'> <Text textDecoration={'underline'} color={'blue'} fontSize="16px" mb="1rem" >https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing
            </Text></Link>
        
        <Text fontSize='20px' my="1rem">Web 3.0 User Guide

        </Text>
        <Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing 
'> 
<Text textDecoration={'underline'} fontSize={'16px'} color={'blue'}>https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing
          </Text></Link>
        <Text fontSize="20px" mb="1rem">Complete Web 3 Assignments included in the Web 3 User Guide
        </Text>
        <Text fontSize="20px" mb="1rem">Virtual and Augmented  Metaverse User Guide
        </Text>

        <Link href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing 
'> <Text textDecoration={'underline'} color={'blue'} fontSize={'16px'}>https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing

          </Text></Link>
          </ListItem>
        <ListItem fontSize={'2xl'} width={['25rem','25rem','auto']}>Fundamentals of Typescript
        <Text fontSize={'20px'} my='1rem'>TypeScript Presentation
        </Text>

        <Link href='https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing 
'> <Text textDecoration={'underline'} color={'blue'} mb='1rem' fontSize={'16px'}>https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing


          </Text></Link>
          <Text fontSize={'20px'} my='1rem'>Getting Started Exercises with TypeScript and Node.js

        </Text>

        <Link href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md'> <Text textDecoration={'underline'} color={'blue'} mb='1rem' fontSize={'16px'}>https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
          </Text></Link>
          <Text fontSize={'20px' } mb='1rem'>
          Fundamentals of JavaScript and Node.js Quiz
            <br />
            <br />
            
            Topics Covered in the Quiz:

          </Text>
          <OrderedList fontSize={'18px'}>
              <ListItem>Background of JavaScript and How to use JavaScript in Browser
</ListItem>
<ListItem>Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)

</ListItem>
<ListItem>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
</ListItem>
<ListItem>How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
</ListItem>
<ListItem>Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>JavaScript promises, mastering the asynchronous
</ListItem>
<ListItem>New JavaScript Features in ECMAScript 2022 and 2021
</ListItem>
          </OrderedList>
        {/* section end */}
        </ListItem>
        <ListItem fontSize={'2xl'} my='1rem'>
        Object-Oriented Programming with TypeScript
        <Text fontSize={'18px'} textDecor="underline" color="blue" mt={"10px"}>Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</Text>
        <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1">
          <Text color="blue" fontSize={'18px'} mt="10px">https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1</Text>
        </Link>
        <Text fontSize={'18px'}>Learning Repository
</Text>
<Link href={'https://github.com/panaverse/learn-typescript '}  ><Text fontSize={'16px'} mt="10px" color="blue" textDecor={'underline'}>https://github.com/panaverse/learn-typescript</Text>  </Link>

<Text fontSize={'18px'} mt="10px">In Class Companion projects and articles for Learning TypeScript

</Text>
<Link href={'https://www.learningtypescript.com/'}  ><Text fontSize={'16px'} mt="10px" color="blue" textDecor={'underline'}>https://www.learningtypescript.com/</Text>  </Link>

<Text fontSize={'18px'} mt="10px">Homework Project


</Text>
<Link href={'https://github.com/panaverse/typescript-node-projects'}  ><Text fontSize={'16px'} mt="10px" color="blue" textDecor={'underline'}>https://github.com/panaverse/typescript-node-projects</Text>  </Link>

<Text fontSize={'20px'} mt='20px'>Fundamentals of TypeScript Quiz
</Text>
<Text fontSize={'20px'} mt='20px'>	TypeScript Professional Proficiency Quiz
</Text>

        </ListItem>

      </OrderedList>

    </Flex>

  </>
  )
}

export default QuaterTwo;