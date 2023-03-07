import React from 'react'
import { Box, Flex, Text,List,ListItem, UnorderedList, OrderedList } from "@chakra-ui/react"
import { PostImage} from '../../public/Images'
import Image from 'next/image'
 
type Props = {
    dir?:string,
    title?:string,
    description?:string,
    image?:any,
    bullets?:boolean,
    points?:string[]

}

const Post:React.FC<Props> = ({dir,bullets,description,image,points,title}) => {
    
    return (

        <Box p={'2rem'} >
            <Flex flexDir={["column",'column',`${dir === 'right' ? 'row-reverse' : 'row'}`] } justifyContent={["center","space-between"]} alignItems={["center","center","auto"]}>
                <Box width={"50%"} >
                    <Text fontSize={'2xl'} mb="2rem" width={["auto","auto","40rem"]} textTransform="capitalize">{title}
                    </Text>

                    <Text>{description}</Text>
                    {
                        bullets &&
                    
                        <UnorderedList>
                            {
                                
                                points?.map((pt)=>{
                                    return <ListItem mb='10px'>{pt}</ListItem>
                                })
                            } 
                    </UnorderedList>
                    }
                </Box>
                <Box width={"50%"} mt={["1rem","1rem","auto"]} >
                <PostImage src={image} alt="dummy"  />
                </Box>
            </Flex>
        </Box>
    )
}

export default Post