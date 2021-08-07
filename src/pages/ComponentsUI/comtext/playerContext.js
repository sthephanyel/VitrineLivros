import { createContext } from "react";

export const playerContext = createContext();

export default function PlayerContextProvider({children}){

    function excluir(id){
    console.log('deletando')
    fetch(`http://localhost:3333/episodes/${id}`,{
        method:'DELETE',
        headers: { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        }
    });
    
};


return(
    <playerContext.Provider value={{excluir}}>
        {children}
    </playerContext.Provider>
        );
}