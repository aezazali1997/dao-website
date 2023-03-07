import {Box,Flex,Text,List,ListItem,ListIcon,Icon,Input,Button} from '@chakra-ui/react'
import Link from 'next/link'
import {LinkIcon,AboutIcon,CoursesIcon,DegreeIcon, HomeIcon, WhatsAppIcon, FacebookIcon, GithubIcon, YoutubeIcon, TwitterIcon} from '../../public/Icons'
const Footer = ()=>{
    return (
        <Box bg="purple.400" height={["auto","auto","200"]} w="full" p="2rem">
            <Flex direction={["column","column","row"]} justify="space-between">

            <Box my="1rem">
                    <Text color="white" textAlign={["center","center","left"]} fontSize="2xl" textTransform="capitalize" mb="3">useful links</Text>
                <List color="white">
                    <Flex direction="column" textAlign={["center","center","left"]} justify="space-between">

                    <ListItem mb="2" textDecoration="underline">
                        <ListIcon w="20px" h="20px" as={HomeIcon} color="white" />
                        <Link href="/">
                        Home
                        </Link>
                        </ListItem>
                    <ListItem mb="2" textDecoration="underline">
                    <ListIcon w="20px" h="20px" as={DegreeIcon} color="white" />
                    <Link href="/courses">
                        Courses
                    </Link>
                        </ListItem>
                    <ListItem textDecoration="underline">
                    <ListIcon w="20px" h="20px" as={AboutIcon} color="white" />
                        <Link href="/about">
                        About
                        </Link>
                        </ListItem>
                    </Flex>
                </List>
            </Box>
            <Box> 
                <Flex direction="column" textAlign="center" alignItems="center">
                <Text color="white"  fontSize="2xl" textTransform="capitalize" mb="3">Newsletter</Text>
                <Input type="text" w={['auto','auto',"25rem"]} bg="white" placeholder="Subscibe" />
                <Button w="10rem" mt="1rem" variant="outline" color="white" _hover={{
                    background:'white',
                    color:'purple.600',
                    border:'none'
                }} >Subscribe now</Button>
                </Flex>

            </Box>
            <Box mt={["1rem","1rem","auto"]}>
            <Flex direction="column" textAlign="center"  alignItems="center">
                <Text color="white" textAlign="center"   fontSize="2xl" textTransform="capitalize" mb="3">Contact</Text>
                <Text color="white" textAlign="center"   fontSize="sm" textTransform="capitalize" mb="1">+92-308-2220203 
                <Icon ml="1rem" as={WhatsAppIcon} h="18px" w="18px" />
                </Text>
                <Box mt="1rem">
                    <Flex direction="row" justify={'space-between'}>
                        <Link href="https://www.facebook.com/groups/panaverse">
                        <Icon mx="1" as={FacebookIcon} h="22px" w="22px" />
                        </Link>
                        <Link href="https://www.youtube.com/@panaverse/streams ">

                        <Icon mx="1" as={YoutubeIcon} h="22px" w="22px" />
                        </Link>
                        <Link href="https://github.com/panaverse">
                        <Icon mx="1" as={GithubIcon} h="22px" w="22px" />
                        </Link>
                    </Flex>
                    <Flex>
                        <Link href='https://twitter.com/Panaverse_edu '>
                    <Icon mx="1" as={TwitterIcon} h="22px" w="22px" />
                        </Link>

                    </Flex>

                </Box>
            </Flex>
            </Box>

            </Flex>
        </Box>
        )
}
export default Footer;