
import React from 'react'
import { useEffect, useState } from 'react'
import api from '../api';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function NovoLivro(){
    const history = useHistory();
    const [valores, setValores] = useState({});

    function retornar(){
        history.push('/');
    };

    function onChange(event){
        const {name, value} = event.target;
        console.log({name, value})
        setValores({...valores, [name]: value});
    };

    function onSubmit(event){
        event.preventDefault();
        api.post(`episodes`, valores)
        .then((response)=>{
            setValores(response.data.id);
            history.push('/');
        })
    };
        return(
            <div>
                <h1>Novo livro</h1>
                <form>
                 <input type="file" onChange={onChange} name ="thumbnail" placeholder="Imagem"></input>
                 <input type="text" onChange={onChange} name ="title" placeholder="Nome Livro"></input>
                 <input type="text" onChange={onChange} name ="description"placeholder="descrição"></input>
                 <input type="text" onChange={onChange} name ="value" placeholder="valor"></input>
                 <input type="text" onChange={onChange} name ="members" placeholder="Autor"></input>

                 <button type='submit' onClick={onSubmit} >Salvar</button>
                </form>
                <div>
                    <button onClick={retornar}>Voltar</button>    
                </div>         
            </div>
        );
}

  export default NovoLivro;