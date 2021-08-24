import { createContext } from "react";

export const playerContext = createContext();

export default function PlayerContextProvider({children}){

    function excluir(id, title){
        if(confirm(`Deseja realmente apagar o livro ${title}?`)){
            console.log('deletando')
            fetch(`http://localhost:3333/episodes/${id}`,{
                method:'DELETE',
                headers: { 
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                }
            }).then(document.location.reload(true));
        }
};
    function editar () {
        alert('ainda em produção');
    }

return(
    <playerContext.Provider value={{excluir, editar}}>
        {children}
    </playerContext.Provider>
        );
}