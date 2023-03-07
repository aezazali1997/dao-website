import { List, ListItem, Flex } from '@chakra-ui/react'
import Link from 'next/link';
const NavbarLinks = () => {
    return (

        <List w="96">
            <Flex flexDirection={"row"} display={["none","none","flex"]} justify="space-around">

            <ListItem color='purple.300' fontWeight='semibold' >
                <Link href="/" >
                    Home
                </Link>
            </ListItem>
            <ListItem color='purple.300' fontWeight='semibold'>
                <Link href="/about">
                    About
                </Link>
            </ListItem>
            {/* <ListItem color='purple.300' fontWeight='semibold'>
                <Link href="/courses">
                    Courses
                </Link>
            </ListItem> */}
            </Flex>
        </List>
    )
}
export default NavbarLinks;