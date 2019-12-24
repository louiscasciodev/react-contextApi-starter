import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() { 
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return ( 
//       <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  //const { isLightTheme, light, dark } = useContext(ThemeContext);
  const {books}=useContext(BookContext);
  //const theme = isLightTheme ? light : dark;
  return books.length?( 
    <div className="book-list">
      <ul>
        {books.map(book=>{
          return (<BookDetails book={book}key={book.id}/>);
        })}
      </ul>
    </div>
  ):(
    <div className="empty">No books to read </div>
  );
}
 
export default BookList;