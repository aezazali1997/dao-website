import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import Link from 'next/link'
import sol from '../../public/sol.webp'
import block from '../../public/block.jpg'
import vr from '../../public/vr.jpeg'
import ai from '../../public/ai.jpeg'
import python from '../../public/python.webp';
import ml from '../../public/ml.jpeg'
import ci from '../../public/ci.jpeg'
import ckad from '../../public/ckad.png'
import tf from '../../public/tf.png'
import ac from '../../public/ac.png'
import ac5 from '../../public/ac5.png'
import ac4 from '../../public/ac4.jpeg'
import bi from '../../public/bi.jpeg'
import bi4 from '../../public/bi4.png'
import bi5 from '../../public/bi5.jpeg'
import np from '../../public/np.jpeg'
import np4 from '../../public/np4.jpeg'
import np5 from '../../public/np5.jpeg'
import Timeline from './Timeline';



const SpecializedTracks = () => {

        const items = [
                {
                 generic :'Web 3.0 (Blockchain) and Metaverse',
                  title: "Web 3.0 (Blockchain) and Metaverse",
                  description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
                  link: "https://roadmap.sh/blockchain",
                  image:block,
                },
                {
                  title: "Quarter IV",
                  link: "https://www.geeksforgeeks.org/introduction-to-solidity/",
              
                  description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                  image:sol
                },
                {
                  title: "Quarter V",
                  link: "https://experiments.withgoogle.com/collection/webvr",
              
                  description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                  image:vr
                },
                {
                        generic :'Artificial Intelligence (AI) and Deep Learning Specialization',
                         title: "Artificial Intelligence (AI) and Deep Learning Specialization                         ",
                         description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.                         ",
                         link: "https://www.geeksforgeeks.org/artificial-intelligence-an-introduction/",
                         image:ai,
                       },
                       {
                         title: "Quarter IV",
                         link: "https://www.geeksforgeeks.org/python-programming-language/",
                     
                         description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                         image:python
                       },
                       {
                         title: "Quarter V",
                         link: "https://www.simplilearn.com/tutorials/deep-learning-tutorial/deep-learning-with-python",
                         description: "AI-361: Deep Learning and MLOps",
                         image:ml
                       },
                       {
                        generic :'Cloud-Native Computing',
                         title: "Cloud-Native Computing",
                         description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
                         link: "https://www.udacity.com/course/cloud-native-fundamentals--ud064",
                         image:ci,
                       },
                       {
                         title: "Quarter IV",
                         link: "https://www.udemy.com/course/certified-kubernetes-application-developer-training/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879423894_._ad_535397245857_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171032_._li_1011086_._pd__._&matchtype=&gclid=CjwKCAiAlp2fBhBPEiwA2Q10D7OAfPo11VtPr5zXlz2-C0A_sgnz9yp-8-TmM_FSDSUHKZIr0Kkr5hoCutMQAvD_BwE",
                         description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                         image:ckad
                       },
                       {
                         title: "Quarter V",
                         link: "https://developer.hashicorp.com/terraform/cdktf",    
                         description: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
                         image:tf
                       },
                       {
                        generic :'Ambient Computing and IoT ',
                         title: "Ambient Computing and IoT ",
                         description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.                          ",
                         link: "https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/technology/deloitte-uk-ambientcomputing.pdf",
                         image:ac,
                       },
                       {
                         title: "Quarter IV",
                         link: "https://www.nordicsemi.com/Products/Matter?utm_source=google%20&utm_medium=cpc&utm_term=matter&utm_campaign=apac&utm_term=matter%20protocol%20iot&utm_campaign=Topic+%7C+Low+Power+Cellular+%7C+North+America&utm_source=adwords&utm_medium=ppc&hsa_tgt=kwd-1409149967402&hsa_grp=134055220220&hsa_src=g&hsa_net=adwords&hsa_mt=b&hsa_ver=3&hsa_ad=581697631654&hsa_acc=1116845495&hsa_kw=matter%20protocol%20iot&hsa_cam=16191042218&gclid=CjwKCAiAlp2fBhBPEiwA2Q10D_jmDcv1xlOlCJFdqreHEBozRLDsmY-rOT3zlWmtcJZm-TDNJNjHZxoChz4QAvD_BwE",
                     
                         description: "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
                         image:ac4
                       },
                       {
                         title: "Quarter V",
                         link: "https://docs.rust-embedded.org/book/interoperability/c-with-rust.html",
                         description: "AC-361: Embedded Programming using C and Rust",
                         image:ac5
                       },
                       {
                        generic :'Genomics and Bioinformatics',
                         title: "Genomics and Bioinformatic",
                         description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications",
                         link: "https://www.coursera.org/specializations/bioinformatics",
                         image:bi,
                       },
                       {
                         title: "Quarter IV",
                         link: "https://pythonforbiologists.com/",
                     
                         description: "Bio-351: Python for Biologists",
                         image:bi4
                       },
                       {
                         title: "Quarter V",
                         link: "https://biopython.org/",
                     
                         description: "Bio-361: Bioinformatics with Python",
                         image:bi5
                       },
                       
                       
                       
                       
                       {
                        generic :'Network Programmability and Automation',
                         title: "Network Programmability and Automation",
                         description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
                         link: "https://www.oreilly.com/library/view/network-programmability-and/9781491931240/",
                         image:np,
                       },
                       {
                         title: "Quarter IV",
                         link: "https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/ccna-200-301.html",
                     
                         description: "NPA-351: CCNA 200-301 Certification",
                         image:np4
                       },
                       {
                         title: "Quarter V",
                         link: "https://blog.networktocode.com/post/npa-book-second-edition/",
                     
                         description: "NPA-361: Network Programmability and Automation",
                         image:np5
                       }
              ]


  return (
        <>
   <Box>
    <Flex my="1rem" direction='row' justify={'center'} >
        <Text fontSize="4xl" textAlign={'center'} color={'purple.600'} fontFamily='monospace'>Specialized Tracks</Text>
    </Flex>
   </Box>
   <div className="container mx-auto">
      <Timeline items={items} />
    </div>
    </>
  )
}

export default SpecializedTracks;