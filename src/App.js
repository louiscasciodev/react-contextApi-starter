import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BookContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import NewBookForm from './components/BookForm';

function App(){
  return(
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <ThemeContextProvider>
//         <AuthContextProvider>
//           <Navbar />
//           <BookContextProvider>
//           <BookList />
//           </BookContextProvider>
//           <ThemeToggle />
//         </AuthContextProvider>
//       </ThemeContextProvider>
//     </div>
//   );
// }

 export default App;