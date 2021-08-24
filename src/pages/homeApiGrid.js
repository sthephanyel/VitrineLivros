import { useContext, useEffect, useState } from 'react'
import React from 'react'
import styles from '../styles/IndexStyle2.module.scss'
import api from '../api';
import { playerContext } from './ComponentsUI/comtext/playerContext';
import {EditFilled, DeleteFilled, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import ModalActive from './Modal/Modal';
import ModalLivros from './Modal/ModalLivros';
import Stars from './ComponentsUI/stars';

function HomeApi() {

    const {excluir, editar} = useContext(playerContext);
    const [livros, setLivros] = useState([]);
    const[Adicionando, setAdicionando] = useState(false);
    const [detalhes, setDetalhes] = useState(false);

    useEffect(()=>{
        try{
            api.get(`episodes`)
            .then((response)=>{
            setLivros(response.data);
            })
            .then(loading =>'Carregando...')
        }catch(error){
            console.error(error);
        }
    },[])

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h1>Mais vendidos em livros</h1>
            <button type="submit" style={{width:'2rem',height:'2rem',transform: 'translate(10%,30%)'}}
            onClick={()=>setAdicionando(true)}>
                <PlusOutlined />
            </button>
            </div>
            

            <div className={styles.containerGeral}>
            {livros.map(user =>{
                return(
                    <div className={styles.ReturnMap}>
                        <Row>
                        <li key={user.id} style={{listStyleType:'none'}} className={styles.styleLi} >
                        <Col className={styles.Col}>
                        <div className={styles.container} >
                             <div style={{textAlign: 'center'}} onClick={() => {
                                setDetalhes(true);
                            }
                             
                            }>
                                 <img src={user.thumbnail}></img>
                             </div>
                             <div className={styles.quebrandoLinhas}>
                                 <p style={{fontWeight:'800', color:'#00BFFF'}}>{user.title}</p>
                             </div>
                             <div className={styles.quebrandoLinhas} style={{color:'#00BFFF'}}>
                                 <p>{user.members}</p>
                             </div>
                             <div className={styles.quebrandoLinhas}>
                                 <Stars></Stars>
                             </div>
                             
                             <div className={styles.quebrandoLinhas}>
                                 <p>{user.description}</p>
                             </div>
                             <div className={styles.quebrandoLinhas}>
                                <p>{user.value}</p>
                             </div>
                             
                             <button onClick={()=>excluir(user.id, user.title)}><DeleteFilled /></button>
                             <button onClick={()=>editar()}><EditFilled /></button>
                         </div>  
                        </Col>
                        </li>
                        </Row>
                    </div>
                );
            })}
            </div>

            <ModalActive
                active={Adicionando}
                cancel={() => {
                setAdicionando(false);
                }}
            />
            <ModalLivros
            active={detalhes}
            cancel={() => {
            setDetalhes(false);
            }}
            detalhesDoLivro={livros}
            ></ModalLivros>
    
        </div>
    );
  }

  export default HomeApi;