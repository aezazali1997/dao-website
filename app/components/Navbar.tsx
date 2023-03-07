"use client"
import { Box, Flex, Text,ListItem, Button, Icon, UnorderedList } from '@chakra-ui/react'
import { Logo,Menu } from '../../public/Icons'
import Link from 'next/link'
import Headline from './Headline'
import NavbarLinks from './NavbarLinks'
import "../../styles/global.css"
import { useState } from 'react'
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <Box as="section" position="fixed" w="full" zIndex="101" >

            <Headline />
            <Box background="white" h="auto" py="6px" px="24px" borderBottom="1px solid rgba(0,0,0,.1)"  boxShadow="0px 1px 5px 0px rgba(0,0,0,0.21)"
            >
                <Flex flexDirection="row" position={"relative"} justify='space-between' alignItems="center">
                    <Link href="/">
                        <Icon as={Logo} h="62px" w="auto"></Icon>
                    </Link>
                    <NavbarLinks />
                <Button colorScheme={"purple"} display={["none","none","block"]} >
                    <Link href="https://portal.piaic.org/signup">
                    Apply now
                    </Link>
                </Button>
                <Icon as={Menu} onClick={(e)=>{
                    setIsOpen(!isOpen)
                }} display={["block","block","none"]} h="32px" w="32px" color={"purple.400"} className="menu-container"></Icon>
                
                    <Box className="main-manu-container" >
                        <Box className='menu'   w="100" style={ isOpen ? {maxHeight:"100vh",overflow:'hidden'} :{maxHeight:0,overflow:'hidden'} }>
                            <UnorderedList  className='list-menu'>

                            <ListItem>
                                <Link href={'/'} onClick={()=>setIsOpen(!isOpen)}>
                                Home
                                </Link>
                                </ListItem>
                            <ListItem>
                                <Link href='/about' onClick={()=>setIsOpen(!isOpen)}>
                                About
                                </Link>
                                </ListItem>
                            {/* <ListItem>
                                <Link href={'/courses'} onClick={()=>setIsOpen(!isOpen)}>
                                Courses
                                </Link>
                                </ListItem> */}
                            </UnorderedList>
                        </Box>
                    </Box>
                
                </Flex>
            </Box>
        </Box>

    )
}
export default Navbar;