import { Component, useEffect } from 'react'

import React from 'react'
import api from '../api';


class Home extends Component{

    state={
        livros:[],
    }

    async componentDidMount(){
        const response = await api.get('');
        // console.log(response.data)
        this.setState({livros: response.data});
    }

    render(){

        const {livros} = this.state;
        return(
            <div>
                <h1>Lista</h1>
                {livros.map(livro =>(
                    <li key={livro.id}>
                        <h2><strong>Título:</strong>
                        {livro.title}
                        </h2>
                        <h2><strong>thumbnail:</strong>
                        <img src={livro.thumbnail}></img>
                        </h2>
                    </li>
                ))}
            </div>
        );
    }
}


// function Home() {

//     // useEffect(()=>{
//     //     fetch('http://localhost:3333/episodes')
//     //     .then(response=>response.json())
//     //     .then(data=>console.log(data))
//     // },[])
//     return (
//         <div>
//             <h1>Hello World home</h1>
//         </div>
      
      
//     );
//   }

//   export async function getServerSideProps(){
//       const response = await fetch('http://localhost:3333/episodes')
//       const data = await response.json()

//       return{
//           props:{
//               episodes: data,
//           }
//       }
//   }
  
  export default Home;