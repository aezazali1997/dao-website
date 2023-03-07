
"use client"
import {Box,Text} from '@chakra-ui/react'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Box py={'4rem'} width="auto" textOverflow={'unset'}>
      <Text pt='4rem' textAlign={'center'} fontSize="4xl">Detailed Course Syllabus</Text>
          {children}
          </Box>
    </div>
  )
}
