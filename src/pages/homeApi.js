import { useContext, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import React from 'react'
import styles from '../styles/IndexStyle.module.scss'
import SimpleRatin from "./ComponentsUI/stars";
import api from '../api';
import { playerContext } from './ComponentsUI/comtext/playerContext';
import {EditFilled, DeleteFilled} from '@ant-design/icons';

function HomeApi() {

    const {excluir} = useContext(playerContext);

    const history = useHistory();
    const [livros, setLivros] = useState([]);

    useEffect(()=>{
        try{
            api.get(`episodes`)
            .then((response)=>{
            setLivros(response.data);
            })
        }catch(error){
            console.error(error);
        }
        

    },[])

    function navegate(){
        history.push('/novoLivro')
    }

    return (
        <div>
            <h1>Lista de livros HomeAPI</h1>
            <button type="submit" onClick={navegate}>Adicionar Livro</button>
            <div style={{maxWidth: '210px',wordWrap:'break-word', height: '200vh', display: 'flex'}}>
            {livros.map(user =>{
                return(
                    <div className={styles.containerFull}>
                    <li key={user.id} style={{listStyleType:'none'}}>
                        <div className={styles.container}>
                            <div style={{textAlign: 'center'}}>
                                <img src={user.thumbnail}></img>
                            </div>
                            <div className={styles.quebrandoLinhas}>
                                <p style={{fontWeight:'800'}}>{user.title}</p>
                            </div>
                            <div className={styles.quebrandoLinhas}>
                                <p>{user.members}</p>
                            </div>
                            <SimpleRatin></SimpleRatin>
                            <div className={styles.quebrandoLinhas}>
                                <p>{user.description}</p>
                            </div>
                            <p>{user.value}</p>
                            <button onClick={()=>excluir(user.id)}><DeleteFilled /></button>
                            <button><EditFilled /></button>
                        </div>                  
                    </li>          
                    </div>
                );
            })}
            </div>
        </div>
    );
  }

  export default HomeApi;