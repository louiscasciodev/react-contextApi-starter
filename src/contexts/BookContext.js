import React, {createContext,useState}from 'react';

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    const[books,setBooks]=useState([
        {title:'Empire of the clouds',id:1},
        {title:'Dance of the death',id:2},
        {title:'Strangers on a strange land',id:3},
        {title:'The rime of the ancent marriner', id:4}
        
    ]);

    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;