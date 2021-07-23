import { Component, useEffect } from 'react'
import SimpleRatin from "./stars";
import React from 'react'
import api from '../api';


class Home extends Component{

    state={
        livros:[],
    }

    async componentDidMount(){
        try{
            const response = await api.get('');
            // console.log(response.data)
            this.setState({livros: response.data});
        }catch(error){
            console.error(error);
        }
        
    }

    render(){

        const {livros} = this.state;
        return(
            <div>
                <h1>Lista</h1>
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