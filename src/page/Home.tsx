import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokeCard from '../components/pokecard';
import { ChakraProvider, Container, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

export const Home = () => {
    const [pokemons, setValue] = useState([]);
    useEffect(() =>{
    getData();
}, [])

interface Pokemon {
    name: string;
    url: string;
  }

const getData = () =>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=386&offset=1")
    .then((res) => setValue(res.data.results))
    .catch((err) => console.log(err));
}


  return (
    <div>

<ChakraProvider>
      <Tabs>
  <TabList>
    <Tab>Geração 1, 2 e 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>  Em minha opinião, a geração 3 é a melhor! </p>
    </TabPanel>
  </TabPanels>
</Tabs>
<Container maxW='3x12'>
       <Grid templateColumns='repeat(6, 1fr)' gap={3}>
            {pokemons.map((poke : Pokemon) => (
                <PokeCard name={poke.name} key={poke.name} url={poke.url} / >
                ))}
        </Grid> 
        </Container>
    </ChakraProvider>
    
    


        
    </div>
  )
}
