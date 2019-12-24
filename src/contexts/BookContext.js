import React, {createContext,useState}from 'react';
import uuid from 'uuid/v1';

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    const[books,setBooks]=useState([
        {title:'Empire of the clouds',author:'Bruce Dickinson',id:1},
        {title:'Dance of the death',author:'Steve Harris',id:2},
        {title:'Strangers on a strange land',author:'Ozzy Osborune',id:3},
        {title:'The rime of the ancent marriner', author:'Steve Vai',id:4}
        
    ]);

    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    }
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }

    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
export default BookContextProvider;