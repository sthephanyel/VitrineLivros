import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

import React from 'react'
import axios from 'axios';

import SimpleRatin from "./stars";


function HomeApi() {

    const history = useHistory();
    const [livros, setLivros] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3333/episodes')
        .then((response)=>{
        setLivros(response.data);
        })
    },[])

    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({title:'Exemplos de react post'})
        };
        fetch('http://localhost:3333/episodes', requestOptions)
        .then(response => response.json())
        .then(data => setLivros(data.id))
    },[])

    function NovoLivro(){
        useEffect(()=>{
            const requestOptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({title:'Exemplos de react post'})
            };
            fetch('http://localhost:3333/episodes', requestOptions)
            .then(response => response.json())
            .then(data => setLivros(data.id))
        },[])
    }
    
    

    
    function navegate(){
        history.push('/novoLivro')
    }
    return (



        <div>
            <h1>Lista de livros</h1>
            <button type="submit" onClick={navegate}>Adicionar Livro</button>

            
            <div style={{background:"red", marginBottom:"1rem"}}>
                <h3>Novo livro</h3>
                <div>
                 <input type="file" name ="img" placeholder="Imagem"></input>
                 <input type="text" name ="nome" placeholder="Nome Livro"></input>
                 <input type="text" name ="descricao"placeholder="descrição"></input>
                 <input type="text" name ="valor" placeholder="valor"></input>
                 <button type="submit" onClick={NovoLivro}>Salvar</button>
                </div>
            </div>





            
            {livros.map(user =>(
                    <li key={user.id}>
                        <img src={user.thumbnail}></img>
                        <p>{user.title}</p>
                        <p>Autor</p>
                        <SimpleRatin></SimpleRatin>
                        <p>{user.description}</p>
                        <p>{user.value}</p>
                    </li>
                ))}
        </div>
    );


  }

  export default HomeApi;