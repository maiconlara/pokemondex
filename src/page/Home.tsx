import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokeCard from '../components/pokecard';
import NavBar from '../components/navbar';
import { Container, Grid } from '@chakra-ui/react'

export const Home = () => {
    const [pokemons, setValue] = useState([]);
    useEffect(() =>{
    getData();
}, [])


interface Pokemon {
    name: string;
   
  }

const getData = () =>{
   /* var arr = [];
    for (var i =1; i<50; i++){
      arr.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(arr);
    var response = axios.all(arr.map(pokeurl => axios.get(pokeurl)))
    .then((res) => setValue(res))
    .catch((err) => console.log(err));*/

    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=52")
    .then((res) => setValue(res.data.results))
    .catch((err) => console.log(err));
}
  return (
    <div>

        <NavBar/ >
       
        <Container maxW='3x12'>
       <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            {pokemons.map((poke : Pokemon) => (
                <PokeCard name={poke.name} key={poke.name} / >
                ))}
        </Grid> 
        </Container>


        
    </div>
  )
}
