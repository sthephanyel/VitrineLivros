import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useState } from 'react'
import api from '../../api';
import {useHistory} from 'react-router-dom'

export default function ModalActive({active, cancel}) {
    const history = useHistory();
    const [valores, setValores] = useState({});

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
        })
        .then(document.location.reload(true));
    };
  
  return (
    <Modal visible={active} onCancel={cancel} onOk={onSubmit} okText='Salvar'>
      <div>
        <h1>Novo livro</h1>
        <form>
            <input type="file" onChange={onChange} name ="thumbnail" placeholder="Imagem" ></input>
            <input type="text" onChange={onChange} name ="title" placeholder="Nome Livro" required></input>
            <input type="text" onChange={onChange} name ="description"placeholder="descrição" required></input>
            <input type="text" onChange={onChange} name ="value" placeholder="valor" required></input>
            <input type="text" onChange={onChange} name ="members" placeholder="Autor" required></input>
        </form>      
    </div>
    </Modal>
  );
}