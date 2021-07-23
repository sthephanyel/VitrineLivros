import React from 'react'
import axios from 'axios';
import useSWR from 'swr';
import SimpleRatin from "./stars";

const fetcher = (...params) => axios
    .get(...params)
    .then(resp => resp.data)

function HomeSMR() {

    const {data}= useSWR(
        'http://localhost:3333/episodes', 
        fetcher)
    if(!data){
        return <h2>Buscando dados...</h2>
    }
    console.log(data)
    return (
        <>
        <h1>Projeto nome: {data.id}</h1>
        <h1>Projeto descricao: {data.description}</h1>
        </>
    );


  }

  export default HomeSMR;