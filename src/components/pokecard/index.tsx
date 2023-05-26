import * as React from 'react'
import { Card, CardBody, ChakraProvider, Heading, Stack, Image, Center } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PokeCard({ name, url }: { name: string, url: string}) {
  


  const [sprite, setValue] = useState([]);
  useEffect(() =>{
  getData();
}, [])

const getData = () =>{
   axios
   .get(url)
   .then((res) => setValue(res.data.sprites.front_default))
   .catch((err) => console.log(err));
}



  return (
    <ChakraProvider>
      <Card maxW='md' >
  <CardBody borderRadius={'base'} shadow={'Dark lg'} bgColor={'gray.300'}>
    <Center>
    <Image  w={150}
      src={`${sprite}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    /></Center>
    <Stack mt='1' spacing='2'>
      <Heading size='md'>{name}</Heading>
    </Stack>
  </CardBody>
</Card>
    </ChakraProvider>
  )
}