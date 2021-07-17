
import React from 'react'



function NovoLivro(){
    const [livros, setLivros] = useState([]);

    useEffect(()=>{
        axios.post('http://localhost:3333/episodes')
        .then((response)=>{
            setLivros(response.data);
        })
    },[])

    function adicionando(){

    }

        return(
            <div>
                <h1>Novo livro</h1>
                <div>
                 <input type="file" name ="img" placeholder="Imagem"></input>
                 <input type="text" name ="nome" placeholder="Nome Livro"></input>
                 <input type="text" name ="descricao"placeholder="descrição"></input>
                 <input type="text" name ="valor" placeholder="valor"></input>
                 <button type="submit">Salvar</button>
                </div>
                
            </div>
        );
}

  export default NovoLivro;