import { Box, Text, Icon, Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { DegreeIcon } from '../../public/Icons'

const Headline = () => {
    return (
        <Box as="section" w="full" bg="purple.500" h="auto" margin="auto" py='6px'>
            <Flex justify="center" textAlign='center'>
                <Text fontSize={["sm", "sm", "lg"]} w={["140px", "auto"]} overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"} color="white" fontWeight={["bold", "normal"]}>Build your career by becoming a part of panaverse DAO Company </Text>
                <Icon as={DegreeIcon} h="28px" w="28px" color="white" display={["none", "none", "inline"]} ml={4}></Icon>
                <Button ml={12} colorScheme="gray" h="auto" >
                    <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit">
                        Learn more
                    </Link>
                </Button>

            </Flex>
        </Box>
    )
}
export default Headline;