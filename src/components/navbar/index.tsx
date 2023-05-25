import * as React from 'react'
import { ChakraProvider, Input } from '@chakra-ui/react'


export default function NavBar() {
  // 2. Wrap ChakraProvider at the root of your app

  return (
    <ChakraProvider>
    <Input placeholder='Digite o nome de um pokemon...' />
  
    </ChakraProvider>
  )
}