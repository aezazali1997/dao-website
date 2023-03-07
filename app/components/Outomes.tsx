import React from 'react'
import {Text,Flex,Button,Box} from '@chakra-ui/react'
import Post from './Post'
import blockSalary from '../../public/blockchainsalary.png'
import MetaverseImage from '../../public/metaverse.jpeg'
import web3 from '../../web3.png'
import nft from '../../public/nft.png'
const Outomes = () => {
  return (
    <Box mb="12rem" mt="2rem">
        <Text fontSize="3xl" textAlign="center">Outcomes of the course</Text>
        <Post dir='left' title='Top 5 Metaverse jobs that will rule the future of tech industry
                        HIRING' description='Here are top 5 job titles that will rule the world with Metaverse’s growing popularity:'
                        bullets={true} points={['Software engineers (AR platforms)','Game designers','NFT strategist','Blockchain engineer','Product managers']} image={MetaverseImage} />
        <Post dir='right' title='Blockchain Developer Salary - Feb 2023' 
        description='The average yearly salary for a Blockchain Developer is $100k per year, with a minimum base salary of $40k and a maximum of $240k' 
        bullets={true}
        points={["Blockchain developer in North America in avarage makes $120k - $240k per year","Remote Blockchain developer in avarage makes $110k - $260k per year","Blockchain developer in Europe in avarage makes $80k - $150k per year",
        "Blockchain developer in Oceania in avarage makes $70k - $120k per year",
        "Blockchain developer in Asia in avarage makes $50k - $153k per year",
        "Blockchain developer in Africa in avarage makes $47k - $70k per year",
        "Blockchain developer in South America in avarage makes $42k - $150k per year"]}
        image={blockSalary}
        />
        <Post dir='left' 
        title='Web3 Salaries Soar to $750,000 for Rank-and-File Devs'
        description='Other eye-popping postings have crossed the wires: TempleDAO, an OlympusDAO fork, posted a job paying $300,000 to $900,000 and it quickly made the rounds on Twitter. LooksRare also offered a package that topped $600,000, according to The Daily Ape.'
        image={web3}
        />
        <Post dir='right'
        title='The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters | Newzoo Trend Report'
        description='Halfway through 2022, hype around the metaverse has continued. The metaverse, NFTs, and blockchain gaming have transitioned from being largely unknown concepts to terms on the lips of every major brand or investor.

        This fast-moving space demands an understanding of its foundational trends.
        
        That’s why our free metaverse report identifies metaverse trends, analyzes case studies, and tries to discern the future of the metaverse, P2E, blockchain gaming, and NFT space.'
      image={nft}
        />
        

     </Box>
  )
}

export default Outomes