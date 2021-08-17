import { useContext, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import React from 'react'
import styles from '../styles/IndexStyle2.module.scss'
import SimpleRatin from "./ComponentsUI/stars";
import api from '../api';
import { playerContext } from './ComponentsUI/comtext/playerContext';
import {EditFilled, DeleteFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';

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
            <h1>Lista de livros HomeAPI GRID</h1>
            <button type="submit" onClick={navegate}>Adicionar Livro</button>
            <div className={styles.containerGeral}>
            {livros.map(user =>{
                return(
                    <div className={styles.ReturnMap}>
                        <Row>
                        <li key={user.id} style={{listStyleType:'none'}} className={styles.styleLi}>
                        <Col className={styles.Col}>
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
                             <div className={styles.quebrandoLinhas}>
                                 Estrelas
                             </div>
                             
                             <div className={styles.quebrandoLinhas}>
                                 <p>{user.description}</p>
                             </div>
                             <div className={styles.quebrandoLinhas}>
                                <p>{user.value}</p>
                             </div>
                             
                             <button onClick={()=>excluir(user.id, user.title)}><DeleteFilled /></button>
                             <button><EditFilled /></button>
                         </div>  
                        </Col>
                        </li>
                        </Row>
                    </div>
                );
            })}
            </div>
        </div>
    );
  }

  export default HomeApi;